import DataUpdate from "./data_update.js";

export default {
    props: ["coins", "initInvest"],
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
        },
        addCoinData(value) {
            this.$parent.emit("coin-added", value);
        },
        updateInitialInvestment(value) {
            this.$parent.emit("init-invest", value);
        }
    },
    computed: {
        mainLogoSrc() {
            return `${window.location}/images/Cryptocurrency_Logo_2.png`;
        }
    }
}
