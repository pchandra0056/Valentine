const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const bgMusic = document.getElementById("bgMusic");

bgMusic.addEventListener('error', (e) => {
  console.error('Audio element error:', e);
});
bgMusic.addEventListener('loadedmetadata', () => {
  console.log('Audio loaded, duration:', bgMusic.duration);
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 300 + "px";
  noBtn.style.top = Math.random() * 300 + "px";
});

yesBtn.addEventListener("click", () => {
  try {
    bgMusic.muted = false;
    bgMusic.volume = 1.0;
    bgMusic.currentTime = 0;
    bgMusic.play().then(() => {
      const container = document.querySelector('.container');
      if (container) {
        container.innerHTML = "<h1 style='color:#ff2e93;text-align:center;margin-top:10vh;'>I Love You Bache, Be Ready For Surprises...💕</h1>";
      }
      console.log('Playback started via Yes button');
    }).catch(e => {
      console.error('Playback error on Yes click:', e);
      alert('Playback failed — check the console for details.');
    });
  } catch (e) {
    console.error('Unexpected error when attempting to play audio:', e);
  }
});

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);