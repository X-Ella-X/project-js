import enquirer from "enquirer";
import showTitel from "../../index.js";
import nextQuestion from "../nextQuestion.js";
const fiftyFifty = (spieler, jocker) => {
  //   console.log(jocker.frage.fiftyFifty);
  const data = enquirer.scale({
    name: "experience",
    message: `${spieler.name}, Die 2 Antworten sind `,
    scale: jocker.frage.fiftyFifty,
    /* [ */
    //   { name: "a", message: "50/50" },
    //   { name: "b", message: "Klasse" },
    //   { name: "c", message: "Google" },
    // ],
    margin: [0, 0, 0, 0],
    choices: [
      {
        name: "answer",
        message: "Wähle Antwort",
        initial: 0,
      },
    ],
  });
  data.then((x) => {
    jocker.jockerListe.fiftyFifty = false;
    if (x.answer === 0) {
      nextQuestion(spieler, jocker);
    } else {
      console.log("Leider Falsch!!!");
    }
  });
};
export default fiftyFifty;
