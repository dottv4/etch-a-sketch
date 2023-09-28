const container = document.querySelector('.container');
// function makeGrid() {
//     for (let i = 0; i < 256; i++) {
//         let row = document.createElement('div');
//         row.className = 'gridItem';  
//         container.appendChild(row);
//     };
// };
//  makeGrid();

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
        //cell.textContent = (i +1);
        cell.className = 'gridItem';
        container.style.cssText = `grid-template-columns: repeat(${row}, 50px); grid-template-rows: repeat(${col}, 50px);`;
        container.appendChild(cell);
    }
};

const popUpBtn = document.querySelector('#popUp');
popUpBtn.addEventListener('click', () => {
     let row = window.parseInt(prompt('Enter the number of rows for the new grid'), 10);
     let col = window.parseInt(prompt('Enter the number of columns for the new grid'), 10);
     if (row > 100) {
        alert('Use numbers less than 100')
        return
     } else if (col > 100) {
        alert('Use numbers less than 100')
        return
     }
     inputGrid(row, col);
});

inputGrid(16, 16);
const testBtn = document.querySelector('#test');
testBtn.textContent = 'RGB Mode'

testBtn.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = changeColor();
        });
    });
});

const clearBtn = document.getElementById('clear');
const gridItems = document.querySelectorAll('.gridItem');

clearBtn.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.removeAttribute('style');
    })
});

gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'lightgreen'
    })
})