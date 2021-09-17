const plusBtn = document.getElementById('plus');
plusBtn.addEventListener("click", function() {
    //console.log("hello"); 
    const inputBtn = document.getElementById('input').value;
    const newInputBtn = parseInt(inputBtn);
    const totalPlus = newInputBtn + 1;
    document.getElementById('input').value = totalPlus;
})

const minusBtn = document.getElementById('minus');
minusBtn.addEventListener("click", function() {
    //console.log("hello"); 
    const inputBtn = document.getElementById('input').value;
    const newInputBtn = parseInt(inputBtn);
    const totalMinus = newInputBtn - 1;
    document.getElementById('input').value = totalMinus;
})

const buyBtn = document.getElementById('buy');
buyBtn.addEventListener("click", function() {

    const inputBtn = document.getElementById('input').value;
    const newInputBtn = parseInt(inputBtn);
    const total = newInputBtn * 1500;
    document.getElementById('total-price').innerText = total;

    document.getElementById('quantity').innerText = newInputBtn;


})