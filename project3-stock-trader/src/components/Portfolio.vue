<template>
    <div class="row">
        <app-stock 
            v-for="(stock, i) in portfolio"
            :stock=stock
            stype="sell"
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
        portfolio() {
            return this.$store.getters.portfolio;
        }
    },    
    data() {
        return {
        }
    }
}
</script>