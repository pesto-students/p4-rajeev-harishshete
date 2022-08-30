const mathOperations = require('./Week5Asignment4.js');

test('Testing For Addition',()=>{
    expect(mathOperations.sum(5,5)).toBe(10);
});

test('Testing For Substraction',()=>{
    expect(mathOperations.diff(10,5)).toBe(5);
});

test('Testing For Multipliation',()=>{
    expect(mathOperations.product(5,5)).toBe(25);
});



