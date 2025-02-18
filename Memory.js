const images = ['img1.jpg', 'img1.jpg', 'img2.jpg', 'img2.jpg', 'img3.jpg', 'img3.jpg', 'img4.jpg', 'img4.jpg', 'img5.jpg', 'img5.jpg', 'img6.jpg', 'img6.jpg'];

images.sort(() => Math.random() - 0.5);

const grid = document.getElementById('grid');

images.forEach((image, index) => {
    let img = document.createElement('img');
    img.src = 'blank.jpg';
    img.dataset.index = index;
    img.onclick = () => {
        console.log(`Image at index ${index} clicked`);
        img.src = images[index];
    };
    grid.appendChild(img);
});
