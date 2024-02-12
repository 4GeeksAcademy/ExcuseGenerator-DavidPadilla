/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let generateExcuse = () => {
    let who = ["The cat", "My aunt", "The neighbour", "My roommates"];
    let action = ["destroyed", "erased", "copied", "stole"];
    let what = ["my work", "my proyect", "the plants", "the couch"];
    let when = [
      "yesterday",
      "while I was sleeping",
      "during the night",
      "when I went for a walk"
    ];

    let w = Math.floor(Math.random() * who.length);
    let x = Math.floor(Math.random() * action.length);
    let y = Math.floor(Math.random() * what.length);
    let z = Math.floor(Math.random() * when.length);

    return who[w] + " " + action[x] + " " + what[y] + " " + when[z];
  };

  console.log("Hello Rigo from the console!");
  document.getElementById("excuse").innerHTML = generateExcuse();
};
