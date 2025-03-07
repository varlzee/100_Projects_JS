let x = 0;
let varl = document.getElementById('counterText');


function color(num) {
    if (num > 0){
        varl.style.color = 'green';
    }
    else if (num < 0){
        varl.style.color = 'red';
    }
    else{
        varl.style.color = 'black';
    }

}


document.getElementById('increase').addEventListener('click', function(){
    
    x++;
    varl.textContent = x;
    color(x);
});

document.getElementById('decrease').addEventListener('click', function(){
    x--;
    varl.textContent = x; 
    color();
});

document.getElementById('resetBtn').addEventListener('click', function(){
    x = 0;
    varl.textContent = x;
    color();
});