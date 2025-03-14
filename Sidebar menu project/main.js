let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');
let sidebar = document.getElementById('sidebar');

openMenu.addEventListener('click', ()=>{
    sidebar.classList.add('active');
});

closeMenu.addEventListener('click', ()=>{
    sidebar.classList.remove('active');
})