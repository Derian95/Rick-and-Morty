import axios from 'axios'

const BASE_URL_API = 'https://rickandmortyapi.com/api/'

export const getCharacters = async (page) => {
    const response = await axios.get(BASE_URL_API + 'character/?page=' + page)
    console.log(BASE_URL_API + 'character')
    return response.data.results
}

export const searchCharacter = async (name) => {
    try {
        const response = await axios.get(
            BASE_URL_API + 'character/?name=' + name
        )

        return response.data.results
    } catch (error) {
        return 'error'
    }
}
export const getCharacter = async (id) => {
    try {
        const response = await axios.get(BASE_URL_API + 'character/' + id)
        console.log(response)

        return response.data
    } catch (error) {
        return 'error'
    }
}

export const getEpisodes = async (page) => {
    const response = await axios.get(BASE_URL_API + '/episode/?page='+page)
    return response.data
}

export const getEpisode = async (id) => {
    const response = await axios.get(BASE_URL_API + '/episode/' + id)
    const promises = response.data.characters.map((chart) => {
        return getCharacterEpisode(chart)
    })

    const responseCharacter = await Promise.all(promises)

    return responseCharacter
}

const getCharacterEpisode = async (url) => {
    try {
        const response = await axios.get(url)

        return response.data
    } catch (error) {
        return 'error'
    }
}
