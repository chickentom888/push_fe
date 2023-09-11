import {mapGetters, mapState} from "vuex";
// import {getMultiplier} from "@/utils/helpers";
import * as helpers from "@/utils/helpers";
import {numberWithCommas} from "../utils/helpers";

const web3Modal = {
    computed: {
        ...mapState(['web3Modal']),
        ...mapGetters(['predictionsContract'])
    },
    active() {
        return this.web3Modal.active
    }
}

const predictionMixin = {
    computed: {

    }
}

const helpersMixin = {
    methods: {
        numberWithCommas: function (x) {
            helpers.numberWithCommas(x);
        }
    }
}

export {
    web3Modal,
    predictionMixin,
    helpersMixin
}