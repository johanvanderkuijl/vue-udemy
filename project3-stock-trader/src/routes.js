import Start from './components/Start.vue';
import Stocks from './components/Stocks.vue';
import Portfolio from './components/Portfolio.vue';

export const routes = [
    { path: '', component: Start },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
];