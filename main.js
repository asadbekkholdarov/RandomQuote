const quoteText = document.querySelector(".quote");
quoteBtn = document.querySelector("button");
const author = document.querySelector(".name");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
const randomQuote = () => {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  // * fetching random data from API and parsing it inro
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      quoteText.innerText = result.content;
      author.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
};

soundBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText}  by ${author.innerText}`
  );
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);
