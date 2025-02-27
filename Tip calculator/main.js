
let button = document.getElementById('calculate');

button.addEventListener('click', ()=>{
    let bill_amount = Number(document.getElementById("billAmount").value);
    let tip_percentage = Number(document.getElementById("tipPercentage").value);

    let tip = (tip_percentage/100) * bill_amount;
    let finalTotal = tip + bill_amount;

    document.getElementsByTagName('span')[0].textContent = finalTotal.toFixed(2);

});


    
    
