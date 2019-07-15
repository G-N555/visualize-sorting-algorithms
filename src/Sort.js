class Insertion {
  constructor(array) {
    this.array = array;
  }
  sort() {
    const array = this.array;
    let store;
    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        let base = array[j];
        let target = array[i];
        if (target < base) {
          store = target;
          array[i] = base;
          array[j] = store;
          i -= 1;
        }
      }
    }
    return array;
  }

  click() {
    const text = document.getElementById("text");
    const sorted = this.sort(this.array);
    console.log(sorted);
    text.addEventListener("click", () => this.addText(sorted));
  }

  addText() {
    const paragraph = document.createElement("p");
    const sortedArray = this.returnValue(this.array);
    paragraph.textContent = sortedArray;
    const textArea = document.getElementById("display_container");
    textArea.appendChild(paragraph);
  }

  returnValue() {
    const result = this.sort(this.array);
    return result;
  }
}

const newSort = new Insertion([4, 3, 2]);
newSort.sort();

module.exports = Insertion;
