document.addEventListener('DOMContentLoaded', () => { 
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    
    navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('nav-open');
        navToggle.classList.toggle('nav-open');
    });
});


// Curriculum Tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
        tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

// Curriculum Calendar
let weekIndex = 1;
showWeek(weekIndex);

// Next/previous controls
function plusWeek(n) {
  showWeek(weekIndex += n);
}

// Week controls
function currentWeek(n) {
  showWeek(weekIndex = n);
}

function showWeek(n) {
  let i;
  let weeks = document.getElementsByClassName("curriculum-calendar");

  // Hides the weeks that aren't active
  for (i = 0; i < weeks.length; i++) {
    weeks[i].style.display = "none";
  }
  weeks[weekIndex-1].style.display = "grid";
}


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


/* accordion js */
const accordionHeaders =  document.querySelectorAll(".accordionHeader");

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", event => {
        accordionHeader.classList.toggle("active");
        const accordionBody = accordionHeader.nextElementSibling;
        if(accordionHeader.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }
        else {
            accordionBody.style.maxHeight = 0;
        }
    });
});