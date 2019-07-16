/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const Insertion = require("./Sort");

// A link to our styles!
require("./index.css");

const submitButton = document.getElementById("submitText");
const submitText = document.getElementById("name");
const message = document.getElementById("message");
let count = 1;
const array = [];

const action = (strArr) => {
  const arr = JSON.parse(strArr);
  const sort = new Insertion(arr);
  console.log(sort.sort());
};

submitButton.addEventListener("click", () => action(submitText.value));

// function createCheesyTitle(slogan) {
//   const container = document.createElement("h1");
//   const textNode = document.createTextNode(slogan);
//   container.appendChild(textNode);
//   return container;
// }

// const title = createCheesyTitle(sort.returnValue("Re-Engineer Yourself"));
// document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
function changeTitle(event) {
  event.preventDefault();
  // console.log('What is an event?', event);
}

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = changeTitle;
});
