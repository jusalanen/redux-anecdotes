import anecdoteReducer from './anecdoteReducer'

const initState = ''

const reducer = (state = initState, action) => {

  if (action.type === 'CREATE') {
    console.log(action.content)
    state = 'You added: "' + action.content + '"'
    return state
  }
  if (action.type === 'VOTE') {
    //const id = action.data.id
    //const voted = action.data.anecdotes.find(a => a.id === id)

    state = 'You voted: "'+ action.data.content + '"'
    return state
  }
  if (action.type === 'NULL') {
    state = initState
    return state
  }
  return state
}

const actionFor = {
  create(content) {
    return {
      type: 'CREATE',
      content
    }
  },
  vote(id, content) {
    console.log(content)
    return {
      type: 'VOTE',
      data: { id, content }
    }
  },
  nullNotif() {
    return {
      type: 'NULL'
    }
  }
}
export default { reducer, actionFor }