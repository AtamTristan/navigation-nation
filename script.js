const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1,nav2,nav3,nav4,nav5];

function navAnimation(replacing, replacer){
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${replacing}-${i+1}`,`slide-${replacer}-${i+1}`);
    });
}

function toggleNav(){
    // toggle: Menu Bars Opened/Closed
    menuBars.classList.toggle('change');
    // toggle: Menu active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')){
        // Animate In - Overlay
        // The class that should be replaced needs to allready exist
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        // Animat In Navitems
        navAnimation('out','in');
    }else{
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        // Animat out Navitems
        navAnimation('in','out');
    }

}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(nav => {
    nav.addEventListener('click', toggleNav);
});

