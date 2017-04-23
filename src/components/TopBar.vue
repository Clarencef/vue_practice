<template>
  <header class="header">
    <nav>
      <ul>
        <li><router-link to ="/">Users</router-link></li>
        <li><router-link to ="/test">Test</router-link></li>
        <li><router-link to ="/crud">Crud</router-link></li>
        <li><router-link to ="/twitter">Twitter</router-link></li>
        <li><router-link to ="/note">Note</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'topBar'
}
</script>

<style lang="scss" scoped>
.header {
  background: #0099e5;
  padding: 16px;
  li {
    display: inline-block;
    border: 1px solid #ffffff;
    padding: 8px;
    margin: 0 15px;
  }
  a {
    color: white;
    text-decoration: none;
  }
}
</style>
