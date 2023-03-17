const containerDiv = document.querySelector('.container');
const playSound = () => {
  const audio = new Audio('./Asset/Audio-01.wav');
  audio.play();
};
containerDiv.addEventListener('click', playSound);



