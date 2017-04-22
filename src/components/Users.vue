<template>
  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name"/>
      <br>
      <input type="text" v-model="newUser.email" placeholder="Enter Email"/>
      <br>
      <input type="submit" value="Submit"/>
    </form>
    
    <ul>
        <li v-for="user in users"> 
          <input type="checkbox" class="toggle" v-model="user.contacted">
          <span :class="{contacted: user.contacted}">
            {{user.name}} : {{user.email}} 
            <button v-on:click="deleteUser(user)">x</button>
            <!-- v-on 的簡寫
            <button @click="deleteUser(user)">x</button>
            -->
          </span>
      </li> 
    </ul>
    <test-components></test-components>
  </div>
</template>

<script>
  // 局部註冊 只有在users 這個component下才可以使用這個Child component，其他component無法單獨使用Child component!
  const Child = {
    template: '<div>A custom component!</div>'
  }
  // 全域註冊
  export default {
    name: 'users',
    components: {
      'test-components': Child
    },
    data () {
      return {
        newUser: {},
        users: []
      }
    },
    methods: {
      addUser: function (e) {
        e.preventDefault()
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        })
      },
      deleteUser: function (user) {
        this.users.splice(this.users.indexOf(user), 1)
      }
    },
    created: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function (res) {
          this.users = res.data
        })
    }
  }
</script>

<style lang="scss" scoped>
  .contacted {
    text-decoration: line-through;
  }
</style>