<template>
    <div class="container">
        <app-navbar></app-navbar>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
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
.slide-enter-active {
    animation: slide-in 0.15s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 0.15s ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-30px);
        opacity: 0;
    }
}

</style>
