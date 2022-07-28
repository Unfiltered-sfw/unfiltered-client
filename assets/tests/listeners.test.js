/**
 * @jest-environment jsdom
 */

const {setFormsEventListeners, setGiphyEventListeners, setReactionListeners} = require('../listeners');

describe ("Checks if ", () => { 
    test('setFormsEventListeners is a function', () => {
        expect(typeof setFormsEventListeners).toBe("function")
    });
    test('setGiphyEventListeners is a function', () => {
        expect(typeof setGiphyEventListeners).toBe("function")
    });
    test('setReactionListeners is a function', () => {
        expect(typeof setReactionListeners).toBe("function")
    });

});