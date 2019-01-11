import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  const resp = await axios.post(url, { content, votes: 0 })
  return resp.data
}

const voteAnec = async (voted) => {
  const strPut = url.concat('/', voted.id)
  const resp = await axios.put(strPut, { ...voted, votes: voted.votes + 1 })
  return resp.data
}

export default { getAll, createNew, voteAnec }