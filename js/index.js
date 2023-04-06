const canvas = document.querySelector("canvas")
//canvas.style.border = "2px solid black"
const ctx = canvas.getContext('2d')
const startBtn = document.getElementById(".start-button")
const startScreen =document.querySelector(".game-intro")
const startBoard = document.querySelector(".game-board")

let isMovingLeft = false
let isMovingRight = false

let carX = canvas.width / 2
let carSpeed = 2

let animateId

window.onload = () => {
  //hide the canvas until we press the start
  canvas.style.display = "none";

  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  //Iteration 1:
  //Road Image
  const bgImg = new Image()
  bgImg.src = '../images/road.png'
  const carImg = new Image()
  carImg.src = '../images/car.png'

  const drawRoad = () => {
    ctx.beginPath()
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height)
    ctx.closePath()
  }

  const drawCar = () => {
    ctx.beginPath()
    ctx.drawImage(carImg, canvas.width/2, canvas.height-100, 30,50)
    ctx.closePath()
  }

  //Iteration 3 animation not working
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRoad()
     drawCar()

    // Going left
    if (isMovingLeft) {
      carX -= carSpeed 
    }

    // Going right
    if (isMovingRight) {
      carX += carSpeed
    }

    animateId = requestAnimationFrame(animate)
  }

  function startGame() {
    //console.log("start game");
    //startScreen.style.display = "none";
    canvas.style.display = "block";
    drawRoad()
    drawCar()

    animate()
  }
};

document.addEventListener('keydown', event => {
  console.log(event)
  if (event.key === 'ArrowLeft') {
    isMovingLeft = true
  }
  if (event.key === 'ArrowRight') {
    isMovingRight = true
  }
})

document.addEventListener('keyup', event => {
  console.log(event)
  if (event.key === 'ArrowLeft') {
    isMovingLeft = false
  }
  if (event.key === 'ArrowRight') {
    isMovingRight = false
  }
})