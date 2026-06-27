# 3D Gaussian Splatting (3DGS) Baseline Environment

This directory documents the initial data ingestion phase for constructing a 3D Gaussian Splatting model of a locomotive engine.

## Input Dataset
Reconstruction relies on multi-view overlapping photographic frames capturing geometric variations across multiple focal distances:
*   `train_front.png` / `train_back.png`: Tracking foreground profile features.
*   `train_side.png` / `train_platform.png`: Capturing high-contrast text strings ("713", "WESTERN PACIFIC") and mechanical details.
*   `train_telephoto.png`: Telephoto perspective mapping structural alignment from a distance.

## Structural Initialization
Using feature matching algorithms across these frames, we successfully calculated camera extrinsic/intrinsic matrix attributes and derived a sparse point cloud:
*   **Output Asset:** `point_cloud.ply` 

*Note on Repository Optimization: The generated point cloud file (~222 MB) exceeds remote server push constraints. It has been securely decoupled from remote tracking via `.gitignore` and is processed locally for browser-side rasterization testing.*
