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

# project 1 monster slayer

