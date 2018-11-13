import Hero from "../models/Hero.js";

let _marvelAPI = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/'
})
let _apiKey = '&apikey=53496df3cd682930aa9108759e347171'
// let offset = 0
let _characters = 'characters?limit=100'

let _myMarvelHeros = []
let _myTeam = []

export default class MarvelService {
  constructor() {
    console.log('1')
  }
  //Returns a Copy of _myTeam
  getMyTeam() {
    return _myTeam
  }
  //Calls MarvelAPI for data
  getMarvelHeros(draw) {
    console.log(3)
    let requestString = _characters + _apiKey
    // if (offset) {
    //   requestString+= '&offset='+offset
    // }
    _marvelAPI.get(requestString)
      .then(res => {
        console.log(4)
        let unmappedHeros = res.data.data.results
        _myMarvelHeros = unmappedHeros.map(hData => new Hero(hData))
        draw(_myMarvelHeros)
      })
      .catch(err => {
        console.log(4)
        console.error(err)
      })
  }
  //Adds
  addHero(id) {
    let newTeammate = _myMarvelHeros.find(hero => hero.id == id)
    if (!newTeammate) { return }
    _myTeam.push(newTeammate)
    _myMarvelHeros.splice(_myMarvelHeros.indexOf(newTeammate), 1)
  }
  removeHero(id) {
    let oldTeammate = _myTeam.find(hero => hero.id == id)
    _myMarvelHeros.push(oldTeammate)
    _myTeam.splice(_myTeam.indexOf(oldTeammate), 1)
  }
  getMarvelLocalHeros() {
    return _myMarvelHeros
  }
  //modifyOffset(num)
}