export const activeSection = () => {
  const path = window.location.pathname;
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".pp-section");
    const navLi = document.querySelectorAll(".nav-menu li");
    let current = "";
    
    // Get current scroll position
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;
    
    // Find the section that contains the current scroll position
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;
      
      // Check if the middle of the viewport is within this section
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        current = section.getAttribute("id");
      }
    });
    
    // If no section is found (e.g., at the very bottom), use the last section
    if (!current && sections.length > 0) {
      const lastSection = sections[sections.length - 1];
      const lastSectionTop = lastSection.offsetTop;
      if (window.pageYOffset >= lastSectionTop - 100) {
        current = lastSection.getAttribute("id");
      }
    }
    
    // Update navigation active states
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.getAttribute("data-menuanchor") === current) {
        li.classList.add("active");
      }
    });
  });
};

// Pagination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};