import React, { Component } from 'react'
import Messages from './Messages'

import rebase from './rebase'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: {
        1: {
          id: 1,
          content: 'opa, legal',
          when: Date.now()
        },
        2: {
          id: 2,
          content: 'opa, legal',
          when: Date.now()
        }
      }
    }
    rebase.syncState(`messages`, {
      context: this,
      state: 'messages',
      asArray: false
    })

  }

  postNewMessage (messageField) {
    const messages = { ...this.state.messages }
    const newMessage = { id: Date.now(), content: messageField.value, when: Date.now() }
    messages[`msg${Date.now()}`] = newMessage
    this.setState({ messages })
    messageField.value = ''
  }
  render () {
    return (
      <div className='container'>
        <Messages messages={this.state.messages} />
        <div className='well'>
          <textarea className='form-control' ref='message' />
          <button type='button' className='btn btn-lg' onClick={() => this.postNewMessage(this.refs.message)}>ENVIAR</button>
        </div>
      </div>
    )
  }
}

export default App
