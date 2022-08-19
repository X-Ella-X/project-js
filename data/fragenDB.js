const fragenDB = {
  100: [
    {
      frage: "Wie viele Bundesländer hat Deutschland?",
      antworten: ["13", "9", "16", "20"],
      richtigeAntwort: "16",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie lautet die Hauptstadt von Frankreich?",
      antworten: ["Paris", "Amsterdam", "Oslo", "Zürich"],
      richtigeAntwort: "Paris",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "In welcher Stadt lebte der Detektiv Sherlock Holmes?",
      antworten: ["Köln", "London", "Manchester", "Oslo"],
      richtigeAntwort: "London",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie viele Nieren hat ein Mensch im Normalfall?",
      antworten: ["1", "3", "2", "5"],
      richtigeAntwort: "2",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "In welcher Stadt findet sich Big Ben?",
      antworten: ["New York", "Hong Kong", "London", "Istanbul"],
      richtigeAntwort: "London",
      warSchon: false,
      checkAntwort,
    },
  ],
  200: [
    {
      frage: "In welchem Jahr wurde der Euro als Bargeld eingeführt?",
      antworten: ["2000", "2002", "2003", "2005"],
      richtigeAntwort: "2002",
      warSchon: false,
      checkAntwort,
    },
    {
      frage:
        "Welcher Planet unseres Sonnensystems wird als Roter Planet bezeichnet?",
      antworten: ["Jupiter", "Mars", "Venera", "Neptun"],
      richtigeAntwort: "Mars",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Was bedeutet das lateinische “carpe diem”?",
      antworten: [
        "Genieße das Leben",
        "Nutze den Tag",
        "Dein Tag wird toll werden",
        "Man sieht sich immer zweimal im Leben",
      ],
      richtigeAntwort: "Nutze den Tag",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wer schrieb die Harry Potter Bücher?",
      antworten: [
        "E.L. James",
        "J.R.R. Tolkien",
        "George R.R. Martin",
        "Joanne K. Rowling",
      ],
      richtigeAntwort: "Joanne K. Rowling",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie heißt die Hauptstadt von Thüringen?",
      antworten: ["Magdeburg", "Erfurt", "Dresden", "Potsdam"],
      richtigeAntwort: "Erfurt",
      warSchon: false,
      checkAntwort,
    },
  ],
  400: [
    {
      frage: "Beim Poolbillard steht welche Zahl auf der schwarzen Kugel?",
      antworten: ["0", "1", "9", "8"],
      richtigeAntwort: "8",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "In welcher Stadt befinden sich die Pyramiden?",
      antworten: ["Kairo", "Gizeh", "Alexandria", "Hurghada"],
      richtigeAntwort: "Gizeh",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welches Bundesland ist flächenmäßig das größte?",
      antworten: [
        "Bayern",
        "Baden-Würtemberg",
        "Nordrhein-Westfalen",
        "Niedersachsen",
      ],
      richtigeAntwort: "Bayern",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "An welchem Datum fiel die Berliner Mauer?",
      antworten: [
        "3. Oktober 1990",
        "2. November 1990",
        "9. November 1989",
        "8. Oktober 1989",
      ],
      richtigeAntwort: "9. November 1989",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Lautstärke misst man im?",
      antworten: ["in Dezibel", "in Liter", "in Celsius", "in Gramm"],
      richtigeAntwort: "in Dezibel",
      warSchon: false,
      checkAntwort,
    },
  ],
  500: [
    {
      frage: "Wann endete der 2. Weltkrieg?",
      antworten: ["1916", "1945", "1950", "1935"],
      richtigeAntwort: "1945",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "In welchem Land wohnen die meisten Menschen?",
      antworten: ["China", "USA", "Russland", "Kanada"],
      richtigeAntwort: "China",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Auf welchem Kontinent liegt die Wüste Sahara?",
      antworten: ["Asien", "Afrika", "Europa", "Amerika"],
      richtigeAntwort: "Afrika",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie viele Farben hat die dänische Flagge?",
      antworten: ["eine", "drei", "vier", "zwei"],
      richtigeAntwort: "zwei",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welcher ist der längste innerdeutsche Fluss?",
      antworten: ["Rhein", "Weser", "Elbe", "Donau"],
      richtigeAntwort: "Rhein",
      warSchon: false,
      checkAntwort,
    },
  ],
  1000: [
    {
      frage:
        "Mit wie vielen Nachbarländern teilt Deutschland sich eine Grenze?",
      antworten: ["8", "7", "9", "10"],
      richtigeAntwort: "9",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie viel Prozent der Erde sind circa von Wasser bedeckt?",
      antworten: ["50 Prozent", "60 Prozent", "70 Prozent", "80 Prozent"],
      richtigeAntwort: "70 Prozent",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "An welchem Datum fiel die Berliner Mauer?",
      antworten: [
        "3. Oktober 1990",
        "2. November 1990",
        "9. November 1989",
        "8. Oktober 1989",
      ],
      richtigeAntwort: "9. November 1989",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welche Stadt liegt am südlichsten?",
      antworten: ["Stuttgart", "Regensburg", "Konstanz", "Augsburg"],
      richtigeAntwort: "Konstanz",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie viele Tasten hat ein Klavier?",
      antworten: ["88", "70", "65", "80"],
      richtigeAntwort: "88",
      warSchon: false,
      checkAntwort,
    },
  ],
  2000: [
    {
      frage: "Wie heißt die Hauptstadt der Slowakei?",
      antworten: ["Sofia", "Prag", "Bratislava", "Ljubljan"],
      richtigeAntwort: "Bratislava",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie heißt die Hauptstadt von Australien?",
      antworten: ["Sydney", "Melbourne", "Canberra", "Adelaide"],
      richtigeAntwort: "Canberra",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welcher ist der längste Fluss der Welt?",
      antworten: ["Nil", "Amazonas", "Dunau", "Rein"],
      richtigeAntwort: "Amazonas",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Was ist die Hauptstadt von Portugal?",
      antworten: ["Porto", "Lissabon", "Lago", "Tavira"],
      richtigeAntwort: "Lissabon",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welcher Ozean liegt zwischen Europa und Amerika?",
      antworten: [
        "Atlantischer Ozean",
        "Indischer Ozean",
        "Karibisches Meer",
        "Pazifischer Ozean",
      ],
      richtigeAntwort: "Atlantischer Ozean",
      warSchon: false,
      checkAntwort,
    },
  ],
  5000: [
    {
      frage:
        "Welcher Sänger war unter anderem als “The King of Pop” und “The Gloved One” bekannt?",
      antworten: ["Elvis Presley", "Michael Jackson", "Frank Sinatra", "2Pac"],
      richtigeAntwort: "Michael Jackson",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Was ist das chemische Symbol für Silber?",
      antworten: ["An", "Ab", "Ag", "Af"],
      richtigeAntwort: "Ag",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welches dieser Tiere hält keinen Winterschlaf?",
      antworten: ["Eichhörnchen", "Fledermaus", "Igel", "Siebenschläfer"],
      richtigeAntwort: "Eichhörnchen",
      warSchon: false,
      checkAntwort,
    },
    {
      frage:
        "In welchem Jahr ist die Titanic am 15. April auf ihrer Jungfernfahrt von Southampton im Atlantik gesunken?",
      antworten: ["1915", "1920", "1912", "1908"],
      richtigeAntwort: "1912",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Die Zeichentrick-Familie Simpsons lebt in welcher Stadt?",
      antworten: ["New York", "Springfield", "Chicago", "Minnesota"],
      richtigeAntwort: "Springfield",
      warSchon: false,
      checkAntwort,
    },
  ],
  10000: [
    {
      frage: "Die Freiheitsstatue in New York war ein Geschenk von:",
      antworten: ["Frankreich", "Großbritannien", "Belgien", "Kanada"],
      richtigeAntwort: "Frankreich",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Aus wie vielen Kräutern ist Jägermeister gemacht?",
      antworten: ["56", "26", "47", "61"],
      richtigeAntwort: "56",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie viele Herzen hat ein Oktopus?",
      antworten: ["Zwei", "Drei", "Vier", "Keinen"],
      richtigeAntwort: "Drei",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie viele Oscars gewann der Film „Titanic“?",
      antworten: ["10", "11", "12", "13"],
      richtigeAntwort: "11",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wo herrscht kein Linksverkehr?",
      antworten: ["Irland", "Indien", "Island", "Großbritannien"],
      richtigeAntwort: "Island",
      warSchon: false,
      checkAntwort,
    },
  ],
  20000: [
    {
      frage: "Wie lange dauerte der hundertjährige Krieg?",
      antworten: ["100 Jahre", "70 Jahre", "150 Jahre", "116 Jahre"],
      richtigeAntwort: "116 Jahre",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie hoch hängt ein Basketball-Korb?",
      antworten: ["3.05 Meter", "2.90 Meter", "3.15 Meter", "3.50 Meter"],
      richtigeAntwort: "3.05 Meter",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Was ist ein Sonett?",
      antworten: [
        "Eine Stichwaffe",
        "Ein Musikinstrument",
        "Ein Pilz",
        "Eine Gedichtsform",
      ],
      richtigeAntwort: "Eine Gedichtsform",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welches Metall leitet Wärme am besten?",
      antworten: ["Silber", "Kupfer", "Gold", "Aluminium"],
      richtigeAntwort: "Silber",
      warSchon: false,
      checkAntwort,
    },
    {
      frage:
        "Welcher Schauspieler hat nicht in einem James Bond-Film mitgespielt?",
      antworten: [
        "Timothy Dalton",
        "Leonardo DiCaprio",
        "Daniel Craig",
        "Javier Bardem",
      ],
      richtigeAntwort: "Leonardo DiCaprio",
      warSchon: false,
      checkAntwort,
    },
  ],
  30000: [
    {
      frage:
        "Auf welcher Buchreihe basiert die Erfolgsserie „Game of Thrones“?",
      antworten: [
        "Earth, Wind and Fire",
        "A Song of Ice and Fire",
        "Storm and Fire",
        "Rain, Thunder and Lightning",
      ],
      richtigeAntwort: "A Song of Ice and Fire",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welcher Planet unseres Sonnensystems ist der Sonne am nächsten?",
      antworten: ["Mars", "Venera", "Jupiter", "Merkur"],
      richtigeAntwort: "Merkur",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welches ist das höchste Amt in Deutschland?",
      antworten: [
        "Bundespräsident",
        "Bundeskanzler",
        "Bundestagspräsident",
        "Oberster Richter am Bundesverfassungsgericht",
      ],
      richtigeAntwort: "Bundespräsident",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wer wählt den Bundespräsidenten?",
      antworten: [
        "Bundeskanzler",
        "Bundestag",
        "Bundesrat",
        "Bundesversammlung",
      ],
      richtigeAntwort: "Bundesversammlung",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Mit welcher Tiergruppe sind die Dinosaurier am engsten verwandt?",
      antworten: ["Vögeln", "Eidechsen", "Alligatoren", "Affen"],
      richtigeAntwort: "Vögeln",
      warSchon: false,
      checkAntwort,
    },
  ],
  50000: [
    {
      frage:
        "Von welchem Kontinent aus begann die Verbreitung des Homo sapiens?",
      antworten: ["Asien", "Afrika", "Amerika", "Europa"],
      richtigeAntwort: "Afrika",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie lang ist die Chinesische Mauer (gerundet)?",
      antworten: [
        "12.000 Kilometer",
        "15.000 Kilometer",
        "18.000 Kilometer",
        "21.000 Kilometer",
      ],
      richtigeAntwort: "21.000 Kilometer",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie beginnt die Kreiszahl Pi (π)?",
      antworten: ["3,1415", "2,8485", "1,3435", "4,6465"],
      richtigeAntwort: "3,1415",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie lautet das chemische Symbol für Blei?",
      antworten: ["Bl", "Pb", "Be", "Pt"],
      richtigeAntwort: "Pb",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welche Gürtelfarbe existiert nicht im Kampfsport Karate?",
      antworten: ["Schwarz", "Weiß", "Braun", "Rot"],
      richtigeAntwort: "Rot",
      warSchon: false,
      checkAntwort,
    },
  ],
  100000: [
    {
      frage: "Von wem stammt die Relativitätstheorie?",
      antworten: [
        "Nikola Tesla",
        "Stephen Hawking",
        "Albert Einstein",
        "Marie Curie",
      ],
      richtigeAntwort: "Albert Einstein",
      warSchon: false,
      checkAntwort,
    },
    {
      frage:
        "Wie viele Liter Bier werden in Deutschland pro Kopf jährlich getrunken?",
      antworten: ["150 Liter", "170 Liter", "100 Liter", "200 Liter"],
      richtigeAntwort: "100 Liter",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie viele Atemzüge nimmt der menschliche Körper täglich?",
      antworten: [
        "20,000 täglich",
        "10,000 täglich",
        "50,000 täglich",
        "30,000 täglich",
      ],
      richtigeAntwort: "20,000 täglich",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wo fanden die Olympischen Spiele 1996 statt?",
      antworten: ["Atlanta", "Turin", "Barcelona", "Los Angeles"],
      richtigeAntwort: "Atlanta",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welcher Pilz ist einer der giftigsten der Welt?",
      antworten: [
        "Der Fliegenpilz",
        "Der Grüne Knollenblätterpilz",
        "Der Gemeine Kartoffelbovist",
        "Der Satansröhrling",
      ],
      richtigeAntwort: "Der Grüne Knollenblätterpilz",
      warSchon: false,
      checkAntwort,
    },
  ],
  250000: [
    {
      frage: "Wie wird die Zahl unter dem Bruchstrich bezeichnet?",
      antworten: ["Nenner", "Quotient", "Zähler", "Teiler"],
      richtigeAntwort: "Nenner",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Nach welcher Zeit feiert man die „Petersilienhochzeit“?",
      antworten: [
        "Nach 10 Jahren",
        "Nach 12 Jahren",
        "Nach 12 1/2 Jahren",
        "Nach 11 Jahren",
      ],
      richtigeAntwort: "Nach 12 1/2 Jahren",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Wie viele Knochen hat ein Erwachsenenkörper?",
      antworten: ["250", "170", "206", "215"],
      richtigeAntwort: "206",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welchen Namen trägt die Universität Frankfurt am Main?",
      antworten: [
        "Friedrich Schiller",
        "Bertolt Brecht",
        "Johann Wolfgang von Goethe",
        "Heinrich Heine",
      ],
      richtigeAntwort: "Johann Wolfgang von Goethe",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Welcher deutsche Herrscher trug den Beinamen “der Große”?",
      antworten: [
        "Friedrich der I. von Preußen",
        "Friedrich der III. von Sachsen",
        "Friedrich II. von Preußen",
        "Friedrich der III. von Österreich",
      ],
      richtigeAntwort: "Friedrich II. von Preußen",
      warSchon: false,
      checkAntwort,
    },
  ],
  900000: [
    {
      frage:
        "“Kunst wäscht den Staub des Alltags von der Seele.” Von wem stammt das Zitat?",
      antworten: [
        "Vincent van Gogh",
        "Andy Warhol",
        "Pablo Picasso",
        "Claude Monet",
      ],
      richtigeAntwort: "Pablo Picasso",
      warSchon: false,
      checkAntwort,
    },
    {
      frage:
        "Wie viel Geld warfen Rom-Besucher im Jahr 2016 in den berühmten Trevi-Brunnen?",
      antworten: [
        "1.4 Mio. Euro",
        "1,6 Mio. Euro",
        "820.000 Euro",
        "500,000 Euro",
      ],
      richtigeAntwort: "1.4 Mio. Euro",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Aus wessen Feder stammt „Krieg und Frieden“?",
      antworten: [
        "Leo Tolstoi",
        "Fjodor Dostojewski",
        "Alexander Pushkin",
        "Anton Tschechow",
      ],
      richtigeAntwort: "Leo Tolstoi",
      warSchon: false,
      checkAntwort,
    },
    {
      frage:
        "Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?",
      antworten: ["Troposphäre", "Stratosphäre", "Mesosphäre", "Thermosphäre"],
      richtigeAntwort: "Troposphäre",
      warSchon: false,
      checkAntwort,
    },
    {
      frage:
        "Von wem stammt das Zitat: „Dies ist ein kleiner Schritt für einen Menschen, aber ein riesiger Sprung für die Menschheit.“?",
      antworten: ["Neil Armstrong", "Elon Musk", "Stephen Hawking", "Galileo"],
      richtigeAntwort: "Neil Armstrong",
      warSchon: false,
      checkAntwort,
    },
  ],
  3000000: [
    {
      frage: "Wie lange hat Goethe an seinem „Faust“ gearbeitet?",
      antworten: ["20 Jahre", "64 Jahre", "34 Jahre", "10 Jahre"],
      richtigeAntwort: "64 Jahre",
      warSchon: false,
      checkAntwort,
    },
    {
      frage:
        "Wer gilt als Verfasser der amerikanischen Unabhängigkeitserklärung?",
      antworten: [
        "Thomas Jefferson",
        "Benjamin Franklin",
        "George Washington",
        "John Adams",
      ],
      richtigeAntwort: "Thomas Jefferson",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "In welcher Einheit wird der elektrische Widerstand gemessen?",
      antworten: ["Ohm", "Volt", "Ampere", "Watt"],
      richtigeAntwort: "Ohm",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "Was soll Cäsar gesagt haben, als er den Rubikon überquerte?",
      antworten: [
        "veni, vidi, vici",
        "divide et empera",
        "alea iacta est",
        "et tu, brute",
      ],
      richtigeAntwort: "alea iacta est",
      warSchon: false,
      checkAntwort,
    },
    {
      frage: "In welchem Land fand die sogenannte Februarrevolution statt?",
      antworten: ["Deutschland", "Frankreich", "Russland", "Italien"],
      richtigeAntwort: "Russland",
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
  element.price = arg;
  element.fiftyFifty = fiftyFifty(element.richtigeAntwort, element.antworten);
  return element;
}

function fiftyFifty(richtigeAntwort, antworten) {
  // console.log(richtigeAntwort);
  const result = [{ name: "a", message: richtigeAntwort }];
  const filtered = antworten.filter((x) => x !== richtigeAntwort);
  result.push({ name: "b", message: filtered.shift() });
  return result;
}
/* Function die prüft ob die Antwort Richtig ist */
function checkAntwort(arg) {
  return this.richtigeAntwort === this.antworten[arg];
}

export default fragenDB;
