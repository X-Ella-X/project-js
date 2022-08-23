import Spieler from "./classes/spieler.js";
import Jocker from "./classes/jocker.js";
import questionGenerator from "./src/questionGenerator.js";
import getUser from "./src/getUser.js";
import radar from "./src/radar.js";
import fragenDB from "./data/fragenDB.js";
import figletText from "./src/figletText.js";
const showTitel = (param1, param2) => {
  figletText(" W e r  w i r d  M i l l i o n ä r ?");
  if (param2 instanceof Jocker) {
    param2.frage = fragenDB.getRandomItem(param1.listQuestion.shift());
    questionGenerator(param1, param2);
  } else {
    param1().then((x) => {
      const spieler = new Spieler(x);
      const jocker = new Jocker(x);
      console.clear();
      showTitel(spieler, jocker);
    });
  }
};

// Aufrufen vom titel mit InfoAbfrage
radar("L o a d i n g ...");
setTimeout(() => showTitel(getUser), 2000);

// showLosGehts....
export default showTitel;
