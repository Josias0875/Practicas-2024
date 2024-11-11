const botones = document.querySelectorAll(".boton");

const botone = document.querySelector(".botone");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
let ultimoCaracter;
botone.addEventListener("click", () => {
    console.log(botone.innerHTML);
    if ((botone.innerHTML)=='='){
        p1.innerHTML=p2.innerHTML;
        p2.innerHTML=eval(p2.innerHTML);
        
    }
    
});
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        console.log(boton.innerHTML);
        ultimoCaracter = p2.innerHTML.slice(-1); //basicamente devuelve el ultimocaracter del string p2

        if ((boton.innerHTML)=='c'){ //tecla para eliminar todo lo que hay en la pantalla p2
            p2.innerHTML='';
        }
        else if(p2.innerHTML=='NaN'||p2.innerHTML=='Infinity'){
            alert("Precione 'c' para comenzar devuelta")
            return;
        }
        else if((boton.innerHTML)=='&lt;-') //boton para eliminar solo  un numero
        {
            console.log("Llegue al slice");
            
            p2.innerHTML=p2.innerHTML.slice(0, -1);
        }
        else if(ultimoCaracter=='-'||ultimoCaracter=='+'||ultimoCaracter=='*'||ultimoCaracter=='/'){//para que se superpongan los operadores aritméticos
            
            if(boton.innerHTML=='0'||boton.innerHTML=='1'||boton.innerHTML=='2'||boton.innerHTML=='3'||boton.innerHTML=='4'||boton.innerHTML=='5'||boton.innerHTML=='6'||boton.innerHTML=='7'||boton.innerHTML=='8'||boton.innerHTML=='9'||boton.innerHTML=='('||boton.innerHTML==')')//para que no me borre el operador aritmético si lo que continua son numeros o parentesis
            {
                p2.innerHTML=p2.innerHTML+boton.innerHTML;
            }
            else {
                p2.innerHTML=p2.innerHTML.slice(0, -1);
                p2.innerHTML=p2.innerHTML+boton.innerHTML;
                
            }
            
        }
        
        else {
            p2.innerHTML=p2.innerHTML+boton.innerHTML;
        }
    });
});