import anecdoteService from '../services/anecdotes'

const reducer = (store = [], action) => {
  if (action.type === 'VOTE') {
    const votedAnecdote = action.votedAnec
    const id = votedAnecdote.id

    return store.map(anec => anec.id !== id ? anec : votedAnecdote )
  }
  if (action.type === 'CREATE') {

    return [...store, action.newAnec]
  }
  if (action.type === 'INIT') {
    return action.data
  }

  return store
}

export const anecInit = () => {
  return async (dispatch) => {
    const anecs = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecs
    })
  }
}

export const anecCreation = (newAnec) => {
  return {
    type: 'CREATE',
    newAnec
  }
}

export const anecVoting = (votedAnec) => {
  return {
    type: 'VOTE',
    votedAnec
  }
}

export default reducer