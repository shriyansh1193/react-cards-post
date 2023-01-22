import sum from './ReactTest.js';

it("When a & b both are numbers for input ", () => {
    const result = sum( 5 , 5 );
    // result === 10
    expect(result).toBe(10);
});

it("When a & b both are Strings for input ", () => {
    const result = sum( "5" , "5" );
    expect(result).toBe(10);
});

// Assertions in React
describe('Addition', () => {
    it('We know that 2 + 2 makes 4', () => {
        expect( 2 + 2 ).toBe(4);
    })

    // test('We know that 2 + 2 makes 4', () => {
    //     expect( 2 + 2 ).toBe(4);
    // })
})

describe('Subtraction', () => {
    it('We know that 10 - 5 makes 5', () => {
        expect( 10 - 5 ).toBe(5);
    })
})

describe('Multiplication', () => {
    it('We know that 5 * 2 makes 10', () => {
        expect( 5 * 2 ).toBe(10);
    })
})

describe('Division', () => {
    it('We know that 10 / 2 makes 5', () => {
        expect( 10 / 2 ).toBe(5);
    })
})

describe('Modulus', () => {
    it('We know that 10 % 5 makes 0', () => {
        expect( 10 % 5 ).toBe(0);
    })
})