<template>
    <div class="container">
        <app-counter :counter="quotes.length"></app-counter>
        <app-new-quote></app-new-quote>
        <div v-for="quote in quotes">
            <app-quote></app-quote>
        </div>
        <app-info></app-info>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import NewQuote from './components/NewQuote.vue';
    import Info from './components/Info.vue';
    import Counter from './components/Counter.vue';

    export default {
        components: {
            appQuote: Quote,
            appNewQuote: NewQuote,
            appInfo: Info,
            appCounter: Counter
        },
        data: function() {
            return {
                quotes: ['aaa', 'bbb']
            }
        }
    }
</script>

<style>
</style>
