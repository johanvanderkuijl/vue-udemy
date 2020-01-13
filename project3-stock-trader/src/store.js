import Vue from 'vue';
import Vuex from 'vuex';

import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        day: 0,
        stocks: [
            {
                id: 0,
                name: 'BMW',
                price: 50
            },
            {
                id: 1,
                name: 'Google',
                price: 100
            },
            {
                id: 2,
                name: 'Apple',
                price: 200
            },
            {
                id: 3,
                name: 'Twitter',
                price: 30
            },
        ],
        portfolio: [
        ]
    },
    getters: {
        funds: state => {
            return state.funds;
        },
        day: state => {
            return state.day;
        },
        stocks: state => {
            return state.stocks;
        },
        portfolio: state => {
            // calculate it here
            return state.portfolio;
        },
        state: state => {
            return state;
        }
    },
    mutations: {
        buy: (state, payload) => {
            // let stock = Object.assign({}, payload.stock);
            let stock = { ...payload.stock };
            let qty = parseInt(payload.qty);

            state.funds -= qty * stock.price;

            // now transfer to portfolio
            stock.qty = qty;

            // if not exists, push it
            var index = state.portfolio.findIndex(x => x.id == stock.id);
            if (index === -1){
                state.portfolio.push(stock);
            } else {
                state.portfolio[index].qty += qty;
                // console.log(index.toString() + ' exists');
            }
        },
        sell: (state, payload) => {
            // let stock = Object.assign({}, payload.stock);
            let stock = { ...payload.stock };
            let qty = parseInt(payload.qty);
            state.funds = state.funds + qty * stock.price;

            var index = state.portfolio.findIndex(x => x.id == stock.id);
            if (index === -1){

            } else {
                state.portfolio[index].qty -= qty;
                // console.log(index.toString() + ' exists');
                if (state.portfolio[index].qty == 0) {

                    state.portfolio.splice(index, 1);
                }
            }

        },
        // calculate new random prices for the stocks
        endDay: (state) => {
            for (const index in state.stocks) {
                let delta = Math.floor(Math.random() * state.stocks[index].price / 15) + 1;
                if (Math.random() > 0.5) {
                    state.stocks[index].price += delta;
                } else {
                    state.stocks[index].price -= delta;
                }

                // also update portfolio
                let indexPortfolio = state.portfolio.findIndex(x => x.id == state.stocks[index].id);
                if (indexPortfolio === -1){
                    // nothing
                } else {
                    state.portfolio[indexPortfolio].price = state.stocks[index].price;
                }
            };
            state.day += 1;
        },
        saveData: (state) => {
            console.log('store.js saveData:');
            console.log(state);
            Vue.http.put('https://stock-a9d07.firebaseio.com/state.json', state)
                .then(response => {
                    console.log(response);
                }, error => {
                    console.log(error);
                });
        },
        loadData: (state) => {
            console.log("getting state");
            Vue.http
                .get("https://stock-a9d07.firebaseio.com/state.json")
                .then(response => {
                    return response.json();
                })
                .then(
                    data => {
                        console.log(data);
                        store.replaceState(data);
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
    },
    actions: {
    }
});
