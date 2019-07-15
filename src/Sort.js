class Insertion {
  constructor(array) {
    this.array = array;
  }
  sort() {
    const array = this.array;
    let store;
    let count = 0;
    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        let base = array[j];
        let target = array[i];
        count++;
        const lineArea = document.createElement("div");
        const lineField = document.getElementById("lineArea");
        if (target < base) {
          store = target;
          array[i] = base;
          array[j] = store;
          i -= 1;
        }
        const space = document.createElement("div");
        space.style.height = "10px";
        space.style.fontFamily = "Comic Sans MS";
        space.style.fontSize = "xx-large";
        space.style.textAlign = "center";
        if (count === 1) {
          space.textContent = `${count} st try`;
        } else if (count === 2) {
          space.textContent = `${count} nd try`;
        } else if (count === 3) {
          space.textContent = `${count} rd try`;
        } else {
          space.textContent = `${count} th try`;
        }
        lineField.appendChild(space);
        this.array.map((item) => {
          const line = document.createElement("p");
          let width = item * 10;
          line.style.width = `${width}px`;
          line.style.height = "30px";
          line.style.backgroundColor = "blue";
          lineArea.appendChild(line);
          lineField.appendChild(line);
        });
      }
    }
    return array;
  }

  returnValue(value) {
    const paragraph = document.createElement("p");
    paragraph.textContent = value;
    paragraph.setAttribute("id", "text");
    const textArea = document.getElementById("display_container");
    textArea.appendChild(paragraph);
  }
}

module.exports = Insertion;
