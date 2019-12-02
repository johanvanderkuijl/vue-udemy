<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="increaseAgeFn()">Edit Age {{ age }} callback </button>
        <button @click="emitNewAge()">Edit Age {{ age }} with event</button>
        <button @click="emitNewAgeEventBus()">Edit Age {{ age }} with eventBus</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props: ['age', 'increaseAgeFn'],
    methods: {
        emitNewAge() {
            var myAge = this.age
            myAge++
            this.$emit('iWasEmitted', myAge)
            console.log('emitting new age: ' + myAge)
        },
        emitNewAgeEventBus() {
            var myAge = this.age
            myAge++
            eventBus.$emit('iWasEmittedOnTheEventbus', myAge)
        },
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
