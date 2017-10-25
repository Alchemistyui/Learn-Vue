<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew()">
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="targetFinished(item)">
        {{item.label}}
      </li>
    </ul>

  </div>
</template>

<script>
import Store from './store'

export default {
  data () {
    return {
      title: 'Alchemist\'s list', 
      items: Store.fetch(),
      newItem: ''
    }
  },
  watch: {
    items: {
      handler (items) {
        Store.save(items)
      },
      deep: true
    }
  },

  methods: {
    targetFinished (item) {
      item.isFinished = !item.isFinished

    },

    addNew () {
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
.finished {
  text-decoration: underline;
  color: #67B8DE;
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
