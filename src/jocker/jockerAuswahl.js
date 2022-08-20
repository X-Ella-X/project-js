import enquirer from "enquirer";
import fiftyFifty from "./fiftyFifty.js";
import klasseDci from "./klasseDci.js";
import google from "./google.js";
const jockerAuswahl = (spieler, jocker) => {
  const data = enquirer.scale({
    name: "experience",
    message: `${
      spieler.name
    }, wähle ein verfühgbaren Jocker ${jocker.showJockerListe()}`,
    scale: jocker.generateJockerAuswahl(),
    margin: [0, 0, 0, 0],
    choices: [
      {
        name: "answer",
        message: "Wähle Jocker",
        initial: 0,
      },
    ],
  });
  data
    .then((x) => jocker.generateJockerAuswahl()[x.answer])
    .then(({ message }) => {
      jocker.jockerListe[message] = false;
      switch (message) {
        case "fiftyFifty":
          fiftyFifty(spieler, jocker);
          break;
        case "gruppe":
          klasseDci(spieler, jocker);
          break;
        case "google":
          google(spieler, jocker);
          break;
      }
    });
};

export default jockerAuswahl;
