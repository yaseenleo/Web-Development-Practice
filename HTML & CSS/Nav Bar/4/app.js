const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {

        //Toggle Nav
        nav.classList.toggle("nav-active")

        //Animate links
        navLinks.forEach((links, index) => {

            if (links.style.animation) {
                links.style.animation = ''
            }
            else {
                links.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
            // console.log(index / 7);

        })
        //Burger Animation
        burger.classList.toggle('toggle');

    });
}

navSlide();