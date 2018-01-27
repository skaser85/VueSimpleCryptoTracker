export default {
    props: ["logoSrc", "name", "rank", "usPrice", "amtOwned", 
            "totalWorth", "symbol"],
    template: "#coin-card",
    methods: {
        toggleHistoryModal() {
            this.$emit("toggle", {symbol: this.symbol, coinName: this.name});
        }
    }
}