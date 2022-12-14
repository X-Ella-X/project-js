import chalk from "chalk";

class Jocker {
  constructor({ name }) {
    this.name = name;
    this.jockerListe = {
      fiftyFifty: true,
      gruppe: true,
      google: true,
    };
    this.frage = {};
  }

  generateJockerAuswahl() {
    const result = [];
    let counter = 0;
    for (const key in this.jockerListe) {
      counter++;
      if (this.jockerListe[key]) {
        result.push({ name: `${counter}`, message: key });
      }
    }
    return result;
  }
  fragGoogle() {
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
        this.jockerListe.google
          ? chalk.green("Frag Google")
          : chalk.red("Frag Google")
      }

    `;
  }
}

export default Jocker;
