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
    <button @click="add">click</button>
    <div>{{count}}</div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
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
    computed: mapState({
      fullName: function () {
        return `${this.user.first_name} ${this.user.last_name}`
      },
      // directly to get store
      // anotherGetter () {
      //   return  this.$store.state.count
      // },
      // get store by vuex provide method
      // why we need mapState to get state to us
      // because use mapState we can get mutiple state without re-declare in computed property
      count: function () {
        return this.$store.state.count
      }
    }),
    methods: {
      greet: function (greeting) {
        console.log(greeting)
      },
      pressKey: function () {
        console.log('presskey')
      },
      hitEnter: function () {
        console.log('you hit enter')
      },
      add: function () {
        this.increment({ amount: 10 })
      },
      ...mapMutations([
        'increment'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
