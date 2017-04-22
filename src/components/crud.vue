<template>
  <div>
    <h1></h1>
    <h3></h3>
    <form>
      <div>
        <input name="title" type="text" placeholder="title" />
      </div>
      <div>
        <input name="year" type="text" placeholder="year" />
      </div>
      <div>
        <input name="author" type="text" placeholder="author" />
      </div>
      <div>
        <label for="read"></label>
        <input id="read" name="read" type="text">
      </div>
      <button>Update</button>
      <button>Add</button>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'Crud',
    data () {
      return {
        title: 'My Books Manager',
        updating: false,
        book: {
          title: '',
          year: '',
          author: '',
          read: false
        }
      }
    }
  }
</script>
<style lang="scss">

</style>