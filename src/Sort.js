class Insertion {
  constructor(array) {
    this.array = array;
  }
  sort() {}

  click() {
    const text = document.getElementById("text");
    text.addEventListener("click", () => this.display("yeeeeeee"));
  }

  display(str) {
    const paragraph = document.createElement("p");
    console.log(paragraph);
    paragraph.textContent = str;
    const textArea = document.getElementById("display_container");
    textArea.appendChild(paragraph);
  }

  returnValue(value) {
    return value;
  }
}

const insert = new Insertion();
insert.click();
insert.display();

module.exports = Insertion;
