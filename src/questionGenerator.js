import enquirer from "enquirer";
import showTitel from "../index.js";
import nextQuestion from "./nextQuestion.js";

const getQuestion = (frage, name) => {
  const data = enquirer.scale({
    name: "experience",
    message: `${name}, bitte beantworte die ${frage.price}€ Frage!  `,
    scale: [
      { name: "a", message: frage.antworten[0] },
      { name: "b", message: frage.antworten[1] },
      { name: "c", message: frage.antworten[2] },
      { name: "d", message: frage.antworten[3] },
      { name: "J", message: "Joker ziehen" },
    ],
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
  console.log(spieler, jocker);
  let { name, infoSpieler } = spieler;
  let { jockerListe, frage } = jocker;
  getQuestion(frage, name)
    .then((x) => frage.checkAntwort(x.answer))
    .then((x) => {
      if (!x) {
        spieler.darfSpielen = false;
        console.log(
          `Du hast ${
            frage.price >= 30000 ? 30000 : frage.price >= 1000 ? 1000 : 0
          } € gewonnen!`
        );
        console.log(`Viel Erfolg und bis zum nächsten Mal ${name}`);
      } else {
        // if (nextQuestion(name, frage.price)) {
        nextQuestion(spieler, jocker);
        // showTitel(spieler, jocker);
        // } else {
        //   spieler.darfSpielen = false;
        //   console.log(`Du hast ${frage.price} € gewonnen!`);
        //   console.log(`Viel Erfolg und bis zum nächsten Mal ${name}`);
        // }
      }
    });
};

export default questionGenerator;
