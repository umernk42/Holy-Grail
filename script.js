

function toggleNav(){
    const outerGrid = document.querySelector('.outer-grid');
    outerGrid.classList.toggle('show-nav');

    const nav = document.querySelector('nav');
    nav.classList.toggle('hide-nav');
}

const nav = document.querySelector('nav');

if(window.innerWidth > 576){
    nav.classList.remove('hide-nav');
}

window.addEventListener('resize',(e) => {
    if(window.innerWidth > 576){
        nav.classList.remove('hide-nav');
    }
    else{
        nav.classList.add('hide-nav');
    }
});
