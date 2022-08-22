import gradient from "gradient-string";
import figlet from "figlet";
import getUser from "./getUser.js";
const figletText = (arg) => {
  figlet.text(
    arg,
    {
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
      console.clear();
      console.log(gradient.vice(data));
      getUser();
    }
  );
};

export default figletText;
