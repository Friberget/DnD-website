// Hämtar referensen till elementet.ui-elementet
const wrapper = document.getElementById("ui");

const BASE_WIDTH = 1066;
const BASE_HEIGHT = 600;
const PADDING = 200; // Padding runtomkring spelet

export function resizeGame() {
  const availableWidth = window.innerWidth - PADDING * 2;
  const availableHeight = window.innerHeight - PADDING * 2;

  const scale = Math.min(
    availableWidth / BASE_WIDTH,
    availableHeight / BASE_HEIGHT
  );

  wrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

export function initiate_ui_scale() {
  resizeGame();
  window.addEventListener("resize", resizeGame);
}
