<template>
	<div class="navbar">
		<a v-link="'/'"><img class="logo" src="./../assets/logo.png"></a>
	</div>
</template>

<script>
export default {
	data () {
		return {
			// note: changing this line won't causes changes
			// with hot-reload because the reloaded component
			// preserves its current state and we are modifying
			// its initial state.
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.navbar{
		height: 100%;
	}
	img.logo {
		max-width: 10%;
	}
</style>
