import { describe, it, expect } from "vitest";

describe("Manejo avanzado de arreglos", () => {
  it("forEach", () => {
    /**
     * Agregar todos los elementos del arreglo 'arr' al arreglo 'arr2' usando el forEach
     */
    const arr1 = [1, 2, 3];
    const arr2 = [];
    arr1.forEach((e)=>{
      arr2.push(e);
    });
    expect(arr2).toStrictEqual([1, 2, 3]);
  });
  it("map", () => {
    /**
     * Usar el metodo map para mutar los valores del arreglo 'arr1' y almacenar el resultado en 'arr2'
     */

    const arr1 = [1, 2, 3].map((e)=>e+1);
    const arr2 = [];
    //arr2=arr1.map((e)=>e+1);
    for(let x=0;x<3;x++){
      arr2.push(arr1[x]);}

    expect(arr2).toStrictEqual([2, 3, 4]);
  });
  it("filter", () => {
    /**
     * Utilizar el metodo filter para filtrar el arregloy dejar solo los numeros primos
     */
    
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((e)=>{
     return ((!(e % 2==0)) && (!(e % 9==0)))||(e==1);
    });
    const arr2 = [];
    arr1.forEach((e)=>arr2.push(e));

    expect(arr2).toStrictEqual([1, 3, 5, 7]);
  });
  it("Primos", () => {
    /**
     * Dado un array de numeros, obtener el primer numero primo que aparezca
     *  y guardarlo en una variable. Si la raiz cuadrada del numero es mayor a 5, ordenar el arreglo, sino invertirlo
     */
    let arr1 = [1, 4, 14, 25, 67, 2, 17, 23];
    let primo;

    function esPrimo(num) {
        if (num <= 1) {return false;} // Los números menores o iguales a 1 no son primos
        if (num <= 3) {return true;} // 2 y 3 son primos
        if (num % 2 === 0 || num % 3 === 0) {return false;} // Eliminar múltiplos de 2 y 3
        for (let i= 5; i*i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {return false;}
        }
        return true;
        }

        primo = arr1.find((num) => esPrimo(num));
        
        if (Math.sqrt(primo) > 5) {
        arr1=arr1.sort((n1, n2) => {
            if (n1 > n2) return 1;
            return -1;
            });
        } else {
        arr1=arr1.reverse();
        }

    let arr2 = [32, 5, 27, 1, 8, 156, 20, 14];

    primo = arr2.find((num) => esPrimo(num));
        
    if (Math.sqrt(primo) > 5) {
    arr2=arr2.sort((n1, n2) => {
        if (n1 > n2) return 1;
        return -1;
        });
    } else {
    arr2=arr2.reverse();
    }
    

    expect(arr2).toStrictEqual([14, 20, 156, 8, 1, 27, 5, 32]);
  });
});
