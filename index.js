const display = document.getElementById("box1");
const buttons = document.querySelectorAll(".box");

let expression = ""; 

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    switch (value) {
      case "C":
        expression = "";
        display.innerText = "0";
        break;

      case "=":
        try {
          let exp = expression.replace(/X/g, "*").replace(/÷/g, "/");

          expression = eval(exp).toString();
          display.innerText = expression;
        } catch {
          display.innerText = "Error";
          expression = "";
        }
        break;

      case "D":
        if (expression !== "") {
          if (expression.startsWith(" ")) {
            expression = expression.slice(1);
          } else {
            expression = "" + expression;
          }
          display.innerText = expression;
        }
        break;

      case "%":
        try {
          expression = (eval(expression) / 100).toString();
          display.innerText = expression;
        } catch {
          display.innerText = "Error";
          expression = "";
        }
        break;

      case ",":
        expression += ".";
        display.innerText = expression;
        break;

      default:
        expression += value;
        display.innerText = expression;
    }
  });
});

display.innerText = "0";
