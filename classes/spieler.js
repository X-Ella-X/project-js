import fragenDB from "../data/fragenDB.js";

class Spieler {
  constructor({ name }) {
    this.name = name;
    this.darfSpielen = true;
    this.listQuestion = Object.keys(fragenDB).slice(0, -1);
  }
  info() {
    return `${this.name}`;
  }
}

export default Spieler;
