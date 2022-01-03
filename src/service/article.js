import axios from 'axios';
const apiKey = '68c9593c29ed4c00a598df585e322004'

export function getArtSearch(strArt){
    return axios.get(`https://newsapi.org/v2/everything?q=${strArt}&sortBy=popularity&apiKey=${apiKey}`)
}

export function getByCategory(ctg){
    return axios.get(`https://newsapi.org/v2/top-headlines/sources?q=$'israel'&category=${ctg}&apiKey=${apiKey}`)
}
export function getEverything(){
    return axios.get(`https://newsapi.org/v2/everything?q=test&apiKey=${apiKey}`)
}