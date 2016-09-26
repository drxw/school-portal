import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ClassCompare from './components/ClassCompare'

Vue.use(VueRouter)

const router = new VueRouter({ history: true })

router.map({
	'/' : {
		component: App
	},
	'/class-compare' : {
		component: ClassCompare
	}
})

router.redirect({
	'*' : '/'
})

router.start( App, '#app' )