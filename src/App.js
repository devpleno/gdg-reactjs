import React, { Component } from 'react'
import rebase from './rebase'

import Messages from './Messages'
import NewMessage from './NewMessage'

class App extends Component {
  constructor (props) {
    super(props)
    this.postNewMessage = this.postNewMessage.bind(this)

    this.state = {
      messages: {}
    }
    rebase.syncState(`messages`, {
      context: this,
      state: 'messages',
      asArray: false
    })
  }

  postNewMessage (messageField) {
    const messages = { ...this.state.messages }
    const newMessage = { id: Date.now(), contents: messageField.value, when: Date.now() }
    messages[`msg${Date.now()}`] = newMessage
    this.setState({ messages })
    messageField.value = ''
  }
  render () {
    return (
      <div className='container'>
        <Messages messages={this.state.messages} />
        <NewMessage postNewMessage={this.postNewMessage} />
      </div>
    )
  }
}

export default App
