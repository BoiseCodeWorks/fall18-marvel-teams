import MarvelController from "./components/MarvelController.js";

class App {
  constructor() {
    this.controllers = {
      marvelCtrl: new MarvelController()
    }
  }
}

window.app = new App()