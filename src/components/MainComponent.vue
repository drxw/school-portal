<template>
	<div class="main" v-if="$route.path === '/'">
		<h1>{{ msg }}</h1>

		<div class="utilities">
			<div class="utility"><a v-link="'/class-compare'">C</a></div>
			<div class="utility">R</div>
			<div class="utility"><a v-link="'/faculty-notice'">F</a></div>

			<div class="utility">M</div>
			<div class="utility">P</div>
			<div class="utility">H</div>

		</div>

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
			msg: 'Product Selection'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.sm-red {
		color: #C13440;
	}
	.sm-regBlue {
		color: #105BA4;
	}
	.sm-darkBlue {
		color: #1A3665;
	}
	.sm-yellow {
		color: #F7BE56;
	}
	h1 {
		color: #105BA4;
	}
	.main {
		height: 100%;
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
		font-family: "Times New Roman";
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
		color: #105BA4;
	}
</style>
