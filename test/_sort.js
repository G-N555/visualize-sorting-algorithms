const Insertion = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should return sorted array", () => {
    const insert = new Insertion();
    const array = [2, 3, 4, 7, 5, 8, 6, 1, 9, 10];
    const sorted = insert.sort(array);
    expect(sorted).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
