export default {
    template: `
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <img class="navbar-item" src="${window.location}/images/Cryptocurrency_Logo_2.png" alt="CryptoCurrency Logo">
            <button @click="toggleActiveClass" :class="{'is-active': isActive}" class="button navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div @click="toggleActiveClass" :class="{'is-active': isActive}" class="navbar-menu">
            <div class="navbar-end">
                <p class="control navbar-item">
                    <a @click="toggleUpdateForm" class="button is-info" href="#">
                        <span class="icon">
                            <i class="fa fa-btc"></i>
                        </span>
                        <span>Update Data</span>
                    </a>
                </p>
            </div>
        </div>
    </nav>
    `,
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleActiveClass() {
            this.isActive = !this.isActive;
        },
        toggleUpdateForm() {
            // needs to pop up a modal with a form in it
            console.log("this is where the form to update the data goes");
        }
    }
}


{/* 
The logo can be made clickable by adding an anchor tag
around the img.
<a class="navbar-item" href="https://bulma.io"></a> */}
