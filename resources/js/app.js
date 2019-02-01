//Dependencies
import Vue from 'vue'

//Css
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css'
import '@fortawesome/fontawesome-free/css/all.css'

//Components
import todo from './components/todo'
import button from './components/button'
import list from './components/list'
import cardBody from './components/card-body'
import inputText from './components/input-text'

Vue.component('btn', button)
Vue.component('card-body', cardBody)
Vue.component('list', list)
Vue.component('input-text', inputText)
Vue.component('todo', todo)

const app = new Vue({
	el: '#app'
})