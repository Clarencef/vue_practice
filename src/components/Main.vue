<template>
  <main>
    <img class="hero-image" src="../assets/hero.jpg" />
    <img class="hero-image" src="../assets/hero2.jpg" />
    <div class="main-side-nav">
      <ul>
        <li :class="{'active': whichActive === '1'}">
          <a href="#" @click='toggleBlock' data-index="1"></a>
        </li>
        <li :class="{'active': whichActive === '2'}">
          <a href="#" @click='toggleBlock' data-index="2"></a>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        whichActive: '1'
      }
    },
    methods: {
      toggleBlock: function (e) {
        this.whichActive = e.target.dataset.index
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
  .hero-image {
    max-width: 100%;
  }
  .main-side-nav {
    position: fixed;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
    ul {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    li {
      background: #212121;
      border-radius: 50%;
      margin-bottom: 16px;
      &.active {
        transition: 0.5s;
        @include box(12px);
        background: transparent;
        border: 2px solid #212121;
      }
      a {
        @include box(8px);
        display: block;
      }
    }
  }

</style>
