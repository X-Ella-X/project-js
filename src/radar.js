import chalkAnimation from "chalk-animation";
import sounds from "./sounds.js";
const glichEffect = (arg) => {
  sounds().play("data/audio/intro.mp3");
  chalkAnimation.radar(arg + "...");
};

export default glichEffect;
