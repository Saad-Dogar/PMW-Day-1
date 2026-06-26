# Neural Radiance Fields (NeRF) Training Experiment

This experiment evaluates the training behavior and image synthesis quality of an AI model learning scene radiance from a synthetic dataset (Toy Tractor).

## Dataset & Reference Image
*   **Target Asset:** `tractor.png`
*   **Resolution:** Low-resolution coordinate training evaluation.

## Training Progress Analysis
We monitored the neural network over 900 iterations to track coordinate-based neural mapping precision:
*   **Iteration 300:** Geometry is heavily blurred and cloudy; low high-frequency detail.
*   **Iteration 600:** Structural boundaries of the loader shovel and treads begin sharpening.
*   **Iteration 900:** Final render resolves main geometry and directional specular highlights clearly.

## Performance Metrics (PSNR)
The peak-signal-to-noise ratio (PSNR) graph shows localized peaks during structural convergence around step 100 and step 500, fluctuating as the network resolves fine texture elements against the dark background. 

*Note: While NeRF provides clean photorealistic depth transitions, coordinate training limits real-time rendering speed due to extensive per-ray neural computations.*
