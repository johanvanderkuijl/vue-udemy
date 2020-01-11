# vuex
see project lesson-vuex
centralized state management, when props or the event bus is not enough.
Key is that the state of objects is stored on a centralized location.

central store: holds the state

install vuex:
```npm install --save vuex```
maak dan een store.js aan:
```
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
```
Use getters to get data and perform calculations

You can use ...mapGetters([]) to map them automatically, but then you cannot use own properties. to fix this, use the spread operator (...):
```
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
        }
```
This will however not compile with the current babel, so install this:
```npm install --save-dev babel-preset-stage-2```
finally, change the file .babelrc by adding:
```
    ["stage-2"]
```
### mutations
Use mutations to change the state, like getters get the state.
A mutation will change the state, and the components will get the new state. Creater mutations in the vuex store, then call them using import { mapMutations }  and then ...mapMutations

Mutations should run synchronous, so do not use setTimeout() in them.

### actions
Extra function where you may run async tasks, and commit the results. You can use setTimeout here.
```
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
```

### summary
Vuex uses state, getters, mutations, actions. Actions commit mutations. Getters return state.
The components dispatch actions.

## folder structure
create 'modules' folder with counter.js etc
also create separate files actions.js, getters.js, mutations.js
actions.js:
```
export const updateValue = ({ commit }, payload) => {
    commit('updateValue', payload);
};
```
store.js:
```
import * as actions from './actions';

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    actions,
    modules: {
        counter
    }
});
```
## namespaces
Since all these files are merged together do not use the same name for the functions.