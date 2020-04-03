import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

class CreateExercise extends Component {
  constructor (props) {
    super(props)
    this.myRef = React.createRef()

    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeAge = this.onChangeAge.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeDuration = this.onChangeDuration.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      fullname: '',
      age: 0,
      description: '',
      duration: 0,
      date: new Date()
    }
  }

  // componentDidMount () {
  //   axios.get('http://localhost:4741/clients')
  //     .then(response => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           clients: response.data.map(client => client.fullname),
  //           fullname: response.data[0].fullname
  //         })
  //       }
  //     })
  //     .catch()
  // }

  onChangeName (event) {
    this.setState({
      fullname: event.target.value
    })
  }

  onChangeAge (event) {
    this.setState({
      age: event.target.value
    })
  }

  onChangeDescription (event) {
    this.setState({
      description: event.target.value
    })
  }

  onChangeDuration (event) {
    this.setState({
      duration: event.target.value
    })
  }

  onChangeDate (date) {
    this.setState({
      date: date
    })
  }

  onSubmit (event) {
    event.preventDefault()

    const exercise = {
      fullname: this.state.fullname,
      age: this.state.age,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }
    console.log(exercise)

    axios.post('http://localhost:4741/create-exercise', exercise)
      .then(res => console.log(res.data))
      .catch(console.error)

    this.setState({
      fullname: '',
      age: 0,
      description: '',
      duration: 0,
      date: new Date(),
      clients: []
    })
  }

  render () {
    return (
      <div>
        <h3>New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <lable> Name: </lable>
            <input
              required
              className="form-control"
              value={this.state.fullname}
              onChange={this.onChangeName}>
            </input>
          </div>

          <div className="form-group">
            <lable>Age: </lable>
            <input type="text"
              required
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
            />

          </div>
          <div className="form-group">
            <lable>Description: </lable>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />

          </div>
          <div className="form-group">
            <lable>Duration (in minutes) </lable>
            <input type="text"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <lable>Date: </lable>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
// {
//    this.state.clients.map(clients => {
//      return <option
//        key={clients}
//        value={clients}>{clients}
//      </option>
//    })
//  }
export default CreateExercise
