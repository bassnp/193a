
const textArea = document.getElementById("textArea");
const biggerButton = document.getElementById("biggerButton");
const mooButton = document.getElementById("mooButton");
const fancyRadio = document.getElementById("fancyRadio");
const boringRadio = document.getElementById("boringRadio");

biggerButton.addEventListener('click', makeTextBigger);
mooButton.addEventListener('click', toUpper);
fancyRadio.addEventListener('change', applyStyles);
boringRadio.addEventListener('change', applyStyles);

function makeTextBigger() {
    alert("Hello, world!");
    textArea.style.fontSize = "24pt";
}

function toUpper() {
    textArea.value = textArea.value.toUpperCase();
    const sentences = textArea.value.split(".");
    const modifiedSentences = sentences.map((sentence) => {
      sentence = sentence.trim();
      if (!sentence) return "";

      const words = sentence.split(" ");
      const lastWord = words.pop();
      const modifiedLastWord = lastWord + "-Moo";
      const modifiedSentence = words.join(" ") + " " + modifiedLastWord;
      return modifiedSentence;
    });
  
    textArea.value = modifiedSentences.filter(sentence => sentence).join(". ");
  }

function applyStyles() {
    if (fancyRadio.checked) {
        // 'FancyShmancy'
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else { //
        // 'BoringBetty'
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
