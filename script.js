const statusButton = document.getElementById('statusButton');
const statusText = document.getElementById('statusText');

statusButton.addEventListener('click', () => {
  statusText.textContent =
    'Aplikacija je spremna za GitHub Pages deployment i Discord feedback loop.';
});
