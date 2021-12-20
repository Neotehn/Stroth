

document.querySelectorAll('a[href]').forEach(anchor => {
    console.log("yes");
    anchor.addEventListener('click', function (e) {
        console.log("yes");
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});