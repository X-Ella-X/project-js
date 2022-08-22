import chalkAnimation from "chalk-animation";
import sounds from "./sounds.js";
const glichEffect = (arg) => {
  // sounds().play("data/audio/intro.mp3");
  chalkAnimation.glitch(arg);
};

export default glichEffect;
