let feature = document.getElementById('feature');
let company = document.getElementById('company');
let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let firstDropdown = document.querySelector('.first');
let secondDropdown = document.querySelector('.second');

feature.addEventListener('click', () => {
    let visible = firstDropdown.getAttribute("aria-expanded");
    if(visible === "false"){
        firstDropdown.setAttribute("aria-expanded", true);
        arrow1.setAttribute('src', 'icon-arrow-up.svg');
    }else{
        firstDropdown.setAttribute("aria-expanded", false);
        arrow1.setAttribute('src', 'icon-arrow-down.svg');
    }
});


company.addEventListener('click', () => {
    let visible = secondDropdown.getAttribute("aria-expanded");
    if(visible === "false"){
        secondDropdown.setAttribute("aria-expanded", true);
        arrow2.setAttribute('src', 'icon-arrow-up.svg');
    }else{
        secondDropdown.setAttribute("aria-expanded", false);
        arrow2.setAttribute('src', 'icon-arrow-down.svg');
    }
});


/* I KNOW I SHOULD HAVE JUST WRITTEN A FUNCTION TO TOGGLE THE DROPDOWNS BUT IT TOOK ME TIME TO FIGURE OUT HOW TO USE THE SAME BUTTON TO TOGGLE ON/OFF SOMETHING SO PARDON MY (SHOULD I SAY MISTAKE?? ), */

let mobileMenu = document.querySelector('.header--container')
let menu = document.getElementById("toggle-menu");

menu.addEventListener('click', () => {
    let visible = mobileMenu.getAttribute("data-visible");
    if(visible === "false"){
        mobileMenu.setAttribute('data-visible', 'true');
        menu.setAttribute('src', 'icon-close-menu.svg');
    }else{
        mobileMenu.setAttribute('data-visible', 'false');
        menu.setAttribute('src', 'icon-menu.svg');
    }
})