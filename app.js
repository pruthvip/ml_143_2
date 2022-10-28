


const noBtn = document.getElementById('no-button');
const btnWidth = noBtn.getBoundingClientRect().width;
const btnHeight = noBtn.getBoundingClientRect().height;
const width = screen.width - btnWidth;
const height = screen.height - btnHeight;

const eventsToListen = ['mouseover', 'click'];

eventsToListen.forEach(event => {
    noBtn.addEventListener(event, (e) => {
        let x = (e.clientX + btnWidth + Math.random() * 10) % width
        let y = (e.clientY + btnHeight + Math.random() * 10) % height
    
        noBtn.style.left = `${Math.floor((x))}px`;
        noBtn.style.top = `${Math.floor((y))}px`;
    });
});

const yesBtn = document.getElementById('yes-button');
const responseSection = document.getElementById('js-response');
const negativeBtnClick = document.getElementById('js-negative-action-container');


yesBtn.addEventListener('click', () => {
    noBtn.style.display = 'none';
    negativeBtnClick.style.display = 'none';
    responseSection.classList.add('response--show');
});





