const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show-elements');
        } else {
            entry.target.classList.remove('show-elements');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-elements');
hiddenElements.forEach((el) => observer.observe(el));