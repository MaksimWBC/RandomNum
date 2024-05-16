const getNum = document.getElementById("btn")
const randomNum = document.getElementById("num")
const numMin = document.getElementById("number1")
const numMax = document.getElementById("number2")
const chekBtn1 = document.getElementById("check1")
const chekBtn2 = document.getElementById("check2")
const textArray = document.getElementById("text_array")
const parameters = document.getElementById("container")


parameters.addEventListener('change', () => {
    if(chekBtn1.checked) {
        textArray.style.opacity = '0';
    } else {
        textArray.style.opacity = '1';
    }
});

textArray.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\s\d]/g, '');
})

getNum.addEventListener('click', (e) => {
    if(chekBtn1.checked) {
        randomNum.innerHTML = Math.floor(Math.random() * (Number(numMax.value)- Number(numMin.value) + 1) + Number(numMin.value))
    }
    if(chekBtn2.checked) {
        let arrayNum = textArray.value.trim().split(/\s+/);
        randomNum.innerHTML = arrayNum[Math.floor(Math.random()*arrayNum.length)];
    }
})