import {Calculator} from "./src/calculator";
import {getWelcomeMessage} from "./src/welcome";

//invoking the static add() method
let addition = Calculator.add(10, 20);

//invoking the non-static multiply() method
let multiplication = new Calculator().multiply(20, 5);

document.getElementById("welcome-text").textContent = getWelcomeMessage("chahturanga");

document.getElementById("calculator-text").textContent = " (10 + 20 = [" + addition + "]) and  (20 * 5 = [" + multiplication + "])";

//Calculator class is assigned to window. so this class can be accessed from browser
window.Calculator = Calculator;

//getWelcomeMessage function is assigned to window. so the function can be accessed from browser
window.getWelcomeMessage = getWelcomeMessage;

