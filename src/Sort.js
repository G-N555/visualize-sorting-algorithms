class Insertion {
  constructor(array) {
    this.array = array;
  }

  loopSetTimeout(endPoint, count, callback, done) {
    const next = () => {
      setTimeout(iteration, 500);
    };
    const iteration = () => {
      if (count < endPoint) {
        callback(count, next);
      } else {
        done && done();
      }
      count++;
    };
    iteration();
  }

  sort() {
    const array = this.array;
    let store;

    this.loopSetTimeout(array.length, 1, (i, nextI) => {
      this.loopSetTimeout(
        i,
        0,
        (j, nextJ) => {
          let base = array[j];
          let target = array[i];
          if (target < base) {
            store = target;
            array[i] = base;
            array[j] = store;
            i -= 1;
          }
          nextJ();
          // render part
          this.renderSort(this.array);
        },
        nextI
      );
    });
  }

  renderSort(array) {
    var chart = new CanvasJS.Chart("chartContainer", {
      theme: "light1", // "light2", "dark1", "dark2"
      animationEnabled: false, // change to true
      title: {
        text: "Insertion Sort",
      },
      data: [
        {
          // Change type to "bar", "area", "spline", "pie",etc.
          type: "column",
          dataPoints: [
            { label: `${array[0]}`, y: array[0] },
            { label: `${array[1]}`, y: array[1] },
            { label: `${array[2]}`, y: array[2] },
            { label: `${array[3]}`, y: array[3] },
            { label: `${array[4]}`, y: array[4] },
            { label: `${array[5]}`, y: array[5] },
            { label: `${array[6]}`, y: array[6] },
            { label: `${array[7]}`, y: array[7] },
            { label: `${array[8]}`, y: array[8] },
            { label: `${array[9]}`, y: array[9] },
          ],
        },
      ],
    });
    chart.render();
  }

  returnValue(value) {
    const paragraph = document.createElement("p");
    paragraph.textContent = value;
    paragraph.setAttribute("id", "text");
    const textArea = document.getElementById("display_container");
    textArea.appendChild(paragraph);
  }
}

const sorted = new Insertion([4, 3, 2, 1]);
sorted.sort();

module.exports = Insertion;
