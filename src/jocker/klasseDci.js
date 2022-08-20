import { createSpinner } from "nanospinner";
import enquirer from "enquirer";

import nextQuestion from "../nextQuestion.js";
const klasseDci = (spieler, jocker) => {
  const arr = [];
  for (let i = 60; i > 0; i--) {
    arr.push("" + i);
  }
  const spinner = createSpinner().start();
  spinner.update({
    text: `<= Secunden übrig, hier nochmal die Frage: ${jocker.frage.frage}`,
    color: "white",
    stream: process.stdout,
    frames: arr,
    interval: 1000,
  });

  setTimeout(() => {
    spinner.success();
  }, 59000);

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

  data.then((x) => {
    if (jocker.frage.checkAntwort(x.answer)) {
      jocker.jockerListe.gruppe = false;
      spinner.success();
      nextQuestion(spieler, jocker);
    } else {
      spieler.darfSpielen = false;
      console.log(
        `Du hast ${
          frage.price >= 30000 ? 30000 : frage.price >= 1000 ? 1000 : 0
        } € gewonnen!`
      );
    }
  });
};
export default klasseDci;
