import {ethers} from "ethers";
import {simpleRpcProvider} from "@/utils/web3";
import store from '@/store'
import {settingsContract} from "@/utils/const.js";
import Web3 from 'web3'

const {library} = store.state.web3Modal
const signer = library.getSigner()

export const presaleGenerator = (abi, address) => {
    return getContract(settingsContract[abi], address, signer)
}

const getContract = (abi, address, signer = null) => {
    const signerOrProvider = signer ?? simpleRpcProvider
    return new ethers.Contract(address, abi, signerOrProvider)
}

export const presaleContract = (ABI, address) => {
    return new Promise(function (resolve, reject) {
        let web3 = new Web3(window.web3.currentProvider)
        let web3Contract = new web3.eth.Contract(settingsContract[ABI], address)
        resolve(web3Contract)
    })
}

export const web3 = () => {
    let web3;
    if (store.state.active) {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        store.dispatch('connect');
    }
    return web3;
}