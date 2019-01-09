import React from 'react'
import { anecCreation } from './../reducers/anecdoteReducer'
import { createNotif } from './../reducers/notificationReducer'
import { nullNotif } from './../reducers/notificationReducer'
import { connect } from 'react-redux'


class AnecdoteForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    if (content.length === 0) {
      return
    }
    this.props.anecCreation(content)
    this.props.createNotif(content)
    e.target.anecdote.value = ''
    setTimeout( () => {
      this.props.nullNotif()
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <div><button>create</button></div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  anecCreation,
  createNotif,
  nullNotif
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)


export default ConnectedAnecdoteForm
