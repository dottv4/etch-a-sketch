const DEFAULT_COLOR = '#555555'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = '16'

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

function setCurrentColor(newColor) {
    currentColor = newColor
}

function setCurrentMode(newMode) {
    currentMode = newMode 
}

function setCurrentSize(newSize) {
    currentSize = newSize
}

const colorBtn = document.getElementById('color')
const rgbBtn = document.getElementById('rgb')
const clearBtn = document.getElementById('clear')
const newGridBtn = document.getElementById('nGrid')
const grid = document.getElementById('grid')

colorBtn.onclick = () => setCurrentMode('color')
rgbBtn.onclick = () => setCurrentMode('rainbow')
clearBtn.onclick = () => reloadGrid()
newGridBtn.onclick = () => input()

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function input() {
    let input = window.parseInt(prompt('Enter the number for the new grid'), 10)
    if (input > 100) {
        alert('Use numbers less than 100')
        return
    } else if (input) {
    currentSize = input
    clearGrid()
    setupGrid(currentSize)
    } else {
        return
    }
}

function reloadGrid() {
    clearGrid()
    setupGrid(currentSize)
}

function clearGrid() {
    grid.innerHTML = ''
}

function setupGrid (size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('gridItem')
        gridElement.addEventListener('mousedown', changeColor)
        gridElement.addEventListener('mouseover', changeColor)
        grid.appendChild(gridElement)
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
    }
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE)
}