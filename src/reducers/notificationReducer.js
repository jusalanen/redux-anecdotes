
const initState = ''

const reducer = (state = initState, action) => {

  if (action.type === 'CREANOT') {
    state = 'You added: "' + action.content + '"'
    return state
  }
  if (action.type === 'VOTENOT') {
    state = 'You voted: "'+ action.content + '"'
    return state
  }
  if (action.type === 'NULL') {
    state = initState
    return state
  }
  return state
}

export const createNotif = (content) => {
  return {
    type: 'CREANOT',
    content
  }
}

export const voteNotif = (content) => {
  return {
    type: 'VOTENOT',
    content
  }
}

export const nullNotif = () => {
  return {
    type: 'NULL'
  }
}

export default reducer