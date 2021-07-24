import * as pureJs from ".";

describe("isReplacementStringFunc", () => {
  const testVariable = "dog";
  test("case when length is different", () => {
    expect(pureJs.isReplacementString("dogie", testVariable)).toBe(false);
  });
  test("case with empty strings", () => {
    expect(pureJs.isReplacementString("", "")).toBe(true);
  });
  test("truth case", () => {
    expect(pureJs.isReplacementString(testVariable, "god")).toBe(true);
  });
  test("false case", () => {
    expect(pureJs.isReplacementString(testVariable, "ggd")).toBe(false);
  });
  test("long string", () => {
    expect(pureJs.isReplacementString("bad day", "dab yad")).toBe(true);
  });
});
