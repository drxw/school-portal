<template>
	<div id="wrapper">
		<div class="navbar-container" v-cloak>
			<navbar></navbar>
		</div>
		<div class="main-container">
			<main-component></main-component>
			<router-view v-if="$route.path !== '/'"></router-view>
		</div>
		<div class="sidebar-container">
			<sidebar></sidebar>
		</div>
	</div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainComponent from './components/MainComponent'

export default {
	components: {
		Navbar,
		Sidebar,
		MainComponent
	}
}
</script>

<style>
	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
		/*overflow: auto;*/
	}
	html {
		/*background-color: red;*/
	}
	body {
		/*background-color: blue;*/
	}
	#wrapper {
		height: 100%;
		max-width: 2000px;
		margin: 0 auto;
		padding-left: 20px;
		font-family: Helvetica;
	}
	.navbar-container {
		max-height: 200px;
	}
	.main-container {
		width: 70%;
		float: right;
	}
	.sidebar-container {
		width: 30%;
		height: 100%;
		float: left;
	}
	[v-cloak] { display:none; }
</style>