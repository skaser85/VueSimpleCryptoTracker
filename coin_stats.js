import StatsHistory from "./stats_history.js";

export default {
    components: {
        StatsHistory
    },
    props: ["ownedCoins", "initialInvestment", "totalWorth", "totalPl", "percentPl"],
    template: "#coin-stats",
    data() {
        return {
            displayStatsHistory: false
        }
    },
    updated() {
        // this.ownedCoins.forEach(c => {
        //     console.log(c);
        // })
    }
}