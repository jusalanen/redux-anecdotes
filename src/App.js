import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import PropTypes from 'prop-types'


class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    //const anecdotes = this.state.store.getState()
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification />
        <AnecdoteList store={this.props.store} />
        <AnecdoteForm store={this.props.store} />
      </div>
    )
  }
}

export default App