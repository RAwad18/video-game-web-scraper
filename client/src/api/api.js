// This is where are the functions that make calls to the backend are defined
import axios from 'axios'

const url = "http://localhost:8080/search/"

const instance = axios.create({
    baseURL: "http://localhost:8080/search",
    timeout: 10000,
})

export const getGames = (query) => instance.get('/', {params: {q: query}})