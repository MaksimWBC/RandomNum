const getNum = document.getElementById("btn")
const randomNum = document.getElementById("num")
const numMin = document.getElementById("number1")
const numMax = document.getElementById("number2")


getNum.addEventListener('click', () => {

    randomNum.innerHTML = Math.floor(Math.random() * (Number(numMax.value)- Number(numMin.value) + 1) + Number(numMin.value))
})