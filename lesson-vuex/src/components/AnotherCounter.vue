<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            // increment() {
            //     // this.$emit('updated', 1);
            //     this.$store.state.counter++;
            // },
            // decrement() {
            //     // this.$emit('updated', -1);
            //     this.$store.state.counter--;
            // }
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>