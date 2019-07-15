const Insertion = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Insertion).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Insertion.prototype.sort).to.be.a("function");
  });
  it("should return sorted array", () => {
    const insert = new Insertion();
    const array = [2, 3, 4, 7, 5, 8, 6, 1, 9, 10];
    const sorted = insert.sort(array);
    expect(sorted).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("should return correct value after sorted", () => {
    const insert = new Insertion();
    const array = [2, 3, 4, 7, 5, 8, 6, 1, 9, 10];
    const sorted = insert.sort(array);
    const position = insert.returnValue(8);
    expect(position).to.be.eql(`your number ${8} is located index ${7}`);
  });
});
