import axios from 'axios'

const BASE_URL_API = 'https://rickandmortyapi.com/api/'

export const getCharacters = async (page) => {
  const response = await axios.get(BASE_URL_API + 'character/?page=' + page)
  console.log(BASE_URL_API + 'character')
  return response.data.results
}

export const searchCharacter= async(name) => {
  const response = await axios.get(BASE_URL_API + 'character/?name='+name)
  console.log(response.data)
  return response.data.results
}

export const getCharacter=async(id) => {
  const response = await axios.get(BASE_URL_API+'character/'+id)

  return response.data
}