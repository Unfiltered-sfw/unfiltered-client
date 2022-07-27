// const each = require('jest-each').default;
const { describe } = require("yargs");
const { sendReaction, addReactionToPost, assignCommentsToPosts } = require("../script");

describe("sendReaction", () => {

    test("that it is a function", () => {
        expect(typeof sendReaction).toBe("function");
    })
})

describe("addReactionPost", () => {
    
    test("that it is a function", () => {
        expect(typeof addReactionToPost).toBe("function");
    })
})

describe("assignCommentsToPost", () => {
    
    test("that it is a function", () => {
        expect(typeof assignCommentsToPosts).toBe("function");
    })
})
