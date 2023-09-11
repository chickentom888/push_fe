import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/home/index";
import Staking from "../views/pages/staking/index";
import Affiliate from "../views/pages/affiliate/index";
import AffiliateTest from "../views/pages/affiliateTest/index";
import Swap from "../views/pages/swap/index";
import Withdraw from "../views/pages/withdraw/index";
import Mint from "../views/pages/mint/index";
import Airdrop from "../views/pages/airdrop/index";
import Lock from "../views/pages/lock/index";
import ILO from "../views/pages/ilo/index";
import IloPreCreate from '../views/pages/ilo/create/pre_create'
import DetailProject from '../views/pages/ilo/your_project/detail'
import UpdateProject from '../views/pages/ilo/your_project/update'
import YourProject from '../views/pages/ilo/your_project/index'
import IloCreate from "../views/pages/ilo/create/create";
import detailLock from "../views/pages/lock/detail";
import createLock from "../views/pages/lock/create";
import historyLock from "../views/pages/lock/history";
import JoinedProject from '../views/pages/joined-project/index';
import JoinedProjectDetail from '../views/pages/joined-project/detail';
import IloDetail from '../views/pages/ilo/detail';
import Layout from "../components/Layout";
import PageNotFound from "../views/pages/NotFound";
import Nft from '../views/pages/nft/index';

Vue.use(VueRouter);

const routes = [
// { path: "/staking", name: "Staking", component: Staking },
    {
        id: 1,
        path: "/",
        component: Home,
        meta: {title: "Welcome - PushSwap"},
    },
    {
        id: 2,
        path: "/swap",
        name: "Swap",
        component: Home,
        // component: Swap,
        meta: {title: "Swap - PushSwap"},
    },
    {
        id: 3,
        path: "/staking",
        name: "Staking",
        component: Home, // Sử dụng component layout chung
        meta: {title: "Staking - PushSwap"},
    },
    {
        id: 4,
        path: "/affiliate",
        name: "Affiliate",
        component: Home, // Sử dụng component layout chung
        meta: {title: "Affiliate - PushSwap"},
    },
    {
        id: 5,
        path: "/withdraw",
        name: "Withdraw",
        component: Home,
        meta: {title: "Withdraw - PushSwap"},
    },
    {
        id: 6,
        path: "/mint",
        name: "Mint",
        component: Home,
        meta: {title: "Mint - PushSwap"},
    },
    {
        id: 7,
        path: "/airdrop",
        name: "Airdrop",
        component: Home,
        meta: {title: "Airdrop - PushSwap"},
    },
    {
        id: 8,
        path: "/lock",
        name: "Lock",
        component: Home,
        meta: {title: "Lock - PushSwap"},
    },
    {
        id: 9,
        path: "/detail-lock/:address",
        name: "Detail Lock",
        component: Home,
        meta: {title: "Detail Lock - PushSwap"},
    },
    {
        id: 10,
        path: "/create-lock",
        name: "Create Lock",
        component: Home,
        meta: {title: "Create Lock - PushSwap"},
    },
    {
        id: 11,
        path: "/history-lock",
        name: "History Lock",
        component: Home,
        meta: {title: "History Lock - PushSwap"},
    },
    {
        id: 12,
        path: "/ilo",
        name: "ILO",
        component: Home,
        meta: {title: "ILO - PushSwap"},
    },
    {
        id: 14,
        path: "/affiliateTest",
        name: "AffiliateTest",
        component: Home, // Sử dụng component layout chung
        meta: {title: "AffiliateTest - PushSwap"},
    },
    {
        id: 15,
        path: '/ilo-create',
        name: 'Create ILO',
        component: Home,
        meta: { title: 'ILO create - PushSwap' }
    },
    {
        id: 16,
        path: '/ilo-pre-create',
        name: 'Create ILO',
        component: Home,
        meta: { title: 'ILO create - PushSwap' }
    },
    {
        id: 17,
        path: '/detail-your-project',
        name: 'Detail Your Project',
        component: Home,
        meta: { title: 'Detail Your Project - PushSwap' }
    },
    {
        id: 18,
        path: '/update-your-project',
        name: 'Update Your Project',
        component: Home,
        meta: { title: 'Update Your Project - PushSwap' }
    },
    {
        id: 19,
        path: '/your-project',
        name: 'Your Project',
        component: Home,
        meta: { title: 'Your Project - PushSwap' }
    },
    {
        id: 20,
        path: '/joined-project',
        name: 'Joined Project',
        component: Home,
        meta: { title: 'Joined Project - PushSwap' }
    },
    {
        id: 21,
        path: '/joined-project/:contract_address',
        name: 'Joined Project Detail',
        component: Home,
        meta: { title: 'Joined Project Detail - PushSwap' }
    },
    {
        id: 22,
        path: '/ilo/:contract_address',
        name: 'Ilo Detail',
        component: Home,
        meta: { title: 'Ilo Detail - PushSwap' }
    },
    {
        id: 24,
        path: '/nft',
        name: 'Nft',
        component: Home,
        meta: { title: 'Nft - PushSwap' }
    },
    {path: "/404", name: "Page not found", component: PageNotFound},
    {path: "*", redirect: "/404"},
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
