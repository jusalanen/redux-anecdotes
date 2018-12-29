import React from 'react'
import anecdoteReducer from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'


class AnecdoteList extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    const anecdotes = [].concat(this.props.store.getState().anecdotes)
    console.log(anecdotes)
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes} votes <button onClick={() =>
                this.props.store.dispatch(
                  anecdoteReducer.actionFor.aVoting(anecdote.id)
                )}>
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
