<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';
    export default {
        // this wil map to the getter functions in the store
        // but you cannot use your own computed properties
        computed: {
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
            })
        }
        // computed: {
        //     counter() {
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks() {
        //         return this.$store.getters.stringCounter;
        //     }
        // }
    }
</script>