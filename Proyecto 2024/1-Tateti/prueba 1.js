
  
  //arma la matriz inicial
  const matriz = () => {
    let arr1 = ["","",""];
    let arr2 = ["","",""];
    let arr3 = ["","",""];
    let matrix =[arr1,arr2,arr3];
    return matrix;
  }
  //79
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
  
  //verifica si se selcciono una casilla ya ocupada o si se selcciono una casilla que supere la matriz 3x3
  const con = (tablero,x,y) => { 
    if(x>2||y>2||x<0||y<0) return true; //verifica si se selecciono una casilla que supera la matriz 3x3 ,si la supera el programa continua preguntando las coordenadas 
  
    if(tablero[y][x]=="") return false; //verifica si se selcciono una casilla ya ocupada
    else return true;
  }
  
  //Ejecuta las acciones necesarias para jugar el Ta-Te-Ti
  const jugar = async() => { 
    let tablero=matriz(); //crea matriz 3x3 en la cual se colocara la X o la O
    let x,y; //posicion en el tablero
    let jugador; //player 1 o 2
    let letra;//letra X o Y
    let z=1; //turno
    let ganador = true; //gano?
    let continuar=true; //continua preguntando la posicion del tablero?
  
    console.table( tablero );
    
    while((z<=9) && (ganador===true) )
    {
      continuar=true;
      if( z%2 == 0 ) {
        letra="O";
        jugador=2;
      }
      else {
        letra="X";
        jugador=1;
      }
  
      console.log(`Turno ${z}`);
      console.log(`Jugador ${jugador}`);  
    
      while(continuar=== true) {
        x=await readline.question("Seleccione en que columna desea jugar su turno:" );
        y=await readline.question("Seleccione en que fila desea jugar su turno:" );
        continuar=con(tablero,x,y);
        
        if(continuar===true) {
          console.clear();
          console.table( tablero );
          console.error("Se selcciono una casilla ya ocupada o se selcciono una casilla que supere la matriz 3x3");
          console.error("Vuelva a seleccionar una casilla que se encuentre en la matriz 3x3 y que no se halle ocupada");
          console.log( `Turno ${z}` );
          console.log( `Jugador ${jugador}` ); 
        }
      }
  
      tablero[y][x] = letra; //guarda en la casilla seleccionada el valor de X o O dependiendo del jugador que este jugando este turno 
      readline.pause();
      console.table( tablero );
    
      if((gano(tablero,letra))==="gano") {
        console.log(`Felicidades jugador ${jugador} ,ganaste la partida`);
        ganador=false;
      }
      else if( z==9 ) console.log("El juego quedo en empate") ;
      z++;
    }
  }
  
  jugar();
  
  //nos falta que no se superponga y que nos pido otras coordenadas si la coordenada enviada es menor o mayor a la matriz 3x3