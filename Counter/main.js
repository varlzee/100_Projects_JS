let x = 0;
let varl = document.getElementById('counterText');


document.getElementById('increase').addEventListener('click', function(){
    
    x++;
    console.log(x);
    varl.textContent = x;
    if (x > 0){
        varl.style.color = 'green';
    }
});

document.getElementById('decrease').addEventListener('click', function(){
    x--;
    console.log(x);
    varl.textContent = x; 
    if (x < 0){
        varl.style.color = 'red';
    }

});

document.getElementById('resetBtn').addEventListener('click', function(){
    x = 0;
    varl.textContent = x;
    if (x = 0){
        varl.style.color = 'black';
    }
});