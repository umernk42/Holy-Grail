function toggleNav(){
    const outerGrid = document.querySelector('.outer-grid');
    outerGrid.classList.toggle('show-nav');

    const nav = document.querySelector('nav');
    nav.classList.toggle('hide-nav');
}
