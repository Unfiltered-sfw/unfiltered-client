const { create } = require("handlebars");
const {  assignCommentsToPosts,  postNewEntry,
    createNewEntry ,
 postImage, printContent, setReactionListeners,
 displayGiphy,setGiphyEventListeners, setFormsEventListeners,
 searchGiphy} = require("../scriptFunction");


//assignCommentsToPosts
describe("createNewEntry functype", () => {

    test("check that it exists", () => {
        expect(typeof assignCommentsToPosts).toBeDefined()
    })
})

describe("createNewEntry functype", () => {

    test("check that it exists", () => {
        let arr=["fa","faa","sdfs"]
        expect(assignCommentsToPosts).toBeDefined()
        
    })
})


//postNewEntry
describe("createNewEntry functype", () => {

    test("check that it exists", () => {
        expect(typeof postNewEntry).toBeDefined()
    })
})

        
//createNewEntry
describe("createNewEntry functype", () => {

    test("check that it exists", () => {
        expect(typeof createNewEntry).toBeDefined()
    })
})

//postImage
describe("postimg define", () => {

    test("check that it exists", () => {
        expect(typeof postImage).toBeDefined()
    })
})

describe("postimg func check", () => {

    test("that it is a function", () => {
        expect(typeof postImage).toBe('function')
    })
})

//printContent
describe("printcontent define", () => {

    test("check that it exists", () => {
        expect(typeof printContent).toBeDefined()
    })
})

describe("printcontent func", () => {

    test("that it is a function", () => {
        expect(typeof printContent).toBe("function")
    })
})


//setReactionListeners

describe("setReactionListeners define", () => {

    test("check that it exists", () => {
        expect(typeof setReactionListeners).toBeDefined()
    })
})


//displayGiphy

describe("displayGiphy define", () => {

    test("that it exists", () => {
        expect(typeof displayGiphy).toBeDefined()
    })
})


describe("displayGiphy function", () => {

    test("that it is a function", () => {
        expect(typeof displayGiphy).toBe("function")
    })
})


//setFormsEventListeners

describe("setFormsEventListeners define", () => {

    test("that it exists", () => {
        expect(typeof setFormsEventListeners).toBeDefined()
    })
})

//setGiphyEventListeners
describe("setGiphyEventListeners define", () => {

    test("that it exists", () => {
        expect(typeof setGiphyEventListeners).toBeDefined()
    })
})


//searchGiphy
describe(" searchGiphy define", () => {

    test("that it exists", () => {
        expect(typeof searchGiphy).toBeDefined()
    })
})


describe("searchGiphy function", () => {
    test("that it is function", () => {
        expect(typeof searchGiphy).toBe("function")
    })
})
