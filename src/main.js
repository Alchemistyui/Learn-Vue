// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

var hello = new Vue ({
	el: '#hello',
	data: {
		message: 'hello vue'
	}
})

var app_2 = new Vue ({
	el: '#app-2',
	data: {
		seen: false
	}
})

var app_3 = new Vue ({
	el: '#app_3',
	data: {
		todos: [
		{item: 'no.1'},
		{item: 'no.2'}
		]
	}
})
