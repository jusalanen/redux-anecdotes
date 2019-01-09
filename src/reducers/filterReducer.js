const initState = ''

const reducer = (state = initState, action) => {
  if (action.type === 'FILTER') {
    state = action.filter
    return state
  }
  return state
}

export const filterChange = (filter) => {
  return {
    type: 'FILTER',
    filter
  }
}

export default reducer