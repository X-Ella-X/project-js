const fragenDB = {
  100: [
    {
      frage: "bnc",
      anworten: [1, 2, 3, 4],
      richtigeAntwort: "",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "cxyx",
      anworten: [6, 7, 3, 0],
      richtigeAntwort: "",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "hfgh",
      anworten: [1, 6, 3, 6],
      richtigeAntwort: "",
      warSchon: false,
      checkAntwort,
    },
  ],
  200: [
    {
      frage: "",
      anworten: ["bla", 2, 3, 4],
      richtigeAntwort: "bla",
      warSchon: false,
      checkAntwort,
    },
  ],
  getRandomItem,
};

/* Function die random eine Frage zurückgibt(Object)/Eingang ist Number */
function getRandomItem(arg) {
  const element = this[arg][Math.floor(Math.random() * this[arg].length)];
  element.warSchon = true;
  return element;
}

/* Function die prüft ob die Antwort Richtig ist */
function checkAntwort(arg) {
  return this.richtigeAntwort === arg;
}

function erstelleJocker() {}

export default fragenDB;
