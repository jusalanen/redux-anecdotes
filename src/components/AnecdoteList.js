import React from 'react'
import { anecVoting } from './../reducers/anecdoteReducer'
import { voteNotif } from './../reducers/notificationReducer'
import { nullNotif } from './../reducers/notificationReducer'
import Filter from './Filter'
import { connect } from 'react-redux'


class AnecdoteList extends React.Component {

  handleVote = (anecdote) => {
    this.props.anecVoting(anecdote.id)
    this.props.voteNotif(anecdote.content)
    setTimeout( () => {
      this.props.nullNotif()
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
                this.handleVote(anecdote)
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
  anecVoting,
  voteNotif,
  nullNotif
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)


export default ConnectedAnecdoteList
