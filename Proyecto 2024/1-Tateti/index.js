//arma la matriz inicial
const matriz = () => {
  let arr1 = ["","",""];
  let arr2 = ["","",""];
  let arr3 = ["","",""];
  let matrix =[arr1,arr2,arr3];
  return matrix;
}

const texto = document.querySelector("#texto");

texto.addEventListener("click", () => {
  texto.innerHTML = "Turno de jugador "+ jugador;
});



const jugar = async() => { 
  let z=1;
  let jugador=0;
  tablero=matriz();
  while(z<=9)
  {
    jugador++;
    
  texto.innerHTML = "Turno de jugador "+ jugador;
    if( z%2 == 0 ) {
      letra="O";
    }
    else {
      letra="X";
    }
    
    const botones = document.querySelectorAll(".boton");
  
      botones.forEach((boton,i) => {
        boton.addEventListener("click", () => {
          boton.innerHTML = letra;
        });
        if(i<=2){tablero[i][0]=botones[i].innerHTML;}
        else if(i<=5){tablero[i-3][1]=botones[i].innerHTML;}
        else if(i<=8){tablero[i-6][2]=botones[i].innerHTML;}
      
      });

      
      

        for(let i=0;i<=9;i++)
        {
          
          if(i<=2){
            tablero[i][0]=botones[i].innerHTML;
            if(tablero[i][0]==Letra){
              i=10;
            }
          }
          
        else if(i<=5){
          tablero[i-3][2]=botones[i].innerHTML;
            if(tablero[i-3][2]==Letra){
              i=10;
            }
        }
        else if(i<=8){
          tablero[i-6][2]=botones[i].innerHTML;
            if(tablero[i-6][2]==Letra){
              i=10;
            }
            else if(i==8){i=0;}
        }

        }
        
    
    z++;
  }
}
jugar();