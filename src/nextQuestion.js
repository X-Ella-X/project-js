import enquirer from "enquirer";

import showTitel from "../index.js";

const nextQuestion = (spieler, jocker) => {
  const data = enquirer.scale({
    name: "experience",
    message: `${spieler.name}, willst du weiter spielen oder ${jocker.frage.price}€ nehmen `,
    scale: [
      { name: "a", message: "JA" },
      { name: "b", message: "NEIN" },
    ],
    margin: [0, 0, 0, 0],
    choices: [
      {
        name: "answer",
        message: "WEITER / GELD",
        initial: 0,
      },
    ],
  });
  data.then((x) =>
    !x.answer
      ? showTitel(spieler, jocker)
      : console.log(`Gratuliere ${spieler.name}, du hast ${jocker.frage.price}€ gewonnen!!!
Viel Spaß und bis zum nächsten Mal! `)
  );
};

export default nextQuestion;
