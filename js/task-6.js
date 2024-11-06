function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; 
    const box = document.createElement('div'); 
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); 
    boxes.push(box); 
  }
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value); 
  if (amount < 1 || amount > 100) {
    return; 
  }

  destroyBoxes(); 
  createBoxes(amount); 
  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

