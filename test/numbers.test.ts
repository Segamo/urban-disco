import { sum } from "../src/sum";

test("Test sum 5+5 (10) be greater than 5", () => {
    //Probar
    expect(sum(5,5)).toBeGreaterThan(5);
});

test("Test sum 5+5 (10) be greater or equal than 10", () => {
    //Probar
    expect(sum(5,5)).toBeGreaterThanOrEqual(10);
});

test("Test sum 5+5 (10) be less or equal than 4", () => {
    //Probar
    expect(sum(2,1)).toBeLessThan(4);
});