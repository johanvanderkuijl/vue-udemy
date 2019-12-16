<template>
<div class="col-xs-3">
    <div class="quote" @click="deleteQuote">{{ quote }}</div>

</div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props: ['i', 'quote'],
        methods: {
        deleteQuote() {
            eventBus.$emit('deleteQuote', this.i)
        }
    }
}
</script>

<style scoped>
.quote {
    padding: 10px;
    margin: 10px;
    border: 1px solid #aaa;
    background-color: #eee;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2em;
}

.quote:hover {
    background-color: coral;
    cursor: pointer;    
}

</style>