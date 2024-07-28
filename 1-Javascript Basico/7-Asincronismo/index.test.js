import { describe, it, expect } from "vitest";

describe("asincronismo", () => {
  it("Promesas", () => {
    /**
     * Cree una promesa que se cumpla pasados 3seg
     */

    const promise = new Promise((resulve)=>setTimeout(()=>resulve("success"),3000));


    promise.then((res) => expect(res).toBe("success"));
  });
  it("Async Await", async () => {
    /**
     * Consuma la misma promesa del test anterior pero utilizando async await y almacene el resultado en 'res'
     */
    const promise = new Promise((resulve)=>setTimeout(()=>resulve("success"),3000));
    let res;
    const consumirPromesa = async()=>{
    await promise.then((rese)=>res=rese);
    
    expect(res).toBe("success");
  }
    consumirPromesa();
    
  });
  it("Consumo de API", async () => {
    /**
     * Use fetch() para consumir la api de "https://www.thecocktaildb.com/" y consulte la informacion del trago "Gin and Tonic"
     * NOTA: para buscar el trago por nombre utilice el siguienre parametro de busqueda: "Gin%20And%20Tonic"
     */

    const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Gin%20And%20Tonic";
    
    const Asincronica = async function () {
    // response
    let res = await (await fetch(URL)).json();
    // cuerpo de la response. res.json()
    let data= res.drinks[0];
    //data=data.drinks[0];
    //console.log(data);
    //console.log(data.idDrink);
    //console.log(data.strDrink);
    expect(data.idDrink).toBe("11403");
    expect(data.strDrink).toBe("Gin And Tonic");
    }
    Asincronica();
    
  });
  it("Manejo de expeciones", async () => {
    /**
     * En caso que la promesa fracase guarde ":(" en la variable res. En caso de exito guarde ":)". Idem en caso de exito. Use Async Await.
     */

    const promise = new Promise((resolve, reject) => {
      Math.random() > 0.5 ? resolve("Buena suerte") : reject("Mala suerte");
    });
    const Asinc= (j)=>{
      if(j==="Buena suerte") j=":)";
      else if(j==="Mala suerte") j=":(";
      return j;
    }
    const Asincronismo= async()=>{
      try {
        resul=await (promise.then((pro)=>pro));
     }catch(err){
      resul=err;
     }; 
  const res=Asinc(resul); 
  
    expect(res == ":)" || res == ":(").toBe(true);
  
}
Asincronismo();
  });
});
