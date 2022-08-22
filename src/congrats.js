import chalkAnimation from "chalk-animation";
import chalk from "chalk";
const congrats = ({ name }) => {
  return chalkAnimation.neon(
    `Glückwunsch ${name} du bist MILLIONÄR geworden!!! `
  );
};

export default congrats;
