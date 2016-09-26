import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ClassCompare from './components/ClassCompare'
import FacultyNotice from './components/FacultyNotice'

Vue.use(VueRouter)

const router = new VueRouter({ history: true })

router.map({
	'/' : {
		component: App
	},
	'/class-compare' : {
		component: ClassCompare
	},
	'/faculty-notice' : {
		component: FacultyNotice
	}
})

router.redirect({
	'*' : '/'
})

router.start( App, '#app' )