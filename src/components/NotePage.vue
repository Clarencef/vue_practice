<template>
  <section class="note_page_container">
    <ToolBar></ToolBar>
    <NoteList></NoteList>
  </section>
</template>

<script>
import ToolBar from './ToolBar'
import NoteList from './NoteList'
export default {
  components: {
    ToolBar,
    NoteList
  }
}
</script>

<style lang="scss">
  .note_page_container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    height: calc( 100% - 100px);
  }
</style>
