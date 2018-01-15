export default {
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
}