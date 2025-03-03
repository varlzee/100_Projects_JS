let celcius = document.getElementById('Celcius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

celcius.addEventListener('input', ()=>{
    let c = parseFloat(celcius.value);
    
    f = (c * 9/5 + 32).toFixed(2);
    fahrenheit.value = f;

    k = (c + 273.15).toFixed(2);
    kelvin.value = k
});

fahrenheit.addEventListener('input', ()=>{
    let f = parseFloat(fahrenheit.value);

    c = ((f - 32) * 5/9).toFixed(2);
    celcius.value = c;

    k = ((f - 32) * 5/9 + 273.15).toFixed(2)
    kelvin.value = k;
})

kelvin.addEventListener('input', ()=> {
    let k = parseFloat(kelvin.value);

    c = (k - 273.15).toFixed(2);
    celcius.value = c

    f = ((k - 273.15) * 9/5 + 32).toFixed(2);
    fahrenheit.value = f
})