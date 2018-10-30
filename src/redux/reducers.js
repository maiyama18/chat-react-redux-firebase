import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import roomReducer from './room'

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  room: roomReducer,
})