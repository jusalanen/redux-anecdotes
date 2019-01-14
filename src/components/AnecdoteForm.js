import React from 'react'
import { anecCreation } from './../reducers/anecdoteReducer'
import { createNotif, nullNotif } from './../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'


class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    if (content.length === 0) {
      return
    }
    const newAnec = await anecdoteService
      .createNew(content)
    this.props.anecCreation(newAnec)
    this.props.createNotif(content)
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
