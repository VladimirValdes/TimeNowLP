const iconMenu = document.querySelector('#icon-menu');
const menu = document.querySelector('#menu');
const link = document.querySelectorAll('#menu-link');

iconMenu.addEventListener('click', (e) => {

    e.preventDefault();

    if ( menu.classList.contains('menu--active')) {
        // Resetting the menu to its default state
            menu.style.opacity = "0";
            menu.style.visibility = "hidden";
            menu.style.transform = "translateX(102%)";
            
            removeMenu();
    } else {
        iconMenu.firstElementChild.classList.add('icon-menu__bar--close');
        menu.classList.add('menu--active');
    }
});
 

link.forEach( li => li.addEventListener('click', closeMenu));

function closeMenu() {
    iconMenu.firstElementChild.classList.remove('icon-menu__bar--close');
    // menu.classList.remove('menu--active');
    removeMenu();
}


function removeMenu() {

    setTimeout( () => {
        // Remove the class after 300ms
        menu.classList.remove("menu--active");

  
        // Reset the styles to avoid CSS specificity issues
        menu.style.opacity = "";
        menu.style.visibility = "";
        menu.style.transform = "";
  
      }, 300);
      iconMenu.firstElementChild.classList.remove('icon-menu__bar--close');

}