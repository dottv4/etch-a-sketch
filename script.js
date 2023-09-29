const container = document.querySelector('.container');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
};

const changeColor = function() {
    const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return color
};

function inputGrid(row, col) {
    for (let i = 0; i < (row * col); i++) {
        let cell = document.createElement('div');
        cell.className = 'gridItem';
        container.style.cssText = `grid-template-columns: repeat(${row}, 50px); grid-template-rows: repeat(${col}, 50px);`;
        container.appendChild(cell);
    }
    
    let clicked = false;
    const gridItems = document.querySelectorAll('.gridItem');
    const clearBtn = document.getElementById('clear');
    const testBtn = document.querySelector('#test');
    testBtn.textContent = 'RGB Mode'


    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#555555'
        })
    });

    clearBtn.addEventListener('click', () => {
        gridItems.forEach(item => {
            item.removeAttribute('style');
        })
    });

    testBtn.addEventListener('click', () => {
        if (clicked === false) {
        gridItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.style.backgroundColor = changeColor();
            });
        })
       clicked = true;
        } else {
            gridItems.forEach(item => {
                item.addEventListener('mouseover', () => {
                    item.style.backgroundColor = '#555555';
                });
            });
        clicked = false;   
        };
    });
};

const popUpBtn = document.querySelector('#popUp');
popUpBtn.addEventListener('click', () => {
     let row = window.parseInt(prompt('Enter the number of rows for the new grid'), 10);
     let col = window.parseInt(prompt('Enter the number of columns for the new grid'), 10);
     if (row > 100 || col > 100) {
        alert('Use numbers less than 100');
        return
     } else if (row || col) {
        removeGrid();
        inputGrid(row, col);
     } else {
        return
     }
});

inputGrid(16, 16);
const testBtn = document.querySelector('#test');
testBtn.textContent = 'RGB Mode'

function removeGrid() {
    const grid = document.querySelector('.container')

    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
};