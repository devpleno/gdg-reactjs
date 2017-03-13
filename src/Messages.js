import React, { Component } from 'react'

class Messages extends Component {
  renderMessage (message) {
    return (<div className='well' key={message.id}>{message.content} - {message.when}</div>)
  }
  render () {
    return (<div className='well'>
      <h1>Messages</h1>
      {Object.keys(this.props.messages).map((key) => this.props.messages[key]).map(this.renderMessage)}
    </div>)
  }
}

export default Messages
