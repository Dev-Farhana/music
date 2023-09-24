const mode = document.querySelector('#mode');
mode.addEventListener('click', () => {
    document.querySelector('.phone').classList.toggle('dark');
    document.querySelector('.bi-brightness-high-fill').classList.toggle('bi-moon');
})