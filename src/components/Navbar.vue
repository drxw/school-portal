<template>
	<div class="navbar">
		<a v-link="'/'"><img class="logo" src="./../assets/sm-logo.png"></a>

		<div class="profile">
			<img class="ui-face" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg">
			<p>Charles Oakley <span>(Parent)</span></p>
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
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.navbar{
		margin-top: 20px;		
		margin-bottom: 20px;
	}
	
	img.logo {
		max-width: 10%;
	}
	.profile {
		float: right;
		margin-right: 300px;
	}
	.navbar p {
		float: right;
		margin-top: 30px;
	    margin-left: 20px;
	    font-size: 1.3em;
	}
	.navbar p span {
		font-style: italic;
		color: #c4c4c4;
		font-size: 0.8em;
	}
	img.ui-face {
		border-radius: 100px;
		max-width: 80px;
		border: 2px solid #c4c4c4;
		float: left;
	}
</style>
