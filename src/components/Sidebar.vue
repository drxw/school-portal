<template>
	<div class="sidebar">
		<h1>{{ msg }}</h1>

		<ul>
			<li><a v-link="'/'">Home</a></li>
			<li><a v-link="'/class-compare'">Class Compare</a></li>
			<li><a v-link="'/class-compare'">Recent Submissions</a></li>
			<li><a v-link="'/faculty-notice'">Faculty Notice</a></li>
		</ul>
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
			msg: 'School Portal'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1 {
		color: #105BA4;
	}
	.sidebar {
		border-right: 1px solid #e1e1e1;
		margin-right: 20px;
		height: 80%;
	}
	.sidebar ul {
		margin-top: 5em;
	}
	.sidebar ul li {
		list-style-type: none;
		font-size: 1.5em;
		line-height: 1.5;
	}
	.sidebar ul li a, 
	.sidebar ul li a:link, 
	.sidebar ul li a:visited {
		color: #c4c4c4;
		text-decoration: none;
	}
	.sidebar ul li:hover {
		border-right: 2px solid #C13440;
		border-right-width: 10px;
	}
</style>
