document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-placeholder]').forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.getAttribute('href') === '#') {
      e.preventDefault();
      alert('Este link será ativado com o canal oficial da LUMIER.');
    }
  });
});
