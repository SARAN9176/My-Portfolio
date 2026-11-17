
// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Footer year update

const footer = document.querySelector('footer p');

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Saran DP | Web Developer`;
}
