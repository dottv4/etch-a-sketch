const container = document.querySelector('.container');

function makeGrid() {
    for (let i = 0; i < 256; i++) {
        let row = document.createElement('div');
        row.className = 'gridItem';  
        container.appendChild(row);
    };
};
makeGrid();

function random(number) {
    return Math.floor(Math.random() * (number + 1));
};

const gridItems = document.querySelectorAll('.gridItem');
const changeColor = function() {
    const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return color
};

gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = changeColor();
    });
});
