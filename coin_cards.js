import { EventBus } from "./event_bus.js";
import CoinCard from "./coin_card.js";

export default {
    components: {
        CoinCard
    },
    props: ["coins"],
    template: "#coin-cards",
    mounted() {
        EventBus.$on("coinAdded", (payLoad) => {
            let coin = this.coins.filter(c => {return c.name === payLoad.coin;})[0]
            coin.amt_owned = payLoad.amtOwned;
            coin.total_worth = parseFloat(coin.amt_owned * coin.price_usd).toFixed(2);
        });
    }
}