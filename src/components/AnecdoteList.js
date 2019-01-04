import React from 'react'
import anecdoteReducer from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'
import notificationReducer from '../reducers/notificationReducer'
import Filter from './Filter'

class AnecdoteList extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  handleVote = (id, anecdotes) => {
    //const anec = text.toString()
    const anec = anecdotes.find( a => a.id === id)
    this.props.store.dispatch(
      anecdoteReducer.actionFor.aVoting(id, anec.content),
      notificationReducer.actionFor.vote(id, anec.content))
    setTimeout( () => {
      this.props.store.dispatch(
        notificationReducer.actionFor.nullNotif())
    }, 5000)
  }

  render() {
    const anecdotes = [].concat(this.props.store.getState().anecdotes)
    console.log(anecdotes)
    const filteredAnec = anecdotes.filter(anec => {
      return anec.content.toLowerCase()
        .includes(this.props.store.getState().filter.toLowerCase())
    })

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={this.props.store} />
        <br></br>
        {filteredAnec.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes} votes <button onClick={() => {
                this.handleVote(anecdote.id, anecdotes)
              }}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
