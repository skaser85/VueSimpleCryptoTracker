import CoinCard from "./coin_card.js";

export default {
    components: {
        CoinCard
    },
    props: ["coins"],
    template: `
    <div class="coin-cards">
        <coin-card v-for="coin in coins" :key="coin.rank"
                   :logo-src=coin.logoSrc
                   :name=coin.name
                   :rank=coin.rank
                   :us-price=coin.price_usd
                   :amt-owned=coin.amt_owned
                   :total-worth=coin.total_worth
                   ></coin-card>
    </div>
    `
}