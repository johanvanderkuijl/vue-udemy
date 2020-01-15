<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Q: {{ $route.query.q }}</p>
        <button 
            class="btn btn-primary"
            @click="confirmed = true"
            >Confirm {{ confirmed }}</button>
        
        <div style="height: 700px">
        </div>
        
        <p id="data">Some element</p>

    </div>

</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next) {
        console.log('UserEdit.vue beforeRouteLeave');
        if (this.confirmed) {
            console.log('confirmed')
            next();
        } else {
            if (confirm('sure?')) {
                next();
            } else {
                next(false);
            }
        }
        
    }
}
</script>