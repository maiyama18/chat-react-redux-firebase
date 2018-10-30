import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import AddForm from './AddRoom'

const RoomList = ({ auth, rooms, firestore }) => {
  const addRoom = text => firestore.add({
    collection: 'rooms',
  }, {
    name: text,
    currentMembers: [{
      id: auth.uid,
      displayName: auth.displayName,
    }],
  })

  return (
    <div>
      <AddForm addItem={addRoom}/>
      {rooms.map(room => (
        <div key={room.id}>
          <h4>{room.name}</h4>
          <ul>
            {room.currentMembers.map(member => (
              <li key={member.id}>{member.displayName}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    rooms: state.firestore.ordered.rooms || [],
  }
}
const mapDispatchToProps = {}

export default compose(
  firestoreConnect([
    { collection: 'rooms' },
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(RoomList)