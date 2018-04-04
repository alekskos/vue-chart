<template>
  <div class="message__container">
    <div v-bind:class="getPosition">
      {{ message.text }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      type: Object,
      required: true
    },
    computed: {
      getPosition() {
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
  .message__container {
    border: 1px solid silver;
  }
</style>
