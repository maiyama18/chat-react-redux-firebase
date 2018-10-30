import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

const AuthButton = ({ auth, firebase }) => {
  if (!isLoaded(auth)) return null

  if (isEmpty(auth)) {
    return (
      <div>
        <button 
          onClick={() => firebase.login({ provider: 'github', type: 'popup' })}
        >Log in</button>
      </div>
    )
  }

  return (
    <div>
      <img src={auth.photoURL} alt={auth.displayName} style={{ width: '2rem' }}/>
      <button
        onClick={() => firebase.logout()}
      >Log out</button>
    </div>    
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  }
}
const mapDispatchToProps = {}

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(AuthButton)