


const noBtn = document.getElementById('no-button');
const btnWidth = noBtn.getBoundingClientRect().width;
const btnHeight = noBtn.getBoundingClientRect().height;
const width = screen.width - btnWidth;
const height = screen.height - btnHeight;

noBtn.addEventListener('mouseover', (e) => {
    let x = (e.clientX + btnWidth + Math.random() * 10) % width
    let y = (e.clientY + btnHeight + Math.random() * 10) % height

    noBtn.style.left = `${Math.floor((x))}px`;
    noBtn.style.top = `${Math.floor((y))}px`;
});


const yesBtn = document.getElementById('yes-button');
const responseSection = document.getElementById('js-response')

yesBtn.addEventListener('click', () => {
    noBtn.style.left = 'initial';
    noBtn.style.top = 'initial';
    responseSection.classList.add('response--show')
})