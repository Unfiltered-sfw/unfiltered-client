/**
 * @jest-environment jsdom
 */

const { assignCommentsToPosts, printContent} = require("../handlebars");

describe("assignCommentsToPost", () => {
    test("that it is a function", () => {
        expect(typeof assignCommentsToPosts).toBe("function");
    })
})
describe("printContent", () => {    
    test("that it is a function", () => {
        expect(typeof printContent).toBe("function");
    })
})