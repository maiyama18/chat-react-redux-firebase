import React from 'react'
import AuthButton from './AuthButton'

const Header = () => {
  return (
    <div style={{ borderBottom: 'black 1pt solid' }}>
      <h1>Chat on Firebase</h1>
      <AuthButton />
    </div>
  )
}

export default Header