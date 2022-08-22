import enquirer from "enquirer";
const getUser = () => {
  const prompt = enquirer.form({
    name: "player",
    message: "Ich brauche zuerst einige Informationen von dir:",
    choices: [{ name: "name", message: "Dein Namen", initial: "Chuck" }],
  });
  return prompt;
};
export default getUser;
