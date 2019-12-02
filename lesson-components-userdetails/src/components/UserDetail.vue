<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>name: {{ name }}</p>
        <p>age: {{ age }}</p>
        <p>switched name: {{ switchName() }}</p>
        <button @click="resetName">Reset</button>
        <button @click="resetFn()">Reset with function</button>

    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: {
        "name": [String, Array],
        "resetFn": Function,
        "age": Number
        
    },
    methods: {
        switchName() {
            return this.name.split("").reverse().join("");
        },
        resetName() {

            this.$emit('nameWasReset', "Max");
        }
    },
    created(){
        // add listener here
        eventBus.$on('iWasEmittedOnTheEventbus', function(age) {
            // do something on this event
            this.age = age;
            console.log('in the eventbus, got ' + age)

        })
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
