<template>
    <div class="container">
        <app-navbar></app-navbar>
        <router-view></router-view>
    </div>
</template>

<script>

    import Navbar from './components/Navbar.vue'
    import Start from './components/Start.vue'
    import Stocks from './components/Stocks.vue'
    import Portfolio from './components/Portfolio.vue'

    export default {
        components: {
            appNavbar: Navbar,
            appStart: Start,
            appStocks: Stocks,
            appPortfolio: Portfolio
        }
    }
</script>

<style>

</style>
