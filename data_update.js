export default {
    props: ["coins"],
    template: `
        <div class="modal is-active">
            <div @click="$emit('close')" class="modal-background"></div>
            <div class="modal-content">
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Update CryptoCoin Data</p>
                        <button @click="$emit('close')" class="delete" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                        <div class="field">
                            <label class="label">Initial Investment</label>
                            <div class="control has-icons-left">
                                <input class="input" type="text" placeholder="750.00">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-dollar"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Coins</label>
                            <div class="control has-icons-left is-expanded">
                                <span class="select is-fullwidth">
                                    <select v-model="selectedCoin" @change="getCoinData">
                                        <option disabled value="">Select Coin</option>
                                        <option v-for="coin in coins" 
                                                :key="coin.rank" 
                                                :value="coin.name">{{ coin.name }}</option>
                                    </select>
                                </span>
                                <span class="icon is-small is-left">
                                    <i class="fa fa-globe"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Amount Owned</label>
                            <div class="control has-icons-left">
                                <input class="input" type="text" placeholder=".666" v-model="amtOwned">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-exchange"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <button @click="addCoinData" class="button is-info data-update-modal--add-coin-btn">Add coin</button>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success">Save changes</button>
                        <button @click="$emit('close')" class="button">Cancel</button>
                    </footer>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            selectedCoin: "",
            amtOwned: ""
        }
    },
    methods: {
        getCoinData() {
            this.amtOwned = this.coin.amt_owned;
        },
        addCoinData() {
            this.coin.amt_owned = this.amtOwned;
        }
    },
    computed: {
        coin() {
            return this.coins.filter(c => {return c.name === this.selectedCoin;})[0];
        }
    }
}