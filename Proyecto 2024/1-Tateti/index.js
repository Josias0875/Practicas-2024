//arma la matriz inicial
const matriz = () => {
  let arr1 = ["","",""];
  let arr2 = ["","",""];
  let arr3 = ["","",""];
  let matrix =[arr1,arr2,arr3];
  return matrix;
}
//verifica si gano ...
const gano = (tablero,word) => { 
  
if((tablero[0][0]===word)&&(tablero[1][1]===word)&&(tablero[2][2]===word)) return "gano"; //en diagonal

if((tablero[0][2]===word)&&(tablero[1][1]===word)&&(tablero[2][0]===word)) return "gano"; //en diagonal
//verifica si gano en vertical o horizontal
for(let y=0;y<=2;y++){

  if((tablero[y][0]===word)&&(tablero[y][1]===word)&&(tablero[y][2]===word)) return "gano"; //horizontal
  if((tablero[0][y]===word)&&(tablero[1][y]===word)&&(tablero[2][y]===word)) return "gano"; //vertical

}
return "no gano";
}

const texto = document.querySelector("#texto");
texto.addEventListener("click", () => {
  texto.innerHTML = "Turno de jugador "+ jugador;
});

const botones = document.querySelectorAll(".boton");
let turno=1;
let letra="X";
let tablero=matriz();
let ganador;

      botones.forEach((boton,i) => {

        boton.addEventListener("click", () => {
          
          if(boton.innerHTML==="X"|| boton.innerHTML==="O"){
            alert("La casilla ya fue seleccionada ,seleccione otra");
            return;
          }

          boton.innerHTML = letra;

          switch(boton.id)
          {
            case "1":
               tablero[0][0]=letra;
            break;
            case "2":
               tablero[0][1]=letra;
            break;
            case "3":
               tablero[0][2]=letra;
            break;
            case "4":
               tablero[1][0]=letra;
            break;
            case "5":
               tablero[1][1]=letra;
            break;
            case "6":
               tablero[1][2]=letra;
            break;
            case "7":
               tablero[2][0]=letra;
            break;
            case "8":
               tablero[2][1]=letra;
            break;
            case "9":
               tablero[2][2]=letra;
            break;
          }
          ganador=gano(tablero,letra);

          if(ganador==="gano"){
            alert(`El jugador ${letra} Gano`);
            return;
          }

          turno++;
          if(turno===10){
            alert("Hubo un empate");
            return;
          }

          if( turno%2 == 0 ) {
            letra="O";
            
          }
          else {
            letra="X";
          }
          texto.innerHTML = "Turno de jugador "+ letra;
        });
       
      });