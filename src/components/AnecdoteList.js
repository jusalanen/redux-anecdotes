import React from 'react'
import { actionFor } from '../reducers/anecdoteReducer'
import { action } from '../reducers/notificationReducer'
import Filter from './Filter'
import { connect } from 'react-redux'


class AnecdoteList extends React.Component {
  /*static propTypes = {
    store: PropTypes.object.isRequired
  }*/

  handleVote = (id, anecdotes) => {
    const anec = anecdotes.find( a => a.id === id)
    actionFor.aVoting(id, anec.content)
    action.vote(id, anec.content)
    setTimeout( () => {
      action.nullNotif()
    }, 5000)
  }

  render() {
    const { anecdotes,  filter } = this.props
    console.log(anecdotes)
    const filteredAnec = anecdotes.filter((anec) => {
      return anec.content.toLowerCase()
        .includes(filter.toLowerCase())
    })

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    //notification: state.notification,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  actionFor,
  action
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)


export default ConnectedAnecdoteList
