<template>
  <div>
    <button @click="init">Initialize</button>
    <button @click="getMsg">Get</button>
  </div>
</template>

<script>
  export default {
    name: 'InitializeData',
    methods: {
      init () {
        this.$store.dispatch('users/seed').catch(err => {
          console.log(err)
        })
        this.$store.dispatch('conversations/seed').catch(err => {
          console.log(err)
        })
      },
      getMsg () {
        this.$store.dispatch('users/getMsg')
        this.$store.dispatch('conversations/getMsg')
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
  button:focus,
  button:active {
    background: black;
    color: #fff;
  }
</style>
