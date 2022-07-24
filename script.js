"use strict";
const body = document.body;
const showQuestion = document.createElement("div");
showQuestion.classList.add("container", "quiz-box");

// body.append(div_2);

// To get data questions sets from Quiz API
const getQuestions = function () {
  fetch(
    "https://quizapi.io/api/v1/questions?apiKey=vFWAySoVU4YrdfSRJI5jq4Z6YgXyK01yqmFe1unM&limit=20&tags=JavaScript"
  )
    .then((response) => response.json())
    .then((data) => {
      Questions(data);
    })
    .catch((err) => console.error(err));
};

const gameStart = document.getElementById("play");
gameStart.addEventListener("click", () => {
  getQuestions();
  gameStart.classList.add("hidden");
});

function Questions(set) {
  showQuestion.innerHTML = ``;
  // let currentQuestion = set[0].question.toString();
  // console.log(currentQuestion);
  const currentQuestion = document.createElement("div");
  currentQuestion.classList.add("question", "quiz-box");
  currentQuestion.innerText = `Question: ${set[0].question}`;
  showQuestion.append(currentQuestion);
  const nextQuestion = document.createElement("div");
  nextQuestion.classList.add("next-question");
  showQuestion.append(nextQuestion);
  const nextButton = document.createElement("button");
  nextButton.classList.add("next-btn");
  nextButton.setAttribute("id", "next");
  nextButton.innerText = "Next Question";
  nextQuestion.append(nextButton);

  //   showQuestion.innerHTML = `
  // <div class="question">
  //   Question:
  //   "${currentQuestion}"
  // </div>
  // <div class="next-question"><button class="next-btn" id="next">Next Question</button></div>`);
  body.append(showQuestion);
  // const nextQuestion = document.getElementById("next");
  nextQuestion.addEventListener("click", () => {
    showQuestion.innerHTML = ``;
    set.shift();
    if (set.length === 0) return;
    Questions(set);
  });
  console.log(set);
}
// To process the API

// function displayCharacters(data) {
//   let searchArea = document.querySelector(".search-columns");
//   searchArea.innerHTML = `<div class = "imageText">Please click the image of the character to see the related details/comics</div>`;
//   let searchButton = document.querySelector(".search-columns2");
//   searchButton.innerHTML = `<button id="return-button" class="search-btn">return</button>
//   </div>`;
//   let returnButton = document.querySelector("#return-button");
//   returnButton.addEventListener("click", () => {
//     location.reload();
//   });
//   div_2.innerHTML = ``;
//   for (let characters of data) {
//     const div_3 = document.createElement("div");
//     div_3.classList.add("card", "h-100", "col-lg-4", "col-sm-12");
//     div_2.append(div_3);
//     const div_4 = document.createElement("div");
//     div_4.classList.add("card-header", "text-center", "name");
//     div_4.textContent = `${characters?.name}`;
//     div_3.append(div_4);
//     const anchor = document.createElement("a");
//     anchor.setAttribute("href", `${characters?.urls[0].url}`);
//     anchor.setAttribute("target", "blank");
//     div_3.append(anchor);
//     const img = document.createElement("img");
//     img.classList.add("card-img-top", "flag", "mt-3");
//     img.setAttribute(
//       "src",
//       `${characters?.thumbnail?.path}/portrait_fantastic.${characters?.thumbnail?.extension}`
//     );
//     anchor.append(img);
//   }
// }

// const button = document.getElementById("submit-button");
// button.addEventListener("click", () => {
//   var input = document.getElementById("charName").value;
//   getCharacters(input);
// });
