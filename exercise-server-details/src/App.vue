<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
        selected is now: {{ selected }}
        <button @click="selected = 1">select 1</button>
        <button @click="selected = 2">select 2</button>
        <button @click="selected = 3">select 3</button>
        <button @click="selected = 4">select 4</button>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    import { eventBus } from './main';
    
    export default {
        components: {
            'app-header': Header,
            'servers': Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        data: function() {
            return {
                selected: 3
            }
        },
        methods: {
            setSelected: function () {
                
            }
        },

    }
</script>

<style>

</style>

