import gradient from "gradient-string";
import figlet from "figlet";

import Spieler from "./classes/spieler.js";
import Jocker from "./classes/jocker.js";
import fragenDB from "./data/fragenDB.js";

import enquirer from "enquirer";

const showTitel = (param) => {
  figlet.text(
    " W e r  w i r d  M i l l i o n ä r ?",
    {
      // font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "fitted",
      width: 1000,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      /* wird  " W e r  w i r d  M i l l i o n ä r ?" angezeigt */
      console.clear();
      console.log(gradient.cristal(data));
      param().then((x) => {
        const spieler = new Spieler(x);
        const jocker = new Jocker(x);
        console.clear();
        jocker.frage = fragenDB.getRandomItem(spieler.listQuestion.shift());
        console.log(jocker);
        console.log(spieler);
      });
    }
  );
};
const getUser = () => {
  const prompt = enquirer.form({
    name: "player",
    message: "Ich brauche zuerst einige Informationen von dir:",
    choices: [
      { name: "name", message: "Dein Namen", initial: "Chuck" },
      { name: "mama", message: "Mama's Name", initial: "Norris" },
      {
        name: "tel",
        message: "Tel.Nr. deiner Mutter",
        initial: "0123456789",
      },
    ],
  });

  return prompt;
};
const showRandomQuestion = (arg) => {};

// Aufrufen vom titel mit InfoAbfrage
showTitel(getUser);
