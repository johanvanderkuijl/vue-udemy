<template>
    <div class="row">
        <app-stock 
            v-for="(stock, i) in stocks"
            :stock=stock
            stype="buy"
            :key="i"
        ></app-stock>        
    </div>
</template>

<script>
import Stock from './Stock.vue' 

export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    },    
    data() {
        return {
        }
    }
}
</script>