<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="index in 5">
                <my-server></my-server>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
	data: function() {
      	return {
        	index: 1
        }
    },
}
</script>