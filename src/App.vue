<template>
  <div id="app">

    <hello></hello>

    <!--数据渲染模板指令-->
    <h1 v-text="title"></h1>
    <!--input 双向绑定 & 触发事件 -->
    <input v-model="newItem" v-on:keyup.enter="addNew()">
    <ul>
      <!--列表循环渲染 & 属性绑定 & 事件绑定-->
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="targetFinished(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>

// 可以用任意名称指向store.js输出的方法
import Store from './store'
import Hello from './components/HelloWorld'

// export 里面的东西会自动生成 new Vue（...），而export进来的东西为 Vue 的参数，export default命令用于指定模块的默认输出（ES6）
export default {

  components: {
    Hello
  },

  //ES6语法，=  data: function () {...}
  data () {
    return {
      title: 'Alchemist\'s list', 
      items: Store.fetch(),
      newItem: ''
    }
  },
  //监听数据的变化
  watch: {
    items: {
      handler (items) {
        Store.save(items)
      },
      // 深层复制，为了方便取到item里的值的更改
      deep: true
    }
  },

  methods: {
    targetFinished (item) {
      item.isFinished = !item.isFinished

    },

    addNew () {
      //可以通过"this."的方式访问data里的数据
      this.items.push({
        label: this.newItem,
        isFinished: false
      }),
      this.newItem = ''
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  color: #67B8DE;
  font-size: 150%;
}

.finished {
  text-decoration: line-through;
  color: #bbb;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
