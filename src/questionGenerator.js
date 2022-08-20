import enquirer from "enquirer";
import showTitel from "../index.js";
import nextQuestion from "./nextQuestion.js";
import jockerAuswahl from "./jocker/jockerAuswahl.js";

const getQuestion = (frage, name, jockerListe) => {
  const scaleListe =
    jockerListe.fiftyFifty || jockerListe.gruppe || jockerListe.google
      ? [
          { name: "a", message: frage.antworten[0] },
          { name: "b", message: frage.antworten[1] },
          { name: "c", message: frage.antworten[2] },
          { name: "d", message: frage.antworten[3] },
          { name: "J", message: "Joker ziehen" },
        ]
      : [
          { name: "a", message: frage.antworten[0] },
          { name: "b", message: frage.antworten[1] },
          { name: "c", message: frage.antworten[2] },
          { name: "d", message: frage.antworten[3] },
        ];

  const data = enquirer.scale({
    name: "experience",
    message: `${name}, bitte beantworte die ${frage.price}€ Frage!  `,
    scale: scaleListe,
    margin: [0, 0, 0, 0],
    choices: [
      {
        name: "answer",
        message: frage.frage,
        initial: 0,
      },
    ],
  });

  return data;
};

const questionGenerator = (spieler, jocker) => {
  // console.log(spieler, jocker);
  let { name, infoSpieler } = spieler;
  let { jockerListe, frage } = jocker;
  getQuestion(frage, name, jockerListe).then((x) => {
    if (frage.checkAntwort(x.answer)) {
      nextQuestion(spieler, jocker);
    } else if (x.answer === 4) {
      jockerAuswahl(spieler, jocker);
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

export default questionGenerator;
