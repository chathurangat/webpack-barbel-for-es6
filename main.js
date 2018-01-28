import {Calculator} from "./src/calculator";
import {getWelcomeMessage} from "./src/welcome";


document.getElementById("welcome-text").textContent = getWelcomeMessage("chahturanga");

let addition = Calculator.add(10, 20);

let multiplication = new Calculator().multiply(20, 5);

document.getElementById("calculator-text").textContent = " (10 + 20 = [" + addition + "]) and  (20 * 5 = [" + multiplication + "])";
