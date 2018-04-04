<template>
  <div id="app">
    <Initialize />
    <ConversationContainer
      v-for="id in convoIds"
      :conversation="conversations[id]"
      :id="id"
      :key="id"
    />
  </div>
</template>

<script>
  import Initialize from './components/InitializeData'
  import ConversationContainer from './components/ConversationContainer'
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    created () {
      console.log(this.$store.state.db)
    },
    components: {
      Initialize,
      ConversationContainer
    },
    computed: {
      ...mapState({
        conversations: state => state.conversations.all,
        convoIds: state => state.conversations.allIds
      })
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
