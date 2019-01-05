import React from 'react'
import actionFor from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'
import action from '../reducers/notificationReducer'
import { connect } from 'react-redux'


class AnecdoteForm extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    actionFor.aCreation(content),
    action.create(content)
    e.target.anecdote.value = ''
    setTimeout( () => {
      actionFor.nullNotif()
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification
  }
}

const mapDispatchToProps = {
  actionFor,
  action
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)


export default ConnectedAnecdoteForm
