<template>
  <div class="message__container">
    <div :class="getPosition">
      {{ message.text }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      message: {
        type: Object,
        required: true
      }
    },
    computed: {
      getPosition () {
        if (this.message.sender === this.$store.state.users.currentUser) {
          return 'my message'
        } else {
          return 'message'
        }
      }
    }
  }
</script>

<style scoped>
  .my.message {
    text-align: right;
  }
  .message {
    text-align: left;
  }
  .message__container {
    margin: 0 auto;
    width: 20vw;
    border: 1px solid silver;
  }
</style>
