const toggleTheme = document.getElementById('toggleTheme');
const rootHTML = document.documentElement;

function changeTheme(){
    const currentTheme = rootHTML.getAttribute("data-theme");

    currentTheme === "dark" ? rootHTML.setAttribute("data-theme", "light") : rootHTML.setAttribute("data-theme", "dark");

    
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener('click', changeTheme);