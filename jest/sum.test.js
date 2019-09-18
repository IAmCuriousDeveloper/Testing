const sum = require("./sum");

test("should adds 1+2 equals to 3", () => {
  expect(sum(1, 2)).toBe(3);
});

//test("name of the test",(cb)=>{
//expect(your original function (with arguments )/or just an expression).toBe(output you want to be )
//})
