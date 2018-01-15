Vue.component("coin-stats", {
    props: ["initialInvestment", "totalWorth", "totalPl", "percentPl"],
    template: `
    <div class="box coin-stats">
        <div class="title is-3">Coin<br>Stats</div>
        <div class="coin-stats--item">
            <p class="title is-5">Initial Investment</p>
            <p class="subtitle is-6">\${{ initialInvestment }}</p>
        </div>
        <div class="coin-stats--item">
            <p class="title is-5">Total Worth</p>
            <p class="subtitle is-6">\${{ totalWorth }}</p>
        </div>
        <div class="coin-stats--item">
            <p class="title is-5">Total P/L</p>
            <p class="subtitle is-6">\${{ totalPl }}</p>
        </div>
        <div class="coin-stats--item">
            <p class="title is-5">P/L %</p>
            <p class="subtitle is-6">{{ percentPl }}%</p>
        </div>
    </div>
    `
})

Vue.component("coin-cards", {
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
});

Vue.component("coin-card", {
    props: ["logoSrc", "name", "rank", "usPrice", "amtOwned", "totalWorth"],
    template: `    
    <div class="box coin-card">
        <div class="media">
            <div class="media-left">
                <figure class="image is-64x64 coin-card--logo">
                    <img v-bind:src="logoSrc" alt="Image">
                </figure>
            </div>
            <div class="content">
                <p class="title is-3">{{ name }}</p>
                <p class="subtitle is-6">Rank: {{ rank }}</p>
            </div>
        </div>
        <div class="content coin-card--content-container">
            <p class="coin-card--content">US Price:
                <span>\${{ usPrice }}</span>
            </p>
            <p class="coin-card--content">Amount Owned:
                <span>{{ amtOwned }}</span>
            </p>
            <p class="coin-card--content">Total Worth:
                <span>\${{ totalWorth }}</span>
            </p>
        </div>
    </div>
    `
});

new Vue({
    el: "#bulma-vue",
    data() {
        return {
            coins: [],
            initialInvestment: parseFloat(750).toFixed(2)
        }
    },
    methods: {

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
        }
    },
    mounted() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/")
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
                    c.logoSrc = `/images/${c.id}.png`
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
})