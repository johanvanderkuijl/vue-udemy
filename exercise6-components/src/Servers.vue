<template>
    <div>
        <ul class="list-group">
                <my-server v-for="index in 5"></my-server>
           
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue'

export default {
    components: {
        'my-server': Server
    },

}
</script>