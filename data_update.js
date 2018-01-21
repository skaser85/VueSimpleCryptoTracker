import { EventBus } from "./event_bus.js";

export default {
    props: ["coins"],
    template: "#data-update",
    data() {
        return {
            selectedCoin: "",
            amtOwned: ""
        }
    },
    methods: {
        getCoinData() {
            this.amtOwned = this.coin.amt_owned;
        },
        addCoinData() {
            EventBus.$emit("coinAdded", {coin: this.selectedCoin, amtOwned: this.amtOwned});
        },
        updateInitialInvestment() {

        },
        selectCoin(coinID) {
            this.selectedCoin = this.coins.filter(c => {return c.id === coinID;})[0].name;
            this.amtOwned = this.coin.amt_owned;
            console.log(this.selectedCoin);
        }
    },
    computed: {
        coin() {
            return this.coins.filter(c => {return c.name === this.selectedCoin;})[0];
        },
        ownsCoins() {
            return this.coins.filter(c => { return c.amt_owned > 0 });
        }
    }
}