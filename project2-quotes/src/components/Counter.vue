<template>
        <div class="row">
            <div class="col-xs-12">
                <h2>Quotes added</h2>
                <div class="progress">
                    
                    <div 
                        class="progress-bar" 
                        role="progressbar" 
                        style="width: 25%" 
                        :style="progressStyle()"
                        aria-valuenow="25" 
                        aria-valuemin="0" 
                        aria-valuemax="100">
                        {{ counter }} / 10
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['counter'],
    methods: {
        progressStyle() {
            return "width: " + 10*this.counter + '%';
        }
    }
}
</script>

<style scoped>

</style>