const { it, expect } = require("@jest/globals");
const enhancer = require("./enhancer.js");
// test away!
describe("Testing game's enhancing functionality", () => {
  it("should REPAIR item and restore durability to 100", () => {
    expect(
      enhancer.repair({
        name: "Sam",
        durability: 85,
        enhancement: 20,
      })
    ).toEqual({
      name: "Sam",
      durability: 100,
      enhancement: 20,
    });
  });

  it("should return item upon enhancement SUCCESS", () => {
    expect(
      enhancer.success({
        name: "Sam",
        durability: 100,
        enhancement: 10,
      })
    ).toEqual({
      name: "Sam",
      durability: 100,
      enhancement: 11,
    });
  });

  it("should return item upon enhancement FAILURE", () => {
    expect(
      enhancer.fail({
        name: "Sam",
        durability: 15,
        enhancement: 17,
      })
    ).toEqual({
      name: "Sam",
      durability: 15,
      enhancement: 16,
    });
  });
});
