import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import message from './components/message';

const app = new Vue({
	el: '#app',
	components: {
		message
	}
});