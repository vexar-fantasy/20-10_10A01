export const getScratchProgress = (canvas: HTMLCanvasElement, sample = 4) => {
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return 0;
  const { data, width, height } = context.getImageData(0, 0, canvas.width, canvas.height);
  let transparent = 0;
  let total = 0;
  for (let y = 0; y < height; y += sample) {
    for (let x = 0; x < width; x += sample) {
      total += 1;
      if (data[(y * width + x) * 4 + 3] < 30) transparent += 1;
    }
  }
  return total ? transparent / total : 0;
};
