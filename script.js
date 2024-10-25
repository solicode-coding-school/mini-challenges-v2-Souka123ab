let playContainer = document.querySelector('.play')
let headX = 3, snakeY = 5;
let mangeX, mangeY;
let X = 0, Y = 0;
let direction = null;
let playsnake;
let snake = [];
const hightScore = document.querySelector(".score")
let score = 0
let test = localStorage.getItem('hight-score')||0
let hight=document.querySelector('.hight-score')
 console.log(hight)
 console.log(hightScore)

function gameOver(){
  clearInterval(playsnake)
  location.reload()
  alert('game oveer')
}
    hight.innerText = `Scor-hight : ${test}`
function change() {
  mangeX = Math.floor(Math.random() * 30) + 1;
  mangeY = Math.floor(Math.random() * 30) + 1;
  // console.log(mangeX,mangeY)
  // position 0 - 30
}

const changePlay = (event) => {
  console.log(event.key);
  // itijahat
  if (event.key === 'ArrowUp' && Y !== 1) { // Prevent reverse direction
    X = 0;
    Y = -1;
  } else if (event.key === 'ArrowDown' && Y !== -1) {
    X = 0;
    Y = 1;
  } else if (event.key === 'ArrowLeft' && X !== 1) {
    X = -1;
    Y = 0;
  } else if (event.key === 'ArrowRight' && X !== -1) {
    X = 1;
    Y = 0;
    // }
    play();
  }
}

const play = function () {

  let game = `<div class="mange" style="grid-area:${mangeY}/${mangeX}"> </div>`
  if (headX === mangeX && snakeY === mangeY) {
    change()
    score++
    snake.push([mangeX, mangeY])
    test = score >= test ? score : test;
    localStorage.setItem("hight-score", test)


    hight.innerText = `Scor-hight : ${test}`
    hightScore.innerText = `Score : ${score}`
  }
  for (let i = snake.length - 1; i > 0; i--) {
    snake[i] = snake[i - 1]
  }


  snake[0] = [headX, snakeY]
  headX += X
  snakeY += Y

  if (headX <= -1 || headX > 31 || snakeY <= -1 || snakeY > 31) {
    gameOver();
}

  for (let i = 0; i < snake.length; i++) {
    game += `<div class="snake" style="grid-area:${snake[i][1]}/${snake[i][0]}"> </div>`;
    if(i !== 0 && snake[0][1]===snake[i][1]&& snake[0][0]===snake[i][0]){
      gameOver()
    }

  }
  playContainer.innerHTML = game



}


change();
//bax harknaha
playsnake=setInterval(play, 300)
document.addEventListener("keydown", changePlay)










