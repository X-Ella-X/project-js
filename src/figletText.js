import gradient from "gradient-string";
import figlet from "figlet";
import getUser from "./getUser.js";
const figletText = (arg) => {
  figlet.text(
    // " W e r  w i r d  M i l l i o n ä r ?",
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
      /* wird  " W e r  w i r d  M i l l i o n ä r ?" angezeigt */
      console.clear();
      console.log(gradient.cristal(data));
      getUser();
    }
  );
};

export default figletText;
