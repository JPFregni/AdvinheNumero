//variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.ceil(Math.random(0, 10) * 10)
let qTimes = 1

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//funções
function handleTryClick(event) {
  event.preventDefault() //não faça o padrão

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) === randomNumber) {
    toggleScreen()

    if (qTimes === 1) {
      screen2.querySelector('h2').innerText = `Acertou em ${qTimes} tentativa.`
    } else {
      screen2.querySelector('h2').innerText = `Acertou em ${qTimes} tentativas.`
    }
  }

  inputNumber.value = ''
  qTimes++
}

function handleResetClick() {
  toggleScreen()
  qTimes = 1
  randomNumber = Math.ceil(Math.random(0, 10) * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
