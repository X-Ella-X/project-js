import enquirer from "enquirer";
import nextQuestion from "../nextQuestion.js";
const fiftyFifty = (spieler, jocker) => {
  //   console.log(jocker.frage.fiftyFifty);
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
  data.then((x) => {
    jocker.jockerListe.fiftyFifty = false;
    if (x.answer === 0) {
      nextQuestion(spieler, jocker);
    } else {
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
