import React from 'react'
import anecdoteReducer from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'
import notificationReducer from '../reducers/notificationReducer'


class AnecdoteForm extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.store.dispatch(
      anecdoteReducer.actionFor.aCreation(content),
      notificationReducer.actionFor.create(content))
    e.target.anecdote.value = ''
    setTimeout( () => {
      this.props.store.dispatch(
        notificationReducer.actionFor.nullNotif())
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

export default AnecdoteForm
