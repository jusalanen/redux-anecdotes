
const initState = ''

const reducer = (state = initState, action) => {
  if (action.type === 'VOTE') {
    console.log(action.content)
    state = action.content
    return state
  }
  if (action.type === 'NOTIFICATE') {
    console.log(action.content)
    state = '' + action.content
    return state
  }
  if (action.type === 'NULL') {
    state = initState
    return state
  }
  return state
}

const actionFor = {
  notificate(content) {
    return {
      type: 'NOTIFICATE',
      content
    }
  },
  nullNotif() {
    return {
      type: 'NULL'
    }
  }
}
export default { reducer, actionFor }