class Insertion {
  constructor(array) {
    this.array = array;
    this.dataPoints = [];
  }

  sort() {
    const array = this.array;
    let i, j;
    for (i = 0; i < array.length; i++) {
      ((i) => {
        setTimeout(() => {
          let target = array[i];
          for (j = i - 1; target < array[j]; j--) {
            array[j + 1] = array[j];
          }
          array[j + 1] = target;
          this.dataInput();
          this.renderSort();
        }, 1 * i);
      })(i);
    }
  }

  dataInput() {
    this.dataPoints = [];
    this.array.forEach((item) => {
      this.dataPoints.push({ label: `${item}`, y: item });
    });
    return this.dataPoints;
  }

  renderSort() {
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
          dataPoints: this.dataPoints,
        },
      ],
    });
    chart.render();
  }

  returnData() {
    return this.dataPoints;
  }
}

module.exports = Insertion;
