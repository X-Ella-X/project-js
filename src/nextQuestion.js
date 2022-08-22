import enquirer from "enquirer";
import chalk from "chalk";
import showTitel from "../index.js";

const nextQuestion = (spieler, jocker) => {
  const data = enquirer.scale({
    name: "experience",
    message: `${chalk.bold(spieler.name)}, willst du weiter spielen oder ${chalk
      .hex("00c2cb")
      .bold(jocker.frage.price + "€")} nehmen `,
    scale: [
      { name: "a", message: chalk.green("JA") },
      { name: "b", message: chalk.red("NEIN") },
    ],
    margin: [0, 0, 2, 3],
    choices: [
      {
        name: "answer",
        message: "WEITER / GELD",
        initial: 1,
      },
    ],
  });
  data.then((x) =>
    !x.answer
      ? showTitel(spieler, jocker)
      : console.log(
          chalk.hex("03989e").bold(`Gratuliere ${spieler.name}, du hast ${chalk
            .hex("00c2cb")
            .bold(jocker.frage.price + "€")} gewonnen!!!
Viel Spaß und bis zum nächsten Mal! `)
        )
  );
};

export default nextQuestion;
