<template>
    <div>

    <h3>Some User Details</h3>
    <p>
        User loaded with id: {{ $route.params.id }}
    </p>

    
    <!-- <router-link :to="{ path: 'edit'}" append><a>edit</a></router-link> -->
    <hr>
    <router-link 
        :to="{ 
            name: 'userEdit', 
            params: { 
                id: $route.params.id 
            },
            query: { 
                locale: 'en', 
                q: 100
            },
            hash: '#data'
        }" 
        class="btn btn-primary"
        >edit
    </router-link>
    
    
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) { 
        console.log('userdetail before route enter')
        next();
    }
}
</script>