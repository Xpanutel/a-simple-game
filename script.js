const board = document.querySelector('#board');
const KVADRATNUM = 598;
const colors = ['#FF0000', '#00FF00', '#FFA500', '#FFFF00', "#00FFFF", "#FF00FF", "#1E90FF", "#FFF"]

for (let i = 0; i < KVADRATNUM; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square);
}

function setColor(element) {
  const colorit = getRandomColor();
  element.style.backgroundColor = colorit;
  element.style.boxShadow = `0 0 2px ${colorit}, 0 0 10px ${colorit}`
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d"
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index]
}