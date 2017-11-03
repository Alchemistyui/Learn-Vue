// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//import为ES6的语法，导入node_modules里的vue框架
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

//vue-cli默认
//小括号里面为实例化Vue的一些参数
var app = new Vue({
  //el是vue实例化的选项，提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标
  el: '#app',
  
  //<App />就是App.vue，template就是选择vue实例要加载哪个模板,模板将会替换挂载的元素。挂载元素的内容都将被忽略
  //最新的vue-cli脚手架模板中，App.vue是主程序，其他所有的.vue都是放在App.vue中，
  //所以只需要加载App.vue就完全可以把其他的东西加载出来
  template: '<App/>',

  //组件可以扩展 HTML 元素，封装可重用的代码。组件是自定义元素，Vue.js 的编译器为它添加特殊功能。
  //通过某个 Vue 实例/组件的实例选项 components 注册仅在其作用域中可用的组件
  components: { App }
})


//以下是官网代码的实现
var hello = new Vue ({
	el: '#hello',
	//Vue所有的数据信息都放在data字段 里
	data: {
		message: 'hello vue'
	}
})

var app2 = new Vue ({
	el: '#app-2',
	data: {
		seen: true
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

