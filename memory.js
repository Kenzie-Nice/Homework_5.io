const imagePaths = [
    'images/Green_tea_Kukicha.jpg', 'images/coffee-mug_NVKXLIKJ25.jpg', 
    'images/main-qimg-14ff668b1c08bfab4cc710cdfba6a9d3-lq.jpg', 'images/pexels-photo-6711567.jpeg', 
    'images/tea-black-tea-drink-tea-cup-preview.jpg', 'images/tea-candy-green-tea-black-tea.jpg'
];

const images = [];
imagePaths.forEach(img => images.push(img, img));
images.sort(() => Math.random() - 0.5);

const grid = document.getElementById('grid');
const blankImage = 'images/blank.jpg';
let firstPick = null;
let secondPick = null;
let lockBoard = false;
let attempts = 0;

for (let i = 0; i < images.length; i++) {
    let img = document.createElement('img');
    img.src = blankImage;
    img.dataset.index = i;
    img.onclick = () => handleCardClick(img, i);
    grid.appendChild(img);
}

function handleCardClick(img, index) {
    if (lockBoard || img.src.includes(images[index])) return;

    img.src = images[index];

    if (!firstPick) {
        firstPick = { img, index };
    } else {
        secondPick = { img, index };
        lockBoard = true;
        attempts++;
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if (firstPick.index !== secondPick.index && images[firstPick.index] === images[secondPick.index]) {
        firstPick = null;
        secondPick = null;
        lockBoard = false;
    } else {
        setTimeout(() => {
            firstPick.img.src = blankImage;
            secondPick.img.src = blankImage;
            firstPick = null;
            secondPick = null;
            lockBoard = false;
        }, 500);
    }
}
