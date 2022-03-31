const n = null;
const number = 0;
const notTrue = false;
const notFalse = true;

test("Test n to be null", () => {
    //Probar
    expect(n).toBeNull();
});

test("Test n to be defined", () => {
    //Probar
    expect(n).toBeDefined();
});

test("Test notTrue to be false", () => {
    //Probar
    expect(notTrue).toBeFalsy();
});

test("Test notFalse to be true", () => {
    //Probar
    expect(notFalse).toBeTruthy();
});
