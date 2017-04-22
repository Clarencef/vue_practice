<template>
<div class="twitterVue">
  <h3 class="twitterVue-title">Compose New Tweet</h3>
  <div class="twitterVue-content">
    <textarea
      placeholder="Write your tweet here"
      rows="3"
      >
      {{tweet}}
    </textarea>
    <button
      class="twitterVue-button"
      :disabled='tweetIsEmpty'>Tweet</button>
  </div>
</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'twitterVue',
    computed: mapState({
      tweet: function () {
        return this.$store.state.tweet
      },
      tweetIsEmpty: function () {
        return this.$store.state.tweet.length === 0
      }
    })
  }

</script>

<style lang="scss">
.twitterVue {
  margin: 15px auto;
  width: 100%;
  max-width: 600px;
  border: 1px solid lighten(#6a737b,20%);
  border-radius: 3px;
  .twitterVue-title {
    margin: 0;
    line-height: 2;
    color: #8A99A4;
  }
  .twitterVue-content {
    width: 100%;
    padding: 16px;
    background: #ECF7F5;
    border-top: 1px solid #CDECE6;
    overflow: hidden;
    textarea {
      width: 100%;
      border-radius: 3px;
      border: 1px solid #CDECE6;
    }
  }
  .twitterVue-button {
    margin-top: 16px;
    background: #6AC3AD;
    padding: 8px 16px;
    color: white;
    boder-radius: 3px;
    float: right;
    &:disabled {
      opacity: .5;
    }
  }
}

</style>
