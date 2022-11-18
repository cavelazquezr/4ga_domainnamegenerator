/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon", "memes", "coronet"];
  var extension = ["com", "net", "es"];

  let domains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        for (let z = 0; z < extension.length; z++) {
          let aux = `${pronoun[i]}${adj[x]}${noun[y]}`;
          if (aux.endsWith(extension[z])) {
            domains.push(
              `${aux.slice(0, -extension[z].length)}.${extension[z]}`
            );
          } else {
            domains.push(`${aux}.${extension[z]}`);
          }
        }
      }
    }
  }

  console.log(`Options generated: ${domains.length}`);
  domains.forEach(e => {
    console.log(e);
  });
};
