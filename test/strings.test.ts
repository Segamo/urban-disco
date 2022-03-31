const anything = "UNAC";
const anything1 = "UnAc";

test("UNAC contains UN", () => {
    //Probar
    expect(anything).toMatch(/UN/);
});

test("UNAC does not contain a P", () => {
    //Probar
    expect(anything).not.toMatch(/P/);
});

test("UnAc containt n", () => {
    //Probar
    expect(anything1).toMatch(/n/);
});
