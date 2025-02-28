let button = document.getElementById('calculate');


button.addEventListener('click', ()=>{
    let height = Number(document.getElementById('height').value);
    let weight = Number(document.getElementById('weight').value);

    let result = (weight / (height * height)) * 10000;

    document.getElementById('computeResult').value = String(result.toFixed(2));

    if (result < 18.5){
        document.getElementsByTagName('span')[0].textContent = 'underweight';
    }
    else if (result >=18.5 && result <= 24.9){
        document.getElementsByTagName('span')[0].textContent = 'Normal weight';
    }
    else if (result > 24.9 && result <= 29.9){
        document.getElementsByTagName('span')[0].textContent = 'Over weight';
    }
    else {
        document.getElementsByTagName('span')[0].textContent = 'Obesse';
    }
});