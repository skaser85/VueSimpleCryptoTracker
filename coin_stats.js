export default {
    props: ["initialInvestment", "totalWorth", "totalPl", "percentPl"],
    template: `
    <nav class="level box">
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">Initial Investment</p>
            <p class="title">\${{ initialInvestment }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">Total Worth</p>
            <p class="title">\${{ totalWorth }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">Total P/L</p>
            <p class="title">\${{ totalPl }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">P/L %</p>
            <p class="title">{{ percentPl }}%</p>
            </div>
        </div>
    </nav>
    `
}