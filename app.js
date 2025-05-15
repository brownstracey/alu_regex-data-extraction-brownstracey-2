import { validateAll } from './validators.js';
import { fetchTextData } from './api_fetcher.js';

document.addEventListener('DOMContentLoaded', () => {
  const extractBtn = document.getElementById('extractBtn');
  const inputText = document.getElementById('inputText');
  const resultsDiv = document.getElementById('results');

  extractBtn.addEventListener('click', async (e) => {
    createRipple(e);

    let text = inputText.value.trim();

    if (!text) {
      text = await fetchTextData(); 
    }

    const options = {
      email: document.getElementById('email').checked,
      url: document.getElementById('url').checked,
      phone: document.getElementById('phone').checked,
      time: document.getElementById('time').checked,
      hashtag: document.getElementById('hashtag').checked,
      currency: document.getElementById('currency').checked
    };

    const result = validateAll(text, options);
    displayResults(result, resultsDiv);
  });
});

function displayResults(result, container) {
  container.innerHTML = '';

  for (const [type, values] of Object.entries(result)) {
    const section = document.createElement('div');
    section.innerHTML = `<strong>${type.toUpperCase()}:</strong><br>${values.length ? values.join('<br>') : 'None found'}<br><br>`;
    container.appendChild(section);
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
