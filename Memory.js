const images = [
    'images/Green_tea_Kukicha.jpg', 'images/Green_tea_Kukicha.jpg', 
    'images/coffee-mug_NVKXLIKJ25.jpg', 'images/coffee-mug_NVKXLIKJ25.jpg', 
    'images/main-qimg-14ff668b1c08bfab4cc710cdfba6a9d3-lq.jpg', 'images/main-qimg-14ff668b1c08bfab4cc710cdfba6a9d3-lq.jpg', 
    'images/pexels-photo-6711567.jpeg', 'images/pexels-photo-6711567.jpeg', 
    'images/tea-black-tea-drink-tea-cup-preview.jpg', 'images/tea-black-tea-drink-tea-cup-preview.jpg', 
    'images/tea-candy-green-tea-black-tea.jpg', 'images/tea-candy-green-tea-black-tea.jpg'
];

images.sort(() => Math.random() - 0.5);

const grid = document.getElementById('grid');
let firstPick = null;
let secondPick = null;
let lockBoard = false;

images.forEach((image, index) => {
    let img = document.createElement('img');
    img.src = 'images/blank.jpg';
    img.dataset.index = index;
    
    img.onclick = () => {
        if (lockBoard || img.src !== `${window.location.origin}/images/blank.jpg`) return;

        img.src = image;

        if (!firstPick) {
            firstPick = { img, index };
        } else {
            secondPick = { img, index };
            lockBoard = true;
            setTimeout(checkMatch, 1000);
        }
    };

    grid.appendChild(img);
});

function checkMatch() {
    if (firstPick.index !== secondPick.index && images[firstPick.index] === images[secondPick.index]) {
        console.log("It's a match!");
    } else {
        console.log("Not a match, flipping back.");
        setTimeout(() => {
            firstPick.img.src = 'images/blank.jpg';
            secondPick.img.src = 'images/blank.jpg';
        }, 500);
    }

    firstPick = null;
    secondPick = null;
    lockBoard = false;
}
