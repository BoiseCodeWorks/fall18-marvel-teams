import MarvelService from "./MarvelService.js";

//PRIVATE
let _ms = new MarvelService()

//draws heros from either Marvel API request or local array
function drawMarvelHeros(heroArr) {
  console.log(5)
  let template = ''
  heroArr.forEach(hero => {
    let button = `
    <button class="btn btn-success" onclick="app.controllers.marvelCtrl.addHero(${hero.id})">ADD</button>
    `
    template += hero.getHeroCard(button)
  });
  document.getElementById("marvel-heros").innerHTML = template
}

//gets and draws characters from local array
function drawMyTeam() {
  let heroArr = _ms.getMyTeam()
  let template = ''
  heroArr.forEach(hero => {
    let button = `
    <button class="btn btn-danger" onclick="app.controllers.marvelCtrl.removeHero(${hero.id})">REMOVE</button>
    `
    template += hero.getHeroCard(button)
  });
  document.getElementById("my-team").innerHTML = template
}

export default class MarvelController {
  constructor() {
    console.log(2)
    //fires off inital request to the API
    _ms.getMarvelHeros(drawMarvelHeros)
  }
  addHero(id) {
    debugger
    _ms.addHero(id)
    drawMyTeam()
    let marvelHeros = _ms.getMarvelLocalHeros()
    drawMarvelHeros(marvelHeros)
  }
  removeHero(id) {
    _ms.removeHero(id)
    drawMyTeam()
    let marvelHeros = _ms.getMarvelLocalHeros()
    drawMarvelHeros(marvelHeros)
  }
  //modifyOffset(num)
  //_ms.modifyOffset(num)
  //_ms.getMarvelHeros(drawMarvelHeros)

}