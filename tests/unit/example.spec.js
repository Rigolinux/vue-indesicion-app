describe("examplcomponent", () => {
  test("Debe de ser mayor a 10", () => {
    // Inicialización
    let value = 10;

    // Estímulo
    value = 11;

    // Observar el comportamiento
    expect(value).toBeGreaterThan(10);
  });
});
