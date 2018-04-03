<template>
  <div>
    <button @click="init">Initialize</button>
    <button @click="get">Get</button>
  </div>
</template>

<script>
  export default {
    name: 'InitializeData',
    methods: {
      init () {
        this.$store.dispatch('users/seed')
        this.$store.dispatch('conversations/seed')
      },
      get () {
      }
    }
  }
</script>

<style>
  button {
    font-size: 1.25rem;
    background: transparent;
    border: 2px solid black;
    padding: 12px 18px;
  }
</style>
