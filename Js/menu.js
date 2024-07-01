document.addEventListener('DOMContentLoaded', () => {
    
    let btnMenu = document.getElementById('btn-menu');
    let menu = document.getElementById('menu-mobile');
    let overlay = document.getElementById('overlay-menu');
    let btnClose = document.querySelector('.btn-fechar');

    function abrirMenu() {
        menu.classList.add('abrir-menu');
        overlay.style.display = 'block';
    }

    function fecharMenu() {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    }

    btnMenu.addEventListener('click', abrirMenu);
    btnClose.addEventListener('click', fecharMenu);
    overlay.addEventListener('click', fecharMenu);
});
