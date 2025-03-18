const images = ["0.jpeg", "1.jpeg", "2.jpeg"]; // 이미지 파일 이름들
function changeBackground() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url(img/${chosenImage})`;
}

changeBackground();