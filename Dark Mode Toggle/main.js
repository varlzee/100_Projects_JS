let input = document.getElementById('check');
let body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', ()=>{
    let bg = localStorage.getItem('backgroundColor');
    body.style.backgroundColor = bg;

    let checkedTheme = localStorage.getItem('checkedItem');
    input.checked = checkedTheme;

})
input.addEventListener('click', ()=>{
    
    if (input.checked){
        body.style.backgroundColor = 'black';

        localStorage.setItem('backgroundColor', 'black');
        localStorage.setItem('checkedItem', true);
    }
    else{
        body.style.backgroundColor = 'white';

        localStorage.setItem('backgroundColor', 'white');
        localStorage.removeItem('checkedItem');
    }
});