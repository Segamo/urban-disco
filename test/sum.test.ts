import { sum } from "../src/sum";

test("Test sum function 2+2 equals 4", () => {
    //Probar
    expect(sum(2,2)).toBe(4);
});

test("Test sum function 5+5 equals 10", () => {
    //Probar
    expect(sum(5,5)).toBe(10);
});