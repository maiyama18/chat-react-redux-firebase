import React from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import AddForm from './AddRoom'
import { selectRoom } from '../redux/room'

const RoomList = ({ rooms, firestore, selectRoom }) => {
  const addRoom = text => firestore.add({
    collection: 'rooms',
  }, {
    name: text,
  })

  return (
    <div>
      <AddForm addItem={addRoom}/>
      {rooms.map(room => (
        <div key={room.id}>
          <h4 onClick={() => selectRoom(room)}>{room.name}</h4>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    rooms: state.firestore.ordered.rooms || [],
  }
}
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    selectRoom,
  }, dispatch),
})

export default compose(
  firestoreConnect([
    { collection: 'rooms' },
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(RoomList)