  class comandos {
        constructor(play){
            this.nombre = play.nombre;
            this.alias = play.alias
            this.mochila = play.mochila;
            this.capacidad = play.capacidad;
            this.altura = play.altura;

    }
        hablar(){
    console.log("hola soy " + this.nombre + "tambien conocido como " + this.alias );
    }
    
    accion(){
    
    }
}

class mision {
    constructor(play){
        this.nombre = play.nombre;
        this.objetivo = play.objetivo;
        this.tipo = play.tipo;
        this.sueldo = play.sueldo;
        
    }
}
// Soldados - Comandos 

const comando01 = new comandos ({
        nombre:"Jack Butcher O'Hara",
        alias:"el Boina Verde",
        objetoYarma:["cuchillo", "pistola"],
        capacidad: "matar rapido y silencioso ",
        altura: 2.10,
    });

//console.log(comando01.objetoYarma[0])


const comando02 = new comandos ({
        nombre:"Sir Francis Duke T. Woolridge ",
        alias:"el Francotirador",
        mochila:["Fusil de precisión"],
        capacidad: "Puede disparar a grandes distancias con su fusil, provocando una muerte segura y silenciosa. ",
        altura:1.80,
    });

const comando03 = new comandos ({
        nombre:"James Fins Blackwood",
        alias:"el Marine",
        mochila:["arpon y traje de buzo"],
        capacidad: "Puede bucear y mientras lo hace es imperceptible al enemigo, a menos que haya sido visto sumergiéndose",
        altura:1.70,
    });
const comando04 = new comandos ({
        nombre:" Thomas Fireman Hancock",
        alias:"el Zapador",
        mochila:["trampa para osos"],
        capacidad: "Cracion y manipulacion de bombas a nivel de un experto",
        altura:1.60,
    });

   console.log(comando04.hablar())

const comando05 = new comandos ({
        nombre:" René Frenchy Duchamp ",
        alias:"el Espiá",
        mochila:["inyección letal y uniforme de general nazi"],
        capacidad: "disfrazarse del enemigo ",
        altura: 1.78,
    });


//misiones________________________________________________________

const mision11 = new mision ({ 
            nombre :"Operación fantasma",
            objetivo: "robo de informacion y asesinatos silencioso ",
            tipo: "Espionaje",
            sueldo: 100000000000,
});

const mision22 = new mision ({ 
            nombre:"operacion tormenta roja ",
            objetivo:"mantener dominante el fuego en la sona sur de manera estrategica ",
            tipo:"Asedio",
            sueldo:90000000,
})




const mision33 = new mision ({
            nombre:"Operacion rueda rota",
            objetivo: "crear una cadena de bombas en todo el angar enemigo hubicada en el bosque norte",
            tipo:"infiltracion y ataque",
            sueldo:10000000,

})

console.log(mision22.nombre)

// Mochilas de misio__________________
const tambores =[
{nombre:"gasolina",litros:200},
{nombre:"gasolina", litros:10},
{nombre:"gasolina",litros:100}];

const armas = [ {nombre:"pistola"},
                {nombre:"subfusil"},
                {nombre:"ametralladora ligera"}];

const cosas= [{nombre:"radio"},
            {nombre:"veneno"},
            {nombre:"botiquin de medicamentos"},
            {nombre:"caja de herramientas"},
            {nombre: "cuchillo"},
            {nombre:"soga"},
            {nombre:"granada"}, 
            {nombre:"botella"},
            {nombre:"radio"},
            {nombre:"gaza"},
            {nombre:"llave maestra"}];

const explosivos= [{nombre:"granada de Humo"},
                    {nombre:"bomba reloj"},
                    {nombre:"granada"},
                    {nombre:"bomba c4"}];

const mochilaBum = explosivos.filter( (el)=>el.nombre.includes("bomba")|| el.nombre.includes("granada"))

litrosPack  = tambores.reduce((total,tambor) => total + tambor.litros, 0);


// delegar misiones 

function comienzo(){
    let entrada = prompt("Bienvenido ingrese el codigo de la mision ");
while( entrada !==" " ){
    switch (entrada) {
        case "mision11":
            alert("usted eligio " + mision11.nombre);
            continue;
        case "mision22":
            alert("usted eligio "+ mision22.nombre);
            continue;
        case "mision33":
            alert("usted eligio "+ mision33.nombre);
            continue;
        default:
            alert("codigo incorrrecto")
            entrada = prompt(" ingrese el codigo de la mision ");
            break;
        }
    }
return entrada 
}

function mostrarSoldados (entrada){
if (entrada = mision11 ) { for ( const mostrar in mision11 )
        { alert(mostrar + ": " + mision11[mostrar] );
    }
}
else if (entrada= mision22){  for( const ver in mision22)
    { alert( ver + ":" + mision22[ver]);}

}
else if (entrada= mision33){ for ( const ver in mision33)
{ alert( ver+ ":" + mision33[ver]);}

}

}

mostrarSoldado ()