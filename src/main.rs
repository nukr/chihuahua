use std::{net::SocketAddr, path::PathBuf};

use anyhow::Result;
use axum::{Router, routing::get};
use axum_server::tls_rustls::RustlsConfig;
use clap::Parser;
use tower::ServiceExt;
use tower_http::services::ServeDir;

#[derive(Parser, Debug)]
#[command(version, about = "Chihuahua CLI tool")]
struct Args {
    #[arg(short, long)]
    port: u16,
}

#[tokio::main]
async fn main() -> Result<()> {
    tracing_subscriber::fmt::init();
    let args = Args::parse();
    let assets = ServeDir::new("loan-html/assets");
    // configure certificate and private key used by https
    let config = RustlsConfig::from_pem_file(
        PathBuf::from(env!("CARGO_MANIFEST_DIR"))
            .join("self_signed_certs")
            .join("cert.pem"),
        PathBuf::from(env!("CARGO_MANIFEST_DIR"))
            .join("self_signed_certs")
            .join("key.pem"),
    )
    .await?;
    let app = Router::new()
        // `GET /` goes to `root`
        .route(
            "/",
            get(|req| async {
                let serve_dir = ServeDir::new("loan-html");
                let result = serve_dir.oneshot(req).await;
                result
            }),
        )
        .nest_service("/assets", assets.clone());

    let addr = SocketAddr::from(([0, 0, 0, 0], args.port));
    axum_server::bind_rustls(addr, config)
        .serve(app.into_make_service())
        .await?;
    return Ok(());
}
