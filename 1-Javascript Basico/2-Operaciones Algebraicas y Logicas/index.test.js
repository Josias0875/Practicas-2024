import { describe, it, expect } from "vitest";

describe("Operaciones Algebraicas", () => {
  // asignar los valores necesarios para que las operaciones den el resultado esperado
  it("Suma", () => {
    let x;
    let y;
    let z;
    x=2;
    y=3;
    z=5;
    expect(x + y).toBe(5);
    expect(x + y + z).toBe(10);
  });
  it("Resta", () => {
    let x;
    let y;
    let z;
    x=7;
    y=2;
    z=-5;
    expect(x - y).toBe(5);
    expect(x - y - z).toBe(10);
  });
  it("Multiplicacion", () => {
    let x;
    let y;
    let z;
    x=2; 
    y=5;
    z=10;
    expect(x * y).toBe(10);
    expect(x * y * z).toBe(100);
  });
  it("Division", () => {
    let x;
    let y;
    let z;
    x=20;
    y=2;
    z=2;
    expect(x / y).toBe(10);
    expect(x / y / z).toBe(5);
  });
  it("Resto", () => {
    let x;
    let y;
    x=12;
    y=5;
    expect(x % y).toBe(2);
  });
  it("Operadores Unarios", () => {
    let x = 0;
    x++;
    // Utilizar un operador unario para cambiar el valor de x
    expect(x).toBe(1);
  });
});

describe("Operaciones Logicas", () => {
  it("OR", () => {
    let x;
    let y;
    x=true;
    y=true;
    expect(x || y).toBe(true);
  });
  it("AND", () => {
    let x;
    let y;
    x=true;
    y=true;
    expect(x && y).toBe(true);
  });
  it("NOT", () => {
    let x = false;
    let y = !x;
    y=!y;
    expect(y).toBe(false);
  });
  it("Comparaciones", () => {
    let x;
    let y;
    let z;
    x=5;
    y=3;
    z=4;
    expect(x > 4).toBe(true);
    expect(y < 5).toBe(true);
    expect(z >= 3).toBe(true);
    x=3;
    expect(x == "3").toBe(true);
    expect(x === 3).toBe(true);
  });

  it("Short Circuit Evaluation", () => {
    let x = 10;
    let y;
    y=false;
    expect(y || x).toBe(10);
    expect(y && x).toBe(false);
  });
});
