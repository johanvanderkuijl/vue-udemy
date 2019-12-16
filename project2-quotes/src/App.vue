<template>
    <div class="container">

        <app-counter :counter="quotes.length"></app-counter>
        <app-new-quote></app-new-quote>
        <div v-for="(quote,i) in quotes">
            <app-quote :quote="quote" :i="i"></app-quote>
        </div>
        <app-info></app-info>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import NewQuote from './components/NewQuote.vue';
    import Info from './components/Info.vue';
    import Counter from './components/Counter.vue';
    
    import { eventBus } from './main';
    
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
        },
        methods: {

        },
        created() {
            eventBus.$on('addQuote', (data) => {
                if (this.quotes.length < 10) {
                    this.quotes.push(data);
                } else {
                    alert('Too many quotes')
                }
            }),
            eventBus.$on('deleteQuote', (data) => {
                this.quotes.splice(data, 1);
               
            })
        }
    }
</script>

<style>
</style>
