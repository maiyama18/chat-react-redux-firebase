import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import AddForm from './AddRoom'

const Room = ({ auth, room, messages, firestore }) => {
  const addMessage = text => firestore.add({
    collection: 'rooms',
    doc: room.id,
    subcollections: [{
      collection: 'messages',
    }],
  }, {
    by: auth,
    content: text,
  })

  const Messages = () => {
    if (!isLoaded(messages)) {
      return (
        <h4>...loading...</h4>
      )
    }

    return (
      <ul>
        {messages.map(message => (
          <li key={message.id}>[{message.by.displayName}] {message.content}</li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      {
        room
          ? (
            <div>
              <AddForm addItem={addMessage} />
              <h2>{room.name}</h2>
              <Messages />
            </div>
          ) 
          : 'Select room!'
      } 
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    room: state.room.selectedRoom,
    messages: state.firestore.ordered.messages || [],
  }
}
const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    if (!props.room) return []
    
    return [{
      collection: 'rooms',
      doc: props.room.id,
      subcollections: [{
        collection: 'messages',
      }],
      storeAs: 'messages',
    }]})
)(Room)