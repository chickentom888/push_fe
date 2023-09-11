import {getLibrary} from "@/utils/web3";
import {ethers} from "ethers";
import {parseInt} from 'lodash'
import axios from "axios";
import {utils} from "web3"
import MD5 from "crypto-js/md5";

const web3ModalStore = {
    state: {
        web3Modal: null,
        library: getLibrary(),
        active: false,
        account: null,
        chainId: 0,
    },
    mutations: {
        setWeb3Modal(state, web3Modal) {
            state.web3Modal = web3Modal
        },
        setLibrary(state, library) {
            state.library = library
        },
        setActive(state, active) {
            state.active = active
        },
        setAccount(state, account) {
            const isProduction = process.env.NODE_APP_ENV === 'production';
            if (account) {
                // state.account = utils.toChecksumAddress('0x6Fc48b52283FfBc09E0022bb28CccCE2b4c777Ae'); // test account
                state.account = utils.toChecksumAddress(account);
                // check user
                let userAccount = JSON.parse(localStorage.getItem('user'));
                // let exchange = JSON.parse(localStorage.getItem('veldora'));
                const inviter_id = JSON.parse(localStorage.getItem('referral'));
                let branch = JSON.parse(localStorage.getItem('branch'));
                let pcode = JSON.parse(localStorage.getItem('pcode'));
                branch = branch ? branch : "left"; 
                // const isProduction = false;
                const network = isProduction ? 'main' : 'test';
                const platform = 'bsc';
                // const platform =  exchange && exchange['connect'] && exchange['connect']['exchange'] ? exchange['connect']['exchange']['platform'] : null;
                // const network =  exchange && exchange['connect'] && exchange['connect']['exchange'] ? exchange['connect']['exchange']['network'] : null;
                if (!userAccount || userAccount['address'] !== state.account) {
                    //load api address
                    let headers = {
                        'Content-Type': 'application/json',
                    }
                    const d = new Date();
                    let minutes = d.getMinutes();
                    minutes = minutes < 10 ? '0' + minutes : minutes;
                    let rawString = 'pushswap_' + state.account + '_'+ minutes;
                    let signatureString  = MD5(rawString).toString();
                    const obj = {
                        'address': state.account,
                        'signature': signatureString,
                    };
                    if (inviter_id) {
                        obj['ref'] = inviter_id;
                    }
                    if (platform) {
                        obj['platform'] = platform;
                    }
                    if (network) {
                        obj['network'] = network;
                    }
                    if (branch) {
                        obj['branch'] = branch;
                    }
                    if (pcode) {
                        obj['pcode'] = pcode;
                    }
                    axios.post(`api/index/selected-address`, obj, {
                        headers: headers
                    }).then(res => {
                        if (res.data.data) {
                            let userData = {
                                'address': state.account,
                                'token': res.data.data.data,
                                'code': res.data.data.code,
                            }
                            localStorage.setItem('user', JSON.stringify(userData))
                        }
                    }).catch(err => {
                        //load fail
                        localStorage.removeItem('user');
                        console.log('err address', err);
                    })
                }
            } else {
                state.account = null;
            }

        },
        setChainId(state, chainId) {
            state.chainId = chainId
        },
    },
    actions: {
        async connect({state, commit, dispatch, rootState}) {
            const isProduction = process.env.NODE_APP_ENV === 'production';
            rootState['connect']['chainIdUser'] = {
                network: isProduction ? 'main': 'test',
                chainId: isProduction ? 56: 97,
                symbol: 'BSC',
            }
            const provider = await state.web3Modal.connect();
            window.ethereum = provider;
            const library = new ethers.providers.Web3Provider(provider);

            library.pollingInterval = 12000
            commit('setLibrary', library)

            const accounts = await library.listAccounts()
            const network = await library.getNetwork();

            if ( rootState.connect.chainIdUser.chainId && network.chainId !== rootState.connect.chainIdUser.chainId) {
                let error = {
                    'title': 'Wrong Network',
                    'chainId': network.chainId,
                    'userChainId': rootState.connect.chainIdUser.chainId,
                    'userNetwork': rootState.connect.chainIdUser.network,
                    'msg': 'You can browse the app on all chains by disconnecting your wallet',
                }
                commit('setErrorConnect', error, {root: true})
                //logout
                // show modal error connect
                commit('setPopupErrorNetWork', true, {root: true})
                await dispatch('resetApp');
                if (window.ethereum.networkVersion != rootState.connect.chainIdUser.chainId) {
                    console.log('networkVersion 1', window.ethereum.networkVersion);
                    try {
                        await window.ethereum.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: utils.toHex(rootState.connect.chainIdUser.chainId) }]
                        });
                    } catch (err) {
                        // This error code indicates that the chain has not been added to MetaMask
                        if (err.code === 4902) {
                            if (!isProduction) {
                                await window.ethereum.request({
                                    method: 'wallet_addEthereumChain',
                                    params: [{
                                        chainId: rootState.connect.chainIdUser.chainId,
                                        chainName: 'BSC Testnet',
                                        nativeCurrency:
                                            {
                                                name: 'BNB',
                                                symbol: 'BNB',
                                                decimals: 18
                                            },
                                        rpcUrls: ['https://data-seed-prebsc-1-s2.binance.org:8545/'],
                                        blockExplorerUrls: ['https://testnet.bscscan.com/'],
                                    }]
                                });
                            } else {
                                await window.ethereum.request({
                                    method: 'wallet_addEthereumChain',
                                    params: [{
                                        chainId: rootState.connect.chainIdUser.chainId,
                                        chainName: 'BSC Mainnet',
                                        nativeCurrency:
                                            {
                                                name: 'BNB',
                                                symbol: 'BNB',
                                                decimals: 18
                                            },
                                        rpcUrls: ['https://bsc-dataseed4.ninicoin.io/'],
                                        blockExplorerUrls: ['https://bscscan.com/'],
                                    }]
                                });
                            }
                        }
                    }
                    await dispatch('connect');
                    return false;
                } else {
                    return false;
                }
            } else {
                if (accounts.length > 0) {
                    commit('setAccount', accounts[0])
                }
                commit('setChainId', network.chainId)
                commit('setActive', true)

                provider.on("connect", async (info) => {
                    let chainId = parseInt(info.chainId)
                    commit('setChainId', chainId)
                    console.log("connect", info)
                });

                provider.on("accountsChanged", async (accounts) => {
                    if (accounts.length > 0) {
                        commit('setAccount', accounts[0])
                    } else {
                        await dispatch('resetApp');
                    }
                    console.log("accountsChanged")
                });
                provider.on("chainChanged", async (chainId) => {
                    chainId = parseInt(chainId)
                    commit('setChainId', chainId)
                    console.log("chainChanged", chainId)
                });
            }


        },
        async resetApp({state, commit}) {
            try {
                await state.web3Modal.clearCachedProvider();
                localStorage.removeItem('user');
                localStorage.removeItem('veldora');
            } catch (error) {
                console.error(error)
            }
            commit('setAccount', null)
            commit('setActive', false)
            commit('setLibrary', getLibrary())
        },
    }
}

export default web3ModalStore;
