import { validateAll } from './validators.js';

const extractBtn = document.getElementById('extractBtn');
const inputText = document.getElementById('inputText');
const resultsDiv = document.getElementById('results');

extractBtn.addEventListener('click', (e) => {
  createRipple(e);

  const text = inputText.value;
  const options = {
    email: document.getElementById('email')
    url: document.getElementById('url')
    phone: document.getElementById('phone')
    time: document.getElementById('time')
  };

  const result = validateAll(text, options);
  displayResults(result);
});

function displayResults(result) {
  resultsDiv.innerHTML = '';

  for (const [type, values] of Object.entries(result)) {
    const section = document.createElement('div');
    section.innerHTML = `<strong>${type.toUpperCase()}:</strong><br>${values.length ? values.join('<br>') : 'None found'}<br><br>`;
    resultsDiv.appendChild(section);
  }
}

function createRipple(e) {
  const button = e.currentTarget;
  const ripple = document.createElement("span");
  ripple.className = "ripple";

  const size = Math.max(button.offsetWidth, button.offsetHeight);
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = e.offsetX - size / 2 + "px";
  ripple.style.top = e.offsetY - size / 2 + "px";

  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}
