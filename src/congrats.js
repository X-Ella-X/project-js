import chalkAnimation from "chalk-animation";
const congrats = ({ name }) => {
  return chalkAnimation.neon(
    `Glückwunsch ${name} du bist MILLIONÄR geworden!!! `
  );
};

export default congrats;
