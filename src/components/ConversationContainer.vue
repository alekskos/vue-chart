<template>
  <div>
    <h2>Conversation ID: {{ id }}</h2>
    <Message
      v-for="message in conversation.message"
      :message="message"
      :key="message.created"
    />
  </div>
</template>

<script>
  import Message from './Message'
  import { mapState } from 'vuex'
  export default {
    name: 'ConversationContainer',
    props: {
      conversation: {
        type: Object,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    },
    created () {
      this.$store.state.db.collection('conversations').doc(this.id).onSnapshot(convo => {
        let source = convo.metadata.hasPendingWrites ? 'Local' : 'Server'
        console.log(`Source: ${source}`)
        if (convo && convo.data()) {
          convo.data().messages.forEach(message => this.$store.commit('conversations/ADD_MESSAGE', {
            conversationId: this.id, message })
          )
        }
      })
    },
    components: {
      Message
    }
  }
</script>
