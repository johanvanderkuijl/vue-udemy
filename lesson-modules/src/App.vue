<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">quote</button>
                <button @click="selectedComponent = 'appAuthor'">author</button>
                selected: {{ selectedComponent }}
                <hr/>
                <component :is="selectedComponent" >
                    default content
                </component>
               <!-- <app-quote>
                   <h2>hello</h2>
                   <p>nice quote</p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    export default {
        data: function() {
            return {
                selectedComponent: "appQuote"
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author
        },
    }
</script>

<style>
h2 {
    color: red;
}
</style>
