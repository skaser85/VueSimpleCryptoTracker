export default {
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
}