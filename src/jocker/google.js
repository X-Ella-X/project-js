import { createSpinner } from "nanospinner";
import enquirer from "enquirer";
import nextQuestion from "../nextQuestion.js";
import sounds from "../sounds.js";

const google = (spieler, jocker) => {
  const arr = [];
  for (let i = 120; i > 0; i--) {
    arr.push("" + i);
  }
  const spinner = createSpinner().start();
  spinner.update({
    text: `<= Sekunden übrig, hier nochmal die Frage: ${jocker.frage.frage}`,
    color: "white",
    stream: process.stdout,
    frames: arr,
    interval: 1000,
  });

  const time = setTimeout(() => {
    spinner.stop({ text: "Zeit ist um", mark: ":(", color: "red" });
  }, 119000);
  const stopMyTimeOut = () => clearTimeout(time);

  const data = enquirer.scale({
    name: "experience",
    message: `${spieler.name}, bitte beantworte die ${jocker.frage.price}€ Frage!  `,
    scale: [
      { name: "a", message: jocker.frage.antworten[0] },
      { name: "b", message: jocker.frage.antworten[1] },
      { name: "c", message: jocker.frage.antworten[2] },
      { name: "d", message: jocker.frage.antworten[3] },
    ],
    margin: [0, 0, 0, 0],
    choices: [
      {
        name: "answer",
        message: jocker.frage.frage,
        initial: 0,
      },
    ],
  });
  // sounds().play("./data/audio/suspense.mp3");
  data.then((x) => {
    stopMyTimeOut();
    spinner.stop();
    if (jocker.frage.checkAntwort(x.answer)) {
      // sounds().play("./data/audio/correct.mp3");
      jocker.jockerListe.google = false;
      nextQuestion(spieler, jocker);
    } else {
      // sounds().play("./data/audio/wrong.mp3");
      spinner.stop({
        text: `Richtige Antwort wäre ${jocker.frage.richtigeAntwort}`,
        mark: "Leider Falsch...",
        color: "red",
      });
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
export default google;
