import DataUpdate from "./data_update.js";

export default {
    props: ["coins"],
    components: {
        DataUpdate
    },
    template:"#navbar",
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
    },
    computed: {
        mainLogoSrc() {
            return `${window.location}/images/Cryptocurrency_Logo_2.png`;
        }
    }
}
