#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright("MT-Calculator"));
let operator = {
    name: `opt`,
    message: `What Operator you want to use?`,
    type: "list",
    choices: ["+", "-", "/", "*", "^"],
};
let first = {
    name: `first_Number`,
    message: `Write your First number`,
    type: "number",
};
let second = {
    name: `second_Number`,
    message: `Write your Second number`,
    type: "number",
};
let question = [first, operator, second];
let restart = true;
// To repeat the process of calculation untill you want to stop it
do {
    let answer = await inquirer.prompt(question);
    const firstNumber = answer.first_Number;
    const secondNumber = answer.second_Number;
    const userOperator = answer.opt;
    switch (userOperator) {
        case "+":
            console.log("Answer: ", firstNumber + secondNumber);
            break;
        case "-":
            console.log("Answer: ", firstNumber - secondNumber);
            break;
        case "*":
            console.log("Answer: ", firstNumber * secondNumber);
            break;
        case "/":
            console.log("Answer: ", firstNumber / secondNumber);
            break;
        case "^":
            console.log("Answer: ", firstNumber ** secondNumber);
            break;
    }
    let continueUsing = await inquirer.prompt({
        name: `askUser`,
        message: `Do you want to continue => Y/N`,
    });
    restart =
        continueUsing.askUser === "y" ||
            continueUsing.askUser === "Y" ||
            continueUsing.askUser === "yes" ||
            continueUsing.askUser === "Yes" ||
            continueUsing.askUser === "YES"
            ? true
            : false;
} while (restart);
