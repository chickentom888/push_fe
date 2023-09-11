<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
        <Footer/>
        <ModalError></ModalError>
        <ModalProcessing></ModalProcessing>
        <ModalSuccess></ModalSuccess>
        <TransactionProcessing></TransactionProcessing>
        <ModalWellcome></ModalWellcome>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "@/components/Footer";
import ModalError from "@/components/modal/modal_error";
import ModalProcessing from "@/components/modal/modal_processing";
import ModalSuccess from "@/components/modal/modal_success";
import TransactionProcessing from "@/components/modal/modal_confirmtransaction";
import ModalWellcome from "@/components/modal/modal_wellcome";

export default {
    head: {
        title: {
            inner: 'PUSH SWAP'
        },
        htmlAttrs: {
            lang: 'en'
        },
        // Meta tags
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                id: 'desc',
                hid: 'description',
                name: 'description',
                content: 'A TRADING SUPER PLATFORM AND A FINANCIAL SUPPLY FOR BUSINESS - powered by Blockchain Technology'
            },
            // Twitter
            {name: 'twitter:title', content: 'PUSH SWAP'},
            // with shorthand
            // { n: 'twitter:description', c: 'Content description less than 200 characters'},
            // ...
            // Google+ / Schema.org
            {itemprop: 'name', content: 'PUSH SWAP'},
            {itemprop: 'description', content: 'Content PUSH SWAP'},
            // ...
            // Facebook / Open Graph
            {property: 'fb:app_id', content: 'PUSH SWAP'},
            {property: 'og:title', content: 'Content PUSH SWAP'},
            // with shorthand
            {p: 'og:image', c: '@/assets/images/favicon.png'},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '@/assets/images/favicon.png'},
        ],
    },
    name: 'App',
    components: {
        Footer,
        Navbar,
        ModalError,
        ModalProcessing,
        ModalSuccess,
        TransactionProcessing,
        ModalWellcome
    },
    mounted() {
        console.log('version: 1.0.5');
        // try {
        //     this.$socket.client.on("PUSHSWAP:RPUB_PRESALE_CHANGE", (message) => {
        //         let data = JSON.parse(message);
        //         console.log('data socket', data);
        //     })
        // } catch (e) {
        //     console.log(e);
        // }
    }
}
</script>

<style>
</style>
