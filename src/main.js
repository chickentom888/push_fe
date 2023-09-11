import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import VTooltip from 'v-tooltip'
import BootstrapVue from 'bootstrap-vue'
import VueLoadingOverlay from 'vue-loading-overlay'



import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Toaster from 'v-toaster'
import VueClipboard from 'vue-clipboard2'
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import axios from "axios";
import VueCookies from 'vue-cookies'
import Select2 from 'v-select2-component';

import './assets/css/styles.css'
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap.css'
import 'v-toaster/dist/v-toaster.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/js/jquery.min.js'
import './assets/js/bootstrap.bundle.min.js'
import './assets/js/slick.min.js'
import 'aos/dist/aos.css'
import moment from "moment";

import i18n from './lang/i18n'

Vue.use(VTooltip);
Vue.use(BootstrapVue);
Vue.use(VueCookies);
Vue.component('VueLoadingOverlay', VueLoadingOverlay);
Vue.$cookies.config('5m');
Vue.config.productionTip = false;
Vue.use(Toaster, {timeout: 3000});
VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);
Vue.component('Select2', Select2);
// import VueSocketIOExt from 'vue-socket.io-extended';
// import { io } from 'socket.io-client';
// var socket = io(process.env.WSS_API_URL || 'wss://ws.pushswap.org');
// Vue.use(VueSocketIOExt, socket);
Sentry.init({
    Vue,
    dsn: process.env.SENTRY_URL || "https://f2be4e4b9356483d837580d2bc0fb7e0@o4505436553674752.ingest.sentry.io/4505436557148160",
    integrations: [
        new Integrations.BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracingOrigins: ["localhost", "pushswap.org", /^\//],
        }),
    ],
    tracesSampleRate: 1.0,
});

import filters from './filters';
Vue.use(filters);

new Vue({
    i18n,
    router,
    store,
    vuetify,
    created () {
        AOS.init()
      },
    render: h => h(App)
}).$mount('#app')


//change when deploy
let version = '1.0.5';

if (!localStorage.getItem('app_version') || localStorage.getItem('app_version') !== version) {
    localStorage.removeItem('pushpad');
    localStorage.setItem('app_version', version);
    // Fire a refresh
    window.location.reload();
}

Vue.directive('click-outside', {
    priority: 700,
    bind() {
        let self = this;
        this.event = function (event) {
            self.vm.$emit(self.expression, event)
        }
        this.el.addEventListener('click', this.stopProp)
        document.body.addEventListener('click', this.event)
    },
    unbind() {
        this.el.removeEventListener('click', this.stopProp)
        document.body.removeEventListener('click', this.event)
    },
    stopProp(event) {
        event.stopPropagation()
    }
})

axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        store.commit("hideProcess");
        console.log(error);
    }
);

import $ from 'jquery';

window.$ = $;
