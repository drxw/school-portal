<template>
	<div class="class-compare">
		<h1>{{ msg }}</h1>

		<!-- <router-view></router-view> -->
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
			msg: 'Hello from Class Compare'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1 {
		color: #42b983;
	}
	.main {
		height: 100%;
		margin-left: 20px;
	}
	.utilities {
		/*border: 1px solid black;*/
	}
	.utilities .utility {
		width: 20vw;
		height: 20vw;
		line-height: 20vw;	
		text-align: center;
		font-size: 10vw;
		color: #c4c4c4;
		display: inline-block;
		margin-top: 5px;
		padding-bottom: 2px;
		/*border: 1px solid #ff0000;*/
	}
	.utilities .utility a,
	.utilities .utility a:link,
	.utilities .utility a:visited {
		color: #c4c4c4;
		text-decoration: none;
	}
	.utilities .utility:hover,
	.utilities .utility:hover a,
	.utilities .utility a:hover {
		background-color: #fbfbfb;
		color: #7bcea9;
	}
</style>
