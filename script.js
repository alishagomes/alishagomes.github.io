/* This changes which link is active (starting from the about section) when the user scrolls to a section */
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('.navbar a');
    function changeActiveLink() {
        let scrollPos = window.scrollY + window.innerHeight / 2; 
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navbarLinks.forEach(link => link.classList.remove('active'));
                const currentLink = document.querySelector(`.navbar a[href="#${section.id}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            }
        });
    }
    document.getElementById('aboutLink').classList.add('active');
    window.addEventListener('scroll', changeActiveLink);
    changeActiveLink(); 
});
