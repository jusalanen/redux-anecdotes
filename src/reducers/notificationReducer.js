
const initState = ''

const reducer = (state = initState, action) => {

  if (action.type === 'CREATE') {
    state = 'You added: "' + action.content + '"'
    return state
  }
  if (action.type === 'VOTE') {
    state = 'You voted: "'+ action.data.content + '"'
    return state
  }
  if (action.type === 'NULL') {
    state = initState
    return state
  }
  return state
}

const action = {
  create(content) {
    return {
      type: 'CREATE',
      content
    }
  },
  vote(id, content) {
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
export default { reducer, action }