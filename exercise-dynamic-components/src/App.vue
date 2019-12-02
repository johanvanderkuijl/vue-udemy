<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="comp = 'app-blue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="comp = 'app-green'" class="btn btn-success">Load Green Template</button>
                <button @click="comp = 'app-red'" class="btn btn-danger">Load Red Template</button>
                <p>selected: {{ comp }}</p>
                <hr>
                <component v-show="comp == 'app-blue'" :is="comp">
                    <h1>Blue</h1>
                    <p>content</p>
                </component>

                <component v-show="comp == 'app-green'" :is="comp">
                    <h1>Green</h1>
                    <h2>like, grass</h2>
                    <p>the content</p>
                </component>

                <component v-show="comp == 'app-red'" :is="comp">
                    <h1>Red</h1>
                    <p>more content here</p>
                </component>

            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                comp: 'app-red'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
