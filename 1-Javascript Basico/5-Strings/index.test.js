import { describe, it, expect } from "vitest";

describe("Strings", () => {
  // Obtener la letra a de la palabra "Hola" y guardarla en "char"
  it("Caracter", () => {
    let str = "Hola";
    let char;
    char=str[3];
    expect(char).toBe("a");
  });

  //Comparar dos string, si son iguales sumarlos en una variable, sino la variable esta vacia ""
  it("Comparar strings", () => {
    let str1;
    let str2;
    let suma;
    str1="perro";
    str2="perro";
    if(str1===str2)
      {
        suma =str1+str2;
      }
    else{
        suma="";
    }  
    expect(suma).toBe("perroperro");

    let str3 = "cosa";
    if(str1===str3)
      {
        suma =str1+str2;
      }
    else{
        suma="";
    }  
    expect(suma).toBe("");
  });

  //Dado un string cualquiera, poner en mayuscula todos sus caracteres
  it("Mayuscula", () => {
    let str;
    str="gritando ando";
    str=str.toUpperCase();
    expect(str).toBe("GRITANDO ANDO");
  });
  //Poner en mayuscula solo la primera letra del string
  it("CamelCase", () => {
    let str;
    str="perro";
    str=str[0].toUpperCase()+str.slice(1);
    
    expect(str).toBe("Perro");
  });

  //Verificar si un string comienza con la palabra "Hola" o si termina con la palabra "Adios"
  it("Inico o Fin", () => {
    let str;
    let result;
    str="Hola como estas?,Bien?,Bueno.. Adios"
    result = str.startsWith("Hola")||str.endsWith("Adios");
    
    expect(result).toBe(true);
  });
  //Verificar que un string contenga la palabra "Mitad"
  it("Inlcuye", () => {
    let str;
    let result;
    str="Esta cadena contiene Mitad en la oracion";
    result=str.includes("Mitad");
    expect(result).toBe(true);
  });
  //Reemplazar todas las las ocurrencias de la palabra "cosa" en un string y reemplazarla por "hola"
  it("Reemplazo", () => {
    let str;
    str="cosa";
    str=str.replace(str,"hola");
    expect(str.includes("hola")).toBe(true);
  });
  //Dado un string, obtener del mismo la subcadena que comienza en el caracter 5 hasta el 10
  it("SubCadena", () => {
    let str;
    let subStr;
    str="Hola Josias"
    subStr =str.slice(5,10); 
    expect(subStr.length).toBe(5);
  });
  //Dado un string, obtener un nuevo array con todas sus palabras(Separadas por espacio)
  it("String en Array", () => {
    let str;
    let arr;
    str ="Hola Soy Josias";
    arr = str.split(" ");
    console.log(arr);
    expect(arr.length).toBeGreaterThan(0);
  });
});
