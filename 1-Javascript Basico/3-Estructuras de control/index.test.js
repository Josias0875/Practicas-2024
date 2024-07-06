import { describe, it, expect } from "vitest";

describe("Estructuras de control", () => {
  //Utilizar un IF para que "y" tome el valor 10 solo si x es verdadera
  it("IF", () => {
    let x;
    let y;
    x = 6;
    if (x > 5) {
      y = 10;
    }

    expect(y).toBe(10);
  });

  //Utilizar un IF para que "y" tome el valor 10 o 20 dependiendo de si "x" es verdadera o falsa
  it("IF ELSE", () => {
    let x;
    let y;
    x = 6;
    if (x >= 5) {
      y = 10;
    } else {
      y = 20;
    }
    expect(y).toBe(10);
  });

  //Utilizar un WHILE para que aumente el valor de "y" y disminuya el valor de "x", mientras "x" no sea 0
  it("WHILE", () => {
    let x;
    let y;
    y = 0;
    x = 10;
    while (x > 0) {
      x--;
      y++;
    }
    expect(y).toBe(10);
  });

  //Utilizar un FOR para que aumente el valor de "y" una cantidad de veces igual a "x"
  it("FOR", () => {
    let x;
    let y;
    y=0;
    for (x = 0; x < 10; x++) {
      y++;
    }
    expect(y).toBe(10);
  });

  // Utilizar un Switch para que dependiendo del valor que tenga "x"(del 1 al 7), se setee a la variable "y" como un dia de la semana (Lunes,Martes,etc)
  it("SWITCH", () => {
    let x;
    let y;
    x = 1;
    switch (x) {
      case 1:
        y = "Lunes";
        break;
      case 2:
        y = "Martes";
        break;
      case 3:
        y = "Miercoles";
        break;
      case 4:
        y = "Jueves";
        break;
      case 5:
        y = "Viernes";
        break;
      case 6:
        y = "Sabado";
        break;
      case 7:
        y = "Domingo";
        break;
      default:
        y = "No selecciono ningun dia de la semana";
    }
    expect(y).toBe("Lunes");
  });
});
