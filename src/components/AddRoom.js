import React, { Component } from 'react'

class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addItem(this.state.text)
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input 
            type="text"
            value={this.state.text}
            onChange={e => this.setState({ text: e.target.value })}
          />
          <button type="submit">+</button>
        </form>
      </div>
    )
  }
}

export default AddForm
