require("@microsoft/jest-sarif");

const fs = require("fs");

describe("SARIF", () => {
  it("validates", () => {
    const sarifFile = fs.readFileSync("sarif.json", "utf8");
    expect(sarifFile).not.toBeNull();
  
    // expect the sarif to be valid
    const sarif = JSON.parse(sarifFile);
    expect(sarif).toBeValidSarifLog();
  });
});
