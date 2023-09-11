const isProduction = process.env.NODE_APP_ENV === 'production';
const connect = {
    state: {
        chainIdUser: {
            network: isProduction ? 'main': 'test',
            chainId: isProduction ? 56: 97,
            symbol: 'BSC',
        },
        error_connect: null,
        exchanges: [],
        platforms: [],
        exchange: {
            network: false
        }
    },
    mutations: {
        setChainIdUser(state, chain) {
            state.chainIdUser = chain;
        },
        setErrorConnect(state, error) {
            state.error_connect = error
        },
        setExchanges(state, item) {
            state.exchanges = item
        },
        setPlatforms(state, item) {
            state.platforms = item
        }
    },
    actions: {
    }
}

export default connect;
