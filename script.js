document.addEventListener('DOMContentLoaded', () => { 
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    
    navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('nav-open');
        navToggle.classList.toggle('nav-open');
    });
});
