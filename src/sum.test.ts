import { sum } from "./server";

describe("sum", () => {
  let sumResult: number;

  beforeAll(() => {
    sumResult = 10;
  });

  it("sum of 3 + 7 must be 10", () => {
    const result = sum(3, 7);

    expect(result).toBe(sumResult);
  });

  test("sum of 2 + 2 must be 4", () => {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });
});
