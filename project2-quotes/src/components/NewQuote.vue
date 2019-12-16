<template>
        <div class="row">
            <div class="col-xs-3">
            </div>
            <div class="col-xs-6">
                <div class="form-group">
                <label for="myform">Quote</label>
                <textarea v-model="quote" class="form-control" id="myform" rows="3"></textarea>
                <button :disabled="quote == null || quote == ''" class="btn btn-primary" @click="addQuote">add quote</button>
            </div>
            <div class="col-xs-3">
            </div>

  </div>
        </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    data: function() {
        return {
            quote: "testquote"
        }
    },
    
    methods: {
        addQuote() {
            eventBus.$emit('addQuote', this.quote);
            this.quote = null;
        }
        
    }
}
</script>

<style scoped>

</style>