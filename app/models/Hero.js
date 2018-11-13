export default class Hero {
  constructor(data) {
    this.name = data.name
    this.id = data.id
    this.img = data.thumbnail.path + "." + data.thumbnail.extension
    this.description = data.description || "No Description Found"
  }
  getHeroCard(button) {
    return `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${this.img}" />
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">${this.description}</p>
            ${button}
          </div>
        </div>
      </div>
    `
  }
}
