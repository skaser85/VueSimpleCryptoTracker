import DataUpdate from "./data_update.js";

export default {
    props: ["coins"],
    components: {
        DataUpdate
    },
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
                    <a @click="displayUpdateModal=true" class="button is-info" href="#">
                        <span class="icon">
                            <i class="fa fa-btc"></i>
                        </span>
                        <span>Update Data</span>
                    </a>
                </p>
            </div>
        </div>
        <data-update v-show="displayUpdateModal" 
                     @close="displayUpdateModal=false"
                     :coins="coins"></data-update>
    </nav>
    `,
    data() {
        return {
            isActive: false,
            displayUpdateModal: false
        }
    },
    methods: {
        toggleActiveClass() {
            this.isActive = !this.isActive;
        }
    }
}


{/* 
The logo can be made clickable by adding an anchor tag
around the img.
<a class="navbar-item" href="https://bulma.io"></a> */}
