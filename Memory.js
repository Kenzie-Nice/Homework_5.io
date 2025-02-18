const images = [
    'images/here/Green_tea_Kukicha.jpg', 'images/here/Green_tea_Kukicha.jpg', 
    'images/here/coffee-mug_NVKXLIKJ25.jpg', 'images/here/coffee-mug_NVKXLIKJ25.jpg', 
    'images/here/main-qimg-14ff668b1c08bfab4cc710cdfba6a9d3-lq.jpg', 'images/here/main-qimg-14ff668b1c08bfab4cc710cdfba6a9d3-lq.jpg', 
    'images/here/pexels-photo-6711567.jpeg', 'images/here/pexels-photo-6711567.jpeg', 
    'images/here/tea-black-tea-drink-tea-cup-preview.jpg', 'images/here/tea-black-tea-drink-tea-cup-preview.jpg', 
    'images/here/tea-candy-green-tea-black-tea.jpg', 'images/here/tea-candy-green-tea-black-tea.jpg'
];

images.sort(() => Math.random() - 0.5); // Shuffle images

const grid = document.getElementById('grid');
let firstPick = null;
let secondPick = null;
let lockBoard = false; // Prevents clicking during match check

images.forEach((image, index) => {
    let img = document.createElement('img');
    img.src = 'images/here/blank.jpg'; // Default blank image
    img.dataset.index = index;
    
    img.onclick = () => {
        if (lockBoard || img.src !== window.location.origin + '/images/here/blank.jpg') return; // Prevent clicking revealed images

        img.src = images[index]; // Reveal image

        if (!firstPick) {
            firstPick = { img, index };
        } else {
            secondPick = { img, index };
            lockBoard = true; // Prevent more clicks
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
            firstPick.img.src = 'images/here/blank.jpg'; 
            secondPick.img.src = 'images/here/blank.jpg';
        }, 500);
    }

    firstPick = null;
    secondPick = null;
    lockBoard = false;
}
