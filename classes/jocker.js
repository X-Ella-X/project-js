import chalk from "chalk";

class Jocker {
  constructor({ name, mama, tel }) {
    this.name = name;
    this.mama = mama;
    this.tel = tel;
    this.jockerListe = {
      fiftyFifty: true,
      gruppe: true,
      mama: true,
    };
    this.frage = {};
  }
  rufMamaAn() {
    return ``;
  }
  showJockerListe() {
    return `
      ${this.jockerListe.fiftyFifty ? chalk.green("50/50") : chalk.red("50/50")}
      ${
        this.jockerListe.gruppe
          ? chalk.green("Frag die Gruppe")
          : chalk.red("Frag die Gruppe")
      }
      ${
        this.jockerListe.mama
          ? chalk.green("Ruf Mama an")
          : chalk.red("Ruf Mama an")
      }

    `;
  }
}

export default Jocker;
