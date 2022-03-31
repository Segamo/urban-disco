const array = ["value1","value2","value3"];

test("Const array contains value2", () => {
    expect(array).toContain("value2");
});

test("Const array contains value3", () => {
    expect(array).toContain("value3");
});

test("Const array not contains UNAC", () => {
    expect(array).not.toContain("UNAC");
});
