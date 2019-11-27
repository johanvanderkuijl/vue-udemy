# Vue
## key concepts
```
v-once: render something once
v-bind: bind to attribute
v-on: input directive
  v-on:mouseover
  v-on:click
  v-on:keyup example: <input type="text" v-bind:value="counter" v-on:keyup="alertMe">
v-model: 2 way binding

event modifier: addition to directive, like this stop: v-on.keyup.stop
key modifier: bind directive to specific key: v-on.keyup.enter
multiple key modifiers are also possible: v-on.keyup.enter.tab.space
```

```
watch: execute function upon variable change
computed: optimized functions, dynamically calculated. Use them as if they are data properties. data is cached.
methods: functions that run always when a variable has changed

when using a closure you cannot acces the Vue instance,
so pass it using vm = this;
```


## shorthands
```
v-on:click = @click (at click)
v-bind:href = :href (leave v-bind out)
```

## classes
```
use <div class="block" :class="{red: true}"></div> to add class red to div
or use v-model to specify the class directly
<input type=text v-model="color">
<div class="block" :class="color"></div>
you can even specify multiple classes with the array syntax
<div class="block" :class="[color, {red: isRed}]"></div>
```

## inline style

```
<div class="block" :style="{'background-color': color}"></div>
:style => specify style
'background-color' => the property. You can also use backgroundColor without quotes
color => vue property with the color
You can also combine styles:
<div class="block" :style="[myStyle, {height: width + 'px'}]"></div>
```

## jsfiddle links
Getting Started: https://jsfiddle.net/smax/pcjtcmdm/  
Template Syntax: https://jsfiddle.net/smax/bkk97b7g/  
Events: https://jsfiddle.net/smax/7zdak05g/  
Two-Way-Binding: https://jsfiddle.net/smax/ut0tsbcu/  
Computed Properties & Watch: https://jsfiddle.net/smax/yLjqxmw0/  
Dynamic Classes: https://jsfiddle.net/smax/gowg40ym/  
Dynamic Styles: https://jsfiddle.net/smax/3rvdLq5y/  

## Conditionals and lists
v-if v-else v-else-if like you expect  
use ```<template>``` to group content. The template tag is not rendered itself  
use v-show to show/hide with display: none  
use v-for="item in items" directive to render lists  
use v-for="(item, i) in items" to get the index  
you can also do v-for in the template element  
Looping is possible through lists and objects:
```
persons: [
  { name: 'max', age: 27 },
  { name: 'anna', age: 26}
]
<li v-for="person in persons>
  <div v-for="(key, value, i) in person">
  {{ key }} - {{ value }}
```
Create a range/list of numbers: ```<v-for="n in 10">```  
Use v-bind:key or :key to have Vue update the complete item in the list  
  instead of only the position: ``` v-for="person in persons :key=person.id" ```

excercise: https://jsfiddle.net/hx2gb8o0/  

## project 1 monster slayer
see project1-monster-slayer

## The vue js instance
multiple instances:  
    var vm1 = new Vue({ el: '#app2', data: {'title': 'yo'})
    vm1.title = 'blah'
but you cannot add new properties
```
vm1.$el is the html part of Vue
vm1.$data is the data part of Vue, so you can also pass it
$refs are named elements with special attribute ref:
<button ref="yo" @click="clickButton">
this.$refs.yo.innerText='nice';
note that you change the dom, not the internal Vue template!
vm1.$mount("#app") does the same as the el: "#app" property

components: reusable objects
Vue.component('divname', {template: '<h1>hello</h1>'});
```
## about the virtual dom
vue updates the virtual dom quickly and then only updates the real dom with the diff
```
lifecycle methods (in the root Vue obj)
beforeCreate 
create
beforeMount
mounted
beforeUpdate
updated
beforeDestroy
destroyed
```
## development workflow
you can compile an es6 js app into js5 code and serve it pre compiled. nodejs is the package manager and local server
vscode plugin: vetur https://www.youtube.com/watch?v=05tNXJ-Kric  

## vue cli
the vue cli allows us to fetch project templates
``` npm install -g vue-cli ```
now you can choose templates:
simple  
webpack-simple (start here)  
webpack
browserify / browserify-simple  

install vue-cli globally: ```sudo npm install -g vue-cli```
create vue app: ```vue init webpack-simple myapp ```

- babel will transpile es6 to es5 so you can run in any browser  
- index.html serves the /dist/build.js file that was compiled
the file is bundled as one file  
- package.json is for dependencies  
- main.js is executed first. Here is the Vue instance created  
```
new Vue({
  el: '#app',
  render: h => h(App) // es6 function that renders a vue template
})
```
The single file App.vue structure always has:  
- template
- script
- style (optional)

now do cmnd+option+J and open vue dev tools to debug your app

## components
create reusable pieces of code. They shall not have a property named 'data' but a function that returns the data object. Syntax:
```
<mydiv></mydiv>

Vue.component('mydiv', {
	data: function() {
  	return {
    	status: 'OK'
      }
  },
  template: '<p>Server status: {{ status }}'
})
```

You can create a source file ie Header.vue with content:
```
<template>
    <div>
        <h1>Server Status</h1>
    </div>
</template>

<script>
export default {
	data: function() {
  	return {
    	my-var: 'OK'
      }
  },    
}
</script>
```

Now include in in the main.js like this:
```
import Header from './Header.vue'
Vue.component('my-header', Header)
```
And use ```<my-header></my-header>``` in the main code