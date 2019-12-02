<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="!server">Please select a server</div>
        <div v-else>
        <p>Server id: {{ server.id }}</p>
        <p>Server status: {{ server.status }}</p>
        <button @click="setNormal">set normal</button>
        
        </div>
    </div>

</template>

<script>
import { eventBus } from '../../main';
export default {

    data: function () {
        return {
            server: null
        }
    },
    methods: {
        setNormal: function() {
            // this works because the server we have here is a pointer to the actual server
            // so if this pointer is updated the main server is also updated. It is not a copy
            this.server.status = 'Normal'
        }
    },
    created() {
        // you have to create the callback like this es6 notation so 'this' is the component
        eventBus.$on('selectServer', (server) => {
            console.log(`es 6 serverdetails server.id: ${server.id}`)
            console.log(this);
            this.server = server;
        }),

        // 'this' is the global vue instance
        eventBus.$on('selectServerEs5', function update(server) {
            console.log(`es 5 serverdetails server.id: ${server.id}`)
            console.log(this);
            this.server = server;
            
        }),

        eventBus.$on('yo', function name(params) {
            
        })
    }
}
</script>

<style>

</style>
