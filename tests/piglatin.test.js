const { translate } = require("../src/piglatin");

describe("translate fucntion", () => {
  test("word that starts with o", () => {
    const result = translate("ocean");
    expect(result).toBe("oceanway");
  });
  test("word that starts with a", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with e", () => {
    const result = translate("egg");
    expect(result).toBe("eggway");
  });
  test("word that starts with i", () => {
    const result = translate("ice");
    expect(result).toBe("iceway");
  });
  test("word that starts with u", () => {
    const result = translate("Umbrella");
    expect(result).toBe("umbrellaway");
  });
  test("words starting with y", () => {
    const result = translate("yodel");
    expect(result).toBe("odelyay");
  });
  test("word starting with two consonants", () => {
    const result = translate("character");
    expect(result).toBe("aracterchay");
  });
  test("two constinants", () => {
    const result = translate("the");
    expect(result).toBe("ethay");
  });
  test("three constinants", () => {
    const result = translate("scrub");
    expect(result).toBe("ubscray");
  });
});
