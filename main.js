import NavBar from "./navbar.js";
import DataUpdate from "./data_update.js";
import CoinStats from "./coin_stats.js";
import CoinCards from "./coin_cards.js";
import CoinCard from "./coin_card.js";
import HistoryModal from "./history.js";
import StatsHistory from "./stats_history.js";

new Vue({
    el: "#bulma-vue",
    components: {
        NavBar,
        DataUpdate,
        CoinCard,
        CoinCards,
        CoinStats,
        HistoryModal,
        StatsHistory
    },
    data() {
        return {
            coins: [],
            initialInvestment: parseFloat(750).toFixed(2),
            displayHistoryModal: false
        }
    },
    methods: {
        addCoinData(value) {
            let coin = this.coins.filter(c => {return c.name===value.coin;})[0];
            let coinIdx = this.coins.findIndex(c => {return c===coin;});
            coin.amt_owned = value.amtOwned;
            coin.total_worth = parseFloat(coin.amt_owned * coin.price_usd).toFixed(2);
            this.coins.splice(coinIdx, 1,  coin);
        },
        updateInitialInvestment(value) {
            this.initialInvestment = parseFloat(value).toFixed(2);
        }
    },
    computed: {
        totalWorth() {
            let money = 0;
            this.coins.forEach(c => {
                money += parseFloat(c.total_worth);
            })
            return parseFloat(money).toFixed(2);
        },
        totalPl() {
            return parseFloat(this.totalWorth - this.initialInvestment).toFixed(2);
        },
        percentPl() {
            return parseFloat(((this.totalWorth / this.initialInvestment) * 100) - 100).toFixed(2);
        },
        ownedCoins() {
            return this.coins.filter(c => {
                return c.amt_owned > 0;
            });
        }
    },
    async mounted() {
        await axios.get("https://api.coinmarketcap.com/v1/ticker/")
            .then((response) => {
                this.coins = response.data;
                this.coins.forEach(c => {
                    switch (c.id) {
                        case "bitcoin":
                            c.amt_owned = 0.03849177;
                            break;
                        case "ethereum":
                            c.amt_owned = 0.11889641;
                            break;
                        case "litecoin":
                            c.amt_owned = 0.35089844;
                            break;
                        default:
                            c.amt_owned = 0;
                    }
                    c.total_worth = parseFloat(c.amt_owned * c.price_usd).toFixed(2);
                    c.price_usd = parseFloat(c.price_usd).toFixed(2);
                    c.logoSrc = `${window.location}/images/${c.id}.png`
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
})