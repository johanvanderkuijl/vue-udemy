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
create reusable pieces of code. They shall not have a property named 'data' but a function that returns the data object. Syntax of a global temlate
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

the question is, how to have index go up
how to show certain rows in table with v-show and v-for.
and how can we pass props...
## directory structure
you could place all components in folder 'components', or group files by feature, like 'users' or 'shop'

The native dom is case insensitive. But when using components you could use PascalCase or camelCase.
But you could use app-header and appHeader together. The best practice is to use hypens: app-header in the dom.

## scoped style
By default any style in a component is applied everywhere. Override by using:
```<style scoped></style>```
Vue adds a special attribute like data-v-70b76ce2 to the div and adds the style in the main header section.

## props
used to pass info to components:
call
```
<my-component name='hard-coded'></my-component>
<my-component :name="name"></my-component>

export default {
  props: ['array', 'of', 'properties']
}
```
For validating props you can use objects, array's and the required key like this:
```
props: {
  name: String,
  otherName: [String, Array],
  myProp: {
    type: String,
    required: true
  }
}
You can also use key 'default' for a default value. This can also be a function in case of an object.
```
The prop in the component is a reference (pointer) to an object.

The component can emit events with ```this.$emit('nameWasReset', "Johan");```
You can now listen with ```v-on:nameWasReset="name = $event"``` or with the @ sign: ```@nameWasReset="name = $event"
The emitted value gets assigned to the name.

It is also possible to pass a callback function to the component as a prop that gets called in the on-click handler.
See example Section Code (Start)

There are several methods to change a prop in a component:
- by emitting an event
- by passing a callback fn
- event bus!

## event bus
create the bus in main.js before the main vue instance:```export const eventBus = new Vue();```
import the bus in the component: ```import { eventBus } from '../main';```
now emit the events on the bus: ``` eventBus.$emit('myEvent', value)```
and listen for events:
```
    created() {
        eventBus.$on('selectServer', (data) => {
            this.data.property = data.property;
        })
    }
```
You can also add functions and data to the event bus because it's just a Vue intance

## exercise server details
- how to show details on sub page: render component on click.
- hoe ga je uit een lijst een geselecteerde server tonen:
1. hou data bij met 'selected server' deze is leeg maar heeft waarde indien server gekozen door gebruiker
dan met v-show toon dit element en zijn functies

- where to store the chosen server
- the data of each server is stored in servers.vue, so should the state of the chosen server also be store there
  - as separate property
  - as property in the details of each server?

- why is this.selected not updated?
- how to reset the state

### solution
until 2:30 ok with Server component
at 5:55 changing id to server
the whole server object is passed as an event
you must handle the events like this to make this.server work:
```
    created() {
        eventBus.$on('selectServer', (server) => {
            this.server = server;
        })
    }
```
on 8:55 he explains this very well.

# Modules / Slots
We want to quote some combination of h2 and p tags, but cannot do this with props. The
solution is a component with the reserved ```<slot></slot>``` syntax. You can use this
if you want to show content like slide shows.  It is called like:

    <app-quote>
    <h2>header</h2>
    <p>data</p>
    </app-quote>

- the child component style is applied, but it can also be applied in the parent
- the parent vars are calulated before passing the data to the child component

## named slots
Give multiple slots their own name

    <!-- parent -->
    <app-quote>
      <h2 slot="title">header</h2>
      <p slot="content">header</p>
    </app-quote>

    <!-- child     -->
    <slot name="title"></slot>
    <slot name="content"></slot>

A slot without a name becomes the default slot.

A named slot without content can show default data: ```<slot name="sub">default</slot>```

## dynamic components
render them like this:

    <component :is="selectedComponent" >
        default content
    </component>


