<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item"
                v-for="server in servers">

                <app-server :server=server></app-server>
                
            </li>
        </ul>
    </div>
</template>

<script>
import Server from "./Server.vue"

export default {
    components: {
        'app-server': Server
    },
    data: function() {
        return {
            servers: [
                {id: 1, status: "Normal"},
                {id: 2, status: "Critical"},
                {id: 3, status: "Unknown"},
                {id: 4, status: "Normal"},
            ]
        }
    },
    methods:{
        reset: function(){
            
        },

    }
}
</script>

<style>

</style>
