import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

// const Exercise = props => (
//   <tr>
//     <td>{props.username}</td>
//     <td>{props.description}</td>
//     <td>{props.duration}</td>
//     <td>{props.date.substring(0, 10)}</td>
//     <td>
//       <Link to={'/edit/' + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
//     </td>
//   </tr>
// )

export default class ExerciseList extends Component {
  constructor (props) {
    super(props)

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { exercises: [] }
  }

  componentDidMount () {
    axios.get('http://localhost:4741/exercises')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch(console.error)
  }

  deleteExercise (id) {
    axios.delete('http://localhost:4741/exercises' + id)
      .then(res => console.log(res.data))
    this.setState({
      exercises: this.state.exercises.filter(element => element._id !== id)
    })
  }

  // exercisesList () {
  //   return this.state.exercises.map(currentexercise => {
  //     return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise}
  //       key={currentexercise._id}/>
  //   })
  // }

  render () {
    return (
      <div>
        <h3>Exercise logged</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}
