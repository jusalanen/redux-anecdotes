
const reducer = (store = [], action) => {
  if (action.type === 'VOTE') {
    const id = action.data.id
    const voted = store.find(a => a.id === id)
    const votedAnecdote = { ...voted, votes: voted.votes + 1 }

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

export const anecInit = (data) => {
  return {
    type: 'INIT',
    data
  }
}

export const anecCreation = (newAnec) => {
  return {
    type: 'CREATE',
    newAnec
  }
}

export const anecVoting = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export default reducer