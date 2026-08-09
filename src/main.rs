use std::{net::SocketAddr, path::PathBuf};

use anyhow::Result;
use axum::{
    Router,
    extract::Request,
    http::Uri,
    middleware::{self, Next},
    response::Response,
};
use axum_server::tls_rustls::RustlsConfig;
use clap::Parser;
use tower_http::services::ServeDir;

#[derive(Parser, Debug)]
#[command(version, about = "Chihuahua CLI tool")]
struct Args {
    #[arg(short, long)]
    port: u16,
}

/// Serve clean URLs without a redirect: for an extensionless path that isn't the
/// root and has no trailing slash (e.g. `/service/enterprise-loan`, `/consult`),
/// rewrite it to `<path>/index.html` so `ServeDir` returns the prerendered page
/// with a 200 instead of a 307 to the trailing-slash form. Paths with a file
/// extension (assets) and the root are left untouched.
async fn clean_urls(mut req: Request, next: Next) -> Response {
    let path = req.uri().path();
    let last_segment = path.rsplit('/').next().unwrap_or("");
    if path != "/" && !path.ends_with('/') && !last_segment.contains('.') {
        let rewritten = match req.uri().query() {
            Some(query) => format!("{path}/index.html?{query}"),
            None => format!("{path}/index.html"),
        };
        if let Ok(uri) = rewritten.parse::<Uri>() {
            *req.uri_mut() = uri;
        }
    }
    next.run(req).await
}

#[tokio::main]
async fn main() -> Result<()> {
    tracing_subscriber::fmt::init();
    let args = Args::parse();
    let manifest_dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    // configure certificate and private key used by https
    let config = RustlsConfig::from_pem_file(
        manifest_dir.join("self_signed_certs").join("cert.pem"),
        manifest_dir.join("self_signed_certs").join("key.pem"),
    )
    .await?;

    // Serve the entire prerendered SSG output as one static tree. The root `/`
    // still resolves to `index.html` via `append_index_html_on_directories`;
    // nested clean URLs are handled by the `clean_urls` rewrite layer.
    let serve_dir =
        ServeDir::new(manifest_dir.join("loan-html")).append_index_html_on_directories(true);
    let app = Router::new()
        .fallback_service(serve_dir)
        .layer(middleware::from_fn(clean_urls));

    let addr = SocketAddr::from(([0, 0, 0, 0], args.port));
    axum_server::bind_rustls(addr, config)
        .serve(app.into_make_service())
        .await?;
    return Ok(());
}
