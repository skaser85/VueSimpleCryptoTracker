export default {
    props: ["navBarLogoSrc"],
    template: `
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <img v-bind:src="navBarLogoSrc" alt="CryptoCurrency Logo">
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
