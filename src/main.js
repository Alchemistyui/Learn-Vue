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

var app2 = new Vue ({
	el: '#app-2',
	data: {
		seen: false
	}
})

var app3 = new Vue ({
	el: '#app-3',
	data: {
		todos: [
		{item: 'no.1'},
		{item: 'no.2'}
		]
	}
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


var app5 = new Vue ({
	el: '#app-5',
	data: {
		message: ''
	}

})

Vue.component ('todo-item', {
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue ({
	el: '#app-6',
	data: {
		groceryList: [
		{id: 0, text: '蔬菜'},
		{id: 1, text: '水果'},
		{id: 2, text: '肉类'}
		]
	}
})

