import Vue from 'vue'
import Vuex from 'vuex'
import web3ModalStore from "@/store/modules/web3Modal";
import connect from "@/store/modules/connect";
import createPersistedState from 'vuex-persistedstate'
import i18n from '@/lang/i18n'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        locale: 'en',
        isPopupConfirm: false,
        errorModal: {
            isShow: false,
            message: ""
        },
        isPopupErrorNetWork: false,
        isPopupProcessing:  false,
        isPopupWallet:  false,
        isPopupWellcome: false,
        isConnect:  false,
        successModal: {
            isShow: false,
            message: ""
        },
        presales: []
    },
    getters: {
        isPopupNetWork: state => state.isPopupErrorNetWork,
        isPopupProcessing: state => state.isPopupProcessing,
        isPopupWallet: state => state.isPopupWallet,
        successModal: state => state.successModal,
        errorModal: state => state.errorModal,
        exchange: state => state.connect.exchange,
        chainIdUser: state => state.connect.chainIdUser,
        isConnect: state => state.isConnect,
        account: state => state.web3Modal.account,
        presales: state => state.presales,
        isPopupWellcome: state => state.isPopupWellcome
    },
    mutations: {
        SET_LANG (state, currentLang) {
            i18n.locale = currentLang;
        },
        setConnect(state, isConnect) {
            state.isconnect = isConnect;
        },
        setPopupConfirm(state, isPopupConfirm) {
            state.isPopupConfirm = isPopupConfirm;
        },
        setPopupError(state, error) {
            state.errorModal = error;
        },
        setPopupProcessing(state, processing) {
            state.isPopupProcessing = processing;
        },
        setPopupWallet(state, status) {
            state.isPopupWallet = status;
        },
        setPopupErrorNetWork(state, isPopupErrorNetWork) {
            state.isPopupErrorNetWork = isPopupErrorNetWork;
        },
        setPopupSuccess(state, success) {
            state.successModal = success;
        },
        setPopupWellcome(state, status) {
            state.isPopupWellcome = status;
        },
        setExchange(state, exchange) {
            state['connect'].exchange = exchange;
            const platform = 'bsc';
            let network = state.connect['chainIdUser']['network'];
            let symbol = state.connect['chainIdUser']['symbol'];
            if (exchange === undefined || network !== exchange['network'] || symbol !== exchange['platform'].toUpperCase()) {
                const networkAPI = exchange ? exchange['network'] : network;
                const platformAPI = exchange ? exchange['platform'] : symbol;
                const platforms = state.connect['platforms'][networkAPI]
                platforms.map(function (val, idx) {
                    if (val['symbol'].toLowerCase() === platformAPI) {
                        // set chain user
                        val['network'] = networkAPI;
                        state.connect['chainIdUser'] = val;
                    }
                })
            }
            console.log('connect state', state.connect);
            console.log('exchange', exchange);
            console.log('network', network);
            console.log('symbol', symbol);
        },
        hideProcess(state) {
            state.isPopupProcessing = false;
        },
        setPresales(state, presales) {
            state.presales = presales
        }
    },
    actions: {
        setLang({commit}, currentLang) {
            commit('SET_LANG', currentLang);
        }
    },
    modules: {
        web3Modal: web3ModalStore,
        connect: connect,
    },
    plugins: [
        createPersistedState({
            key: 'veldora',
            paths: ['connect']
        })
    ]
})
