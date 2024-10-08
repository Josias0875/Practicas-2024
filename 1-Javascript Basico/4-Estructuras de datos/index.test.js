import { describe, it, expect } from "vitest";

describe("Arreglos", () => {
  it("Declaracion de arreglos", () => {
    let arr = [1, 2, 3, 4];
    let x, y, z;
    x=arr[2];
    y=0;
    z=arr[1];
    expect(4).toBe(arr[x]);
    expect(1).toBe(arr[y]);
    expect(3).toBe(arr[z]);
  });
  it("Agregar elementos", () => {
    let arr = [];

    // agregar x
    let x = 1;
    arr.push(x);
    expect(arr).toStrictEqual([1]);

    // agregar y
    let y = 2;
    arr.push(y);
    expect(arr).toStrictEqual([1, 2]);

    // agregar z
    let z = 3;
    arr.push(z);
    expect(arr).toStrictEqual([1, 2, 3]);
  });
  it("Eliminar elementos", () => {
    let arr = [1, 2, 3];

    arr.splice(2,1); // eliminar el ultimo elemento
    
    expect(arr).toStrictEqual([1, 2]);

    let arr2 = [1, 2, 3];
 
    arr2.splice(1,1); // eliminar el 2
    
    expect(arr2).toStrictEqual([1, 3]);
  });
  it("Largo de un arreglo", () => {
    let arr = [];
    arr.push(1);
    arr.push(2);
    arr.push(3);
    // agregar los elementos necsarios para que funcione

    expect(arr.length).toBe(3);
  });
});
describe("Objetos", () => {
  it("Declaracion de objetos", () => {
    let persona = {
      nombre: "juan",
      edad: 20,
    };

    expect(persona.nombre).toBe("juan");

    // cambiar el nombre
    persona.nombre ="roberto";
    expect(persona.nombre).toBe("roberto");
  });
  it("Agregar propiedades", () => {
    let persona = {
      nombre: "juan",
      edad: 20,
    };
    persona.apellido ="Perez";
    expect(persona.apellido).toBe("Perez");
  });
});
describe("Desestructuracion", () => {
  it("Desestructuracion de arreglos", () => {
    const arr = [];
    arr.push(10);
    arr.push(5);
    const [x, y] = [...arr];

    expect(x).toBe(10);
    expect(y).toBe(5);
  });
  it("Desestructuracion de objetos", () => {
    const persona = {};
    persona.nombre ="juan";
    persona.edad = 12;
    const { nombre, edad } = persona;

    expect(nombre).toBe("juan");
  });
});
