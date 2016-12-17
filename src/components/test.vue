<template>
  <div class="test">
    <input type="text" v-model="title"/><br />
    <h1>{{title}}</h1>
    <p v-if="showName">{{user.first_name}}</p>
    <p v-else="showName">No one</p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <button v-on:click="greet('Hello there')">Say Greeting</button>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="hitEnter">
    <hr>
    <label for="" >First Name</label>
    <input type="text" v-model="user.first_name"/> 
    <label for="">Last Name</label>
    <input type="text" v-model="user.last_name"/>
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'Foobar'
      }
    },
    data () {
      return {
        title: 'Hello World',
        user: {
          first_name: 'Albert',
          last_name: 'Fang'
        },
        showName: true,
        items: [
          {title: 'item one'},
          {title: 'item two'},
          {title: 'item three'}
        ]
      }
    },
    methods: {
      greet: function (greeting) {
        console.log(greeting)
      },
      pressKey: function () {
        console.log('presskey')
      },
      hitEnter: function () {
        console.log('you hit enter')
      }
    },
    computed: {
      fullName: function () {
        return `${this.user.first_name} ${this.user.last_name}`
      }
    }
  }
</script>

<style scoped>

</style>