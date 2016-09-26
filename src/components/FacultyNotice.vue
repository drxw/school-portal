<template>
	<div class="faculty-notice">
		<h1>{{ msg }}</h1>


		<p>Name</p>
		<input type="text" v-model="userName" disabled>

		<p>Affected students</p>
		<input type="text">

		<br>

		<p>Reason</p>
		<select>
			<option v-for="option in options">{{ option }}</option>
		</select>

		<br>

		<button>Submit</button>

		<div class="info">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
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
			msg: 'Faculty Notice',
			userName: 'Charles Oakley',
			options: ['Late Pickup', 'Early Pickup', 'Absent']
		}
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1 {
		color: #105BA4;
	}
	.info {
		margin-top: 50px;
		line-height: 2;
	}

	input {
		width: 50%;
		height: 40px;
		padding-left: 10px;
		font-size: 1.1em;
		margin-bottom: 60px;
	}

	select {
		border: none;
		width: 20%;
    	height: 60px;
    	font-size: 1.2em;
	}
	button {
		min-width: 160px;
		padding: 10px;
		font-size: 1.1em;
		text-align: center;
		background-color: #6dde6a;
		border: none;
		color: #fff;
		margin-top: 50px;
		cursor: pointer;
	}
</style>
