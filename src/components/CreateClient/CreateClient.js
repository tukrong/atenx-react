import React, { Component } from 'react'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'

export default class CreateClient extends Component {
  constructor (props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      fullname: ''
    }
  }

  onChangeName (event) {
    this.setState({
      fullname: event.target.value
    })
  }

  onSubmit (event) {
    event.preventDefault()

    const { msgAlert } = this.props
    const client = {
      fullname: this.state.fullname
    }
    console.log(client)
    axios.post('http://localhost:4741/create-client', client)
      .then(res => console.log(res.data))
      .then(() => msgAlert({
        heading: 'Client Added',
        message: messages.onCreateClientSuccess,
        variant: 'success'
      }))
      .catch(console.error)

    this.setState({
      fullname: ''
    })
  }

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value })
  // }

  render () {
    return (
      <div>
        <h3>Create New Client</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Fullname: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.fullname}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Client" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
