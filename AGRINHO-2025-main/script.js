const video = document.getElementById('meuVideo');
const btn = document.getElementById('playPauseBtn');

btn.addEventListener('click', () => {
  if (video.paused || video.ended) {
    video.play();
    btn.textContent = 'Pause';
  } else {
    video.pause();
    btn.textContent = 'Play';
  }
});

// Opcional: alterar o texto do botão ao terminar o vídeo
video.addEventListener('ended', () => {
  btn.textContent = 'Play';
});