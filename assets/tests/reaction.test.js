const { sendReaction, addReactionToPost } = require("../reactions");

describe("sendReaction", () => {
    
    test("that it is a function", () => {
        expect(typeof sendReaction).toBe("function");
    })
})


describe("addReactionToPost", () => {
    
    test("that it is a function", () => {
        expect(typeof addReactionToPost).toBe("function");
    })
})
