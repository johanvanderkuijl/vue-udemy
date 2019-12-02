<template>
    <div>
        Server #{{ server.id }} - {{ server.status }}
    
        <button @click="selectServer" >details</button>
        <button @click="selectServerEs5" >details es5</button>
    </div>
</template>

<script>
import { eventBus } from '../../main';
export default {
    props: ['server'],
    data: function() {
        return {
            
        }
    },
    methods: {
        selectServer() {
            console.log('Server.vue selected server id: ' + this.server.id)
            eventBus.$emit('selectServer', this.server)
        },
        selectServerEs5() {
            console.log('Server.vue selected server id: ' + this.server.id)
            eventBus.$emit('selectServerEs5', this.server)
        },
    }

    
    
}
</script>