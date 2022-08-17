import fragenDB from "../data/fragenDB.js";

class Spieler {
  #gewonneneSumme;
  constructor({ name, mama, tel }) {
    this.name = name;
    this.mama = mama;
    this.tel = tel;
    this.#gewonneneSumme = 0;
    this.darfSpielen = true;
    this.listQuestion = Object.keys(fragenDB).slice(0, -1);
  }
  info() {
    return `${this.name}, ${this.mama},${this.tel}`;
  }
  set setGewinn(zahl) {
    this.#gewonneneSumme += zahl;
  }
  get getGewinn() {
    return this.#gewonneneSumme;
  }
}

export default Spieler;
