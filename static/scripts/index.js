const initApp = () => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const rocketDab = document.getElementById("rocketdab");

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    const spinRocketDab = () => {
        rocketDab.classList.toggle('animate-spin')
    }
    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    rocketDab.addEventListener('click', spinRocketDab)
}

document.addEventListener('DOMContentLoaded', initApp);
