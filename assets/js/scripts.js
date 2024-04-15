changeTheme();
headerMenu();
accordion();

function changeTheme () {
    const toggleTheme = document.getElementById('toggleTheme');
    const rootHTML = document.documentElement;
    
    function changeTheme(){
        const currentTheme = rootHTML.getAttribute("data-theme");
    
        currentTheme === "dark" ? rootHTML.setAttribute("data-theme", "light") : rootHTML.setAttribute("data-theme", "dark");
    
        
        toggleTheme.classList.toggle("bi-sun");
        toggleTheme.classList.toggle("bi-moon-stars");
    }
    
    toggleTheme.addEventListener('click', changeTheme);
}

function accordion() {
    const accordionHeaders = document.querySelectorAll('.accordion--header');

    accordionHeaders.forEach( header => {
        header.addEventListener("click", () => {
            const accordionItem = header.parentElement;
            const accordionActive = accordionItem.classList.contains("active");

            accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
        });
    });

}

function headerMenu(){
    const menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach( item => {
        item.addEventListener("click", ()=> {
            menuLinks.forEach( i => i.classList.remove("active"));
            item.classList.add("active");
        });
    });
}