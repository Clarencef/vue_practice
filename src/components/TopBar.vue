<template>
  <header class="header">
    <div class="header-top">
      <ul class="header-top-left">
        <li class="header-top-item">花蓮</li>
        <li class="header-top-item">台北</li>
        <li class="header-top-item">台東</li>
        <li class="header-top-item">高雄</li>
      </ul>
      <div class="header-top-right">
        <div class="header-top-item">登入</div>
        <div class="header-top-item">註冊</div>
        <div class="header-top-item">user</div>
      </div>
    </div>
    <div class="header-bottom">
      <router-link to ="/">
        <img class="logo" src='../assets/bulldog.svg'/>
      </router-link>
      <nav class="site-nav">
        <ul>
          <li><router-link to ="/user">Users</router-link></li>
          <li><router-link to ="/test">Test</router-link></li>
          <li><router-link to ="/crud">Crud</router-link></li>
          <li><router-link to ="/twitter">Twitter</router-link></li>
          <li><router-link to ="/note">Note</router-link></li>
        </ul>
      </nav>
      <div class="site-search">
        <input type="text">
        <button type="submit">
          <icon name="search"></icon>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'topBar'
}
</script>

<style lang="scss">
@import '../assets/styles/main.scss';

.header {
  background: black;
  font-size: 13px;
  .logo {
    margin-left: 60px;
    @include box(48px);
  }
  .header-top {
    display: flex;
    align-items: center;
    color: white;
    height: 42px;
  }
  .header-top-left,
  .header-top-right {
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
  }
  .header-top-right {
    justify-content: flex-end;
  }
  .header-top-item {
    padding: 0 20px;
    border-right: 1px solid white;
    &:last-child {
      border: 0;
    }
  }
  .header-bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: white;
    color: black;
    height: 100px;
    .site-nav,
    .site-search, {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1 0 auto;
    }
    .site-search {
      justify-content: flex-end;
      padding-right: 16px;
      button {
        @include box(48px);
        border: 1px solid #616161;
      }
    }
    li {
      display: inline-block;
      border: 1px solid #ffffff;
      padding: 8px;
      margin: 0 15px;
      font-weight: bolder;
    }
    a {
      color: black;
    }
    input {
      width: 223px;
      height: 48px;
      background: white;
    }
  }
}
</style>
