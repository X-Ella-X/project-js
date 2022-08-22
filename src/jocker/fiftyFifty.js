import enquirer from "enquirer";

import showTitel from "../../index.js";
import nextQuestion from "../nextQuestion.js";

const fiftyFifty = (spieler, jocker) => {
  const data = enquirer.scale({
    name: "experience",
    message: `${spieler.name}, Die 2 Antworten sind `,
    scale: jocker.frage.fiftyFifty,
    margin: [0, 0, 0, 0],
    choices: [
      {
        name: "answer",
        message: "Wähle Antwort",
        initial: 0,
      },
    ],
  });
  // sounds().play("./data/audio/suspense.mp3");

  data.then((x) => {
    jocker.jockerListe.fiftyFifty = false;
    if (x.answer === 0) {


      // sounds().play("./data/audio/correct.mp3");

      nextQuestion(spieler, jocker);
    } else {
      // sounds().play("./data/audio/wrong.mp3");
      spieler.darfSpielen = false;
      console.log(
        `Du hast ${
          jocker.frage.price >= 30000
            ? 30000
            : jocker.frage.price >= 1000
            ? 1000
            : 0
        } € gewonnen!`
      );
    }
  });
};
export default fiftyFifty;
