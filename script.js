const numContainer = document.getElementById('num');
const btnInc = document.querySelector('.inc');
const btnDec = document.querySelector('.dec');
const btnReset = document.querySelector('.reset');
let value = 0;

btnInc.addEventListener("click", () => {
    value++;
    numContainer.textContent = value;
});

btnDec.addEventListener("click", () => {
    value--;
    numContainer.textContent = value;

});

btnReset.addEventListener("click", () => {
    value = 0;
    numContainer.textContent = value;
});


