const model = document.querySelector('.model');
const preview = document.querySelectorAll('.gallery img');
const full = document.querySelector('.full-img');
const imgTxt = document.querySelector('.caption');

preview.forEach(element => {
    element.addEventListener('click', () => {
        model.classList.add('open');
        full.classList.add('open');
        const fullSrc = element.getAttribute('data-original');
        full.src = `./img/${fullSrc}`;
        const altText = element.alt;
        imgTxt.innerHTML = altText;
    })
})
model.addEventListener('click', (e) => {
    if(e.target.classList.contains('model')) {
        model.classList.remove('open');
        full.classList.remove('open');
    }
})