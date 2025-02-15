document.addEventListener('DOMContentLoaded', () => { 
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    
    navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('nav-open');
        navToggle.classList.toggle('nav-open');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const registrationTasks = document.querySelectorAll(".registration .task");

    // Scroll-based highlighting
    function checkRegistrationVisibility() {
        registrationTasks.forEach(task => {
            const rect = task.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
                task.classList.add("active");
            } else {
                task.classList.remove("active");
            }
        });
    }

    function toggleCheckbox(element) {
    if (element.textContent === "☐") {
        element.textContent = "■";
        element.classList.add("checked");
    } else {
        element.textContent = "☐";
        element.classList.remove("checked");
    }
}


    window.addEventListener("scroll", checkRegistrationVisibility);
    checkRegistrationVisibility();

    window.toggleCheckbox = toggleCheckbox;
});