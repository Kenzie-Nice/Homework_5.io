const imagePaths = [
    'images/Green_tea_Kukicha.jpg', 'images/coffee-mug_NVKXLIKJ25.jpg',
    'images/main-qimg-14ff668b1c08bfab4cc710cdfba6a9d3-lq.jpg', 'images/pexels-photo-6711567.jpeg',
    'images/tea-black-tea-drink-tea-cup-preview.jpg', 'images/tea-candy-green-tea-black-tea.jpg'
];

const images = [...imagePaths, ...imagePaths]; // Duplicate each image for matching pairs
images.sort(() => Math.random() - 0.5); // Shuffle images

const grid = document.getElementById('grid');
let firstPick = null;
let secondPick = null;
let lockBoard = false;
let attempts = 0;

const blankImage = 'images/blank.jpg';

const imageElements = images.map((image, index) => {
    let img = document.createElement('img');
    img.src = blankImage;
    img.dataset.index = index;
    
    img.onclick = () => {
        if (lockBoard || img.src !== window.location.origin + '/' + blankImage) return;
        
        img.src = images[index];

        if (!firstPick) {
            firstPick = { img, index };
        } else {
            secondPick = { img, index };
            lockBoard = true;
            attempts++;
            setTimeout(checkMatch, 1000);
        }
    };

    grid.appendChild(img);
    return img;
});

function checkMatch() {
    if (firstPick.index !== secondPick.index && images[firstPick.index] === images[secondPick.index]) {
        console.log("Match found!");
    } else {
        console.log("No match, flipping back.");
        setTimeout(() => {
            firstPick.img.src = blankImage;
            secondPick.img.src = blankImage;
        }, 500);
    }

    firstPick = null;
    secondPick = null;
    lockBoard = false;
}
