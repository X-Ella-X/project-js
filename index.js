import gradient from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";

import Spieler from "./classes/spieler.js";
import Jocker from "./classes/jocker.js";
import fragenDB from "./data/fragenDB.js";
// inquirer.registerPrompt("emoji", require("inquirer-emoji"));

// inquirer.prompt([
//   {
//     type: "emoji",
//     name: "spirit_animal",
//     message: "Find your spirit animal emoji:",
//   },
// ]);

// let duck = gradient("orange", "yellow").multiline(
//   ["  __", "<(o )___", " ( ._> /", "  `---'"].join("\n")
// );
console.clear();
const showTitel = () => {
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
      console.log(gradient.cristal(data));
      inquirer
        .prompt([
          {
            type: "list",
            name: "list",
            message: "Bist Du bereit?",
            choices: ["Ja", "Nein"],
          },
        ])
        .then((answers) => {
          function name(params) {
            cyan;
          }
          answers.list === "Ja"
            ? inquirer
                .prompt([
                  {
                    type: "input",
                    name: "name",
                    message: "Sag mir dein Namen: ",
                  },
                  {
                    type: "input",
                    name: "mama",
                    message: "Wie heißt deine Mama? ",
                  },
                  {
                    type: "number",
                    name: "tel",
                    message:
                      "hat Sie auch eine Tel.Nr.? sie kann dir bestimmt später dein Leben retten: ",
                  },
                ])
                .then((answers) => {
                  function name(params) {
                    cyan;
                  }
                  /* Hier bekommt man info über Spieler
                      answers:Object
                      name:string
                      mama:string
                      tel:number
          */
                  // console.log(answers);
                  const spieler = new Spieler(answers);
                  const jocker = new Jocker(answers);
                  jocker.frage = fragenDB.getRandomItem(100);
                  jocker.jockerListe.fiftyFifty = false;
                  jocker.jockerListe.gruppe = false;
                  console.log(spieler);
                  console.log(jocker.showJockerListe());
                })
                .catch((error) => {
                  if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                  } else {
                    // Something else went wrong
                  }
                })
            : console.log("Dann lerne irgendwas...... ");
        })
        .catch((error) => {
          if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
        });
    }
  );
};

showTitel();
