export default {
    props: ["navBarLogoSrc"],
    template: `
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
<<<<<<< HEAD
            <img v-bind:src="navBarLogoSrc" alt="CryptoCurrency Logo">
=======
            <img src=${window.location}"/images/Cryptocurrency_Logo_2.png" alt="CryptoCurrency Logo">
>>>>>>> origin/master
            <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
            </button>
        </div>
    </nav>
    `
}


{/* 
The logo can be made clickable by adding an anchor tag
around the img.
<a class="navbar-item" href="https://bulma.io"></a> */}
