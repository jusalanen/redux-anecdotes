import React from 'react'
import anecdoteReducer from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'
import notificationReducer from '../reducers/notificationReducer'


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

  handleVote = (id, text) => {
    const anec = text.toString()
    this.props.store.dispatch(
      anecdoteReducer.actionFor.aVoting(id),
      notificationReducer.actionFor.aVoting(anec)
    )
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    const anecdotes = [].concat(this.props.store.getState().anecdotes)
    console.log(anecdotes)
    const filteredAnec = anecdotes.filter(anec => {
      return anec.content.toLowerCase()
        .includes(this.state.filter.toLowerCase())
    })

    return (
      <div>
        <h2>Anecdotes</h2>
        <div>
          filter: <input value={this.state.filter}
            onChange={this.handleFilterChange}/>
        </div>
        <br></br>
        {filteredAnec.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes} votes <button onClick={() => {
                this.handleVote(anecdote.id, anecdote.content)
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
