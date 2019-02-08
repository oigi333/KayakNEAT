const {expect} = require("chai");

const test = getModule();

describe("tests' test", () => {
    it("should return \"yes\"", ()=>{
        expect(test.isEverythingWorking()).to.equal("yes");
    })
})