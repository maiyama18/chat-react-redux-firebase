import React from 'react'
import { connect } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import RoomList from './RoomList'
import Room from './Room'

const Main = ({ auth }) => {
  if (!isLoaded(auth)) return null

  if (isEmpty(auth)) {
    return (
      <p>Hello! Please Log in</p>
    )
  }

  const harfDivStyle = {
    float: 'left',
    width: '50%',
  }

  return (
    <div>
      <div style={harfDivStyle}>
        <RoomList />
      </div>
      <div style={harfDivStyle}>
        <Room />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  }
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Main)