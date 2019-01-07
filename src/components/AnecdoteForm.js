import React from 'react'
import { actionFor } from '../reducers/anecdoteReducer'
import { action } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


class AnecdoteForm extends React.Component {
  /*static propTypes = {
    store: PropTypes.object.isRequired
  }*/

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.actionFor.aCreation(content)
    this.props.action.create(content)
    e.target.anecdote.value = ''
    setTimeout( () => {
      action.nullNotif()
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
  actionFor,
  action
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)


export default ConnectedAnecdoteForm
