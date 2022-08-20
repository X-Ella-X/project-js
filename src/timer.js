import { createSpinner } from "nanospinner";

const timer = (num) => {
  const frameList = [];
  for (let i = num; i > 0; i--) {
    frameList.push("" + i);
  }

  const spinner = createSpinner().start();
  spinner.update({
    text: "Secunden Zeit für die Frage",
    color: "white",
    stream: process.stdout,
    frames: frameList,
    interval: 1000,
  });
  setTimeout(() => {
    spinner.success();
  }, num * 1000 - 1000);
};

export default timer;
