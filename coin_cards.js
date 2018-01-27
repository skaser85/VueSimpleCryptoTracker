import CoinCard from "./coin_card.js";
import HistoryModal from "./history.js";

export default {
    components: {
        CoinCard,
        HistoryModal
    },
    props: ["coins"],
    template: "#coin-cards",
    data() {
        return {
            symbol: "",
            coinName: "",
            displayHistoryModal: false
        }
    },
    methods: {
        toggle(values) {
            this.displayHistoryModal = true;
            this.symbol = values.symbol;
            this.coinName = values.coinName;
        }
    }
}