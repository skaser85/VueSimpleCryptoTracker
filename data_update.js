export default {
    props: ["coins", "initInvest"],
    template: "#data-update",
    data() {
        return {
            ii: this.initInvest,
            selectedCoin: "",
            amtOwned: ""
        }
    },
    methods: {
        getCoinData() {
            this.amtOwned = this.coin.amt_owned;
        },
        addCoinData() {
            this.$parent.$emit("coin-added", {coin: this.selectedCoin, amtOwned: this.amtOwned});
        },
        updateInitialInvestment() {
            this.$parent.$emit("init-invest", this.ii);
        },
        selectCoin(coinID) {
            this.selectedCoin = this.coins.filter(c => {return c.id === coinID;})[0].name;
            this.amtOwned = this.coin.amt_owned;
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