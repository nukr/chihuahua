use axum::{Router, routing::get};
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
async fn main() {
    tracing_subscriber::fmt::init();
    let args = Args::parse();
    let assets = ServeDir::new("loan-html/assets");
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

    let addr = format!("0.0.0.0:{}", args.port);
    // run our app with hyper, listening globally on port 3000
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    let _ = axum::serve(listener, app).await;
}

async fn statistics() {}
