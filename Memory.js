const images = ['img1.jpg', 'img1.jpg', 'img2.jpg', 'img2.jpg', 'img3.jpg', 'img3.jpg', 'img4.jpg', 'img4.jpg', 'img5.jpg', 'img5.jpg', 'img6.jpg', 'img6.jpg'];

images.sort(() => Math.random() - 0.5);

const grid = document.getElementById('grid');
let firstPick = null;
let secondPick = null;

images.forEach((image, index) => {
    let img = document.createElement('img');
    img.src = 'images/blank.jpg'; // Updated path
    img.dataset.index = index;
    
    img.onclick = () => {
        if (firstPick && secondPick) return;
        if (firstPick && firstPick.index === index) return;

        img.src = `images/${images[index]}`; // Updated path

        if (!firstPick) {
            firstPick = { img, index };
        } else {
            secondPick = { img, index };
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
        firstPick.img.src = 'images/blank.jpg'; // Updated path
        secondPick.img.src = 'images/blank.jpg'; // Updated path
    }

    firstPick = null;
    secondPick = null;
}
