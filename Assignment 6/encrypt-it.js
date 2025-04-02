(function() { "use strict";
  
  const inputText = document.getElementById("input-text");
  const resultText = document.getElementById("result-text");
  const encryptItButton = document.getElementById("encrypt-it");
  const resetButton = document.getElementById("reset");
  
  encryptItButton.addEventListener('click', handleClick);
  resetButton.addEventListener('click', handleReset);
  window.addEventListener("load", init);

  function init() {
    console.log("Window loaded!");
  }

  function handleClick() {
    console.log("Encrypt clicked");
    let text = inputText.value;
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      if (char >= 'a' && char <= 'z') {
        result += String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
      } else if (char >= 'A' && char <= 'Z') {
        result += String.fromCharCode(((char.charCodeAt(0) - 65 + 1) % 26) + 65);
      } else {
        result += char;
      }
    }
    console.log(result);
    resultText.value = result
  }

  function handleReset() {
    console.log("Reset clicked");
    resultText.value = "";
    inputText.value = "";
  }
})();
