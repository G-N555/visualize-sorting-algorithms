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
const actionButton = document.getElementById("actionButton");
const randomButton = document.getElementById("random");
let insertClass;

const random = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 40)
);

const randomInput = (random) => {
  insertClass = new Insertion(random);
  insertClass.dataInput();
};

const input = (strArr) => {
  const arr = JSON.parse(strArr);
  insertClass = new Insertion(arr);
  insertClass.dataInput();
};

const action = () => {
  insertClass.sort();
};

submitButton.addEventListener("click", () => input(submitText.value));
randomButton.addEventListener("click", () => randomInput(random));
actionButton.addEventListener("click", () => action());
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
