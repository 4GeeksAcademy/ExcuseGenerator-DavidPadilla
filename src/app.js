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

    let whoChoice = Math.floor(Math.random() * who.length);
    let actionChoice = Math.floor(Math.random() * action.length);
    let whatChoice = Math.floor(Math.random() * what.length);
    let WhenChoice = Math.floor(Math.random() * when.length);

    return (
      who[whoChoice] +
      " " +
      action[actionChoice] +
      " " +
      what[whatChoice] +
      " " +
      when[WhenChoice]
    );
  };

  console.log("Hello Rigo from the console!");
  document.getElementById("excuse").innerHTML = generateExcuse();
};
