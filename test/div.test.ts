import { div } from "../src/div";

test("Test div 10/2 equals 5", () => {
    //Probar
    expect(div(10,2)).toBe(5);
});

//Prueba controlada del error
test("Test div 5/0 gives error", () => {
    //Probar
    expect(div(5,0)).toBe(Infinity);
});