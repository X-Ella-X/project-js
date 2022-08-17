import gradient from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";

import Spieler from "./classes/spieler.js";
import Jocker from "./classes/jocker.js";
import fragenDB from "./data/fragenDB.js";

import enquirer from "enquirer";

// const getUser = () => {
//   const prompt = enquirer.form({
//     name: "user",
//     message: "Please provide the following information:",
//     choices: [
//       { name: "firstname", message: "First Name", initial: "Jon" },
//       { name: "lastname", message: "Last Name", initial: "Schlinkert" },
//       {
//         name: "username",
//         message: "GitHub username",
//         initial: "jonschlinkert",
//       },
//     ],
//   });

//   return prompt;
// };

// getUser().then((x) => console.log(x.firstname !== "dima" ? getUser() : "dima"));

// const response = await enquirer.prompt({
//   type: "input",
//   name: "username",
//   message: "What is your username?",
//   choices: ["Ja", "Nein"],
// });

// console.log(response.username === "dima" ? "ja" : "nein"); // { username: 'jonschlinkert' }

console.clear();
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
