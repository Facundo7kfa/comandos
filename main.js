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






// delegar misiones 

function comienzo() {
    let entrada = prompt("Bienvenido, ingrese el código de la misión:");
    while (entrada !== "") {
      switch (entrada) {
        case "mision11":
          alert("Usted eligió " + mision11.nombre);
          return mision11; 
        case "mision22":
          alert("Usted eligió " + mision22.nombre);
          return mision22; 
        case "mision33":
          alert("Usted eligió " + mision33.nombre);
          return mision33;
        default:
          alert("Código incorrecto");
          entrada = prompt("Ingrese el código de la misión:");
          break;
      }
    }
    
  }
  
  function mostrarMision(mision) {
    if (mision === mision11) {
      for (const ver in mision11) {
        alert(ver + ": " + mision11[ver]);
      }
    } else if (mision === mision22) {
      for (const ver in mision22) {
        alert(ver + ": " + mision22[ver]);
      }
    } else if (mision === mision33) {
      for (const ver in mision33) {
        alert(ver + ": " + mision33[ver]);
      }
    }
  }
  
  function cual() {
    alert("Ahora vea el listado y elija un comando para la misión:");
  
    alert("Comando 01:");
    for (let ver in comando01) {
      alert(ver + ": " + comando01[ver]);
    }
  
    alert("Comando 02:");
    for (let ver in comando02) {
      alert(ver + ": " + comando02[ver]);
    }
  
    alert("Comando 03:");
    for (let ver in comando03) {
      alert(ver + ": " + comando03[ver]);
    }
  
    alert("Comando 04:");
    for (let ver in comando04) {
      alert(ver + ": " + comando04[ver]);
    }
  
    alert("Comando 05:");
    for (let ver in comando05) {
      alert(ver + ": " + comando05[ver]);
    }
  
    alert("Ahora deberá elegir uno poniendo  el número correspondiente:");
    alert("1 = el Boina Verde, 2 = el Francotirador, 3 = el Marine");
    alert("4 = el Zapador y 5 = el Espía");
  
    let cualSoldado = prompt("Elija por conveniencia:");
   
   const misionYsoldado = [misionSeleccionada,{}]
  
    if (cualSoldado === "1") {
      misionYsoldado.push(comando01);
    } else if (cualSoldado === "2") {
      misionYsoldado.push(comando02);
    } else if (cualSoldado === "3") {
      misionYsoldado.push(comando03);
    } else if (cualSoldado === "4") {
      misionYsoldado.push(comando04);
    } else if (cualSoldado === "5") {
      misionYsoldado.push(comando05);
    } else {
      alert("Selección inválida");
    }
  

  }

  function crearMochila() {
    const mochilaBum = explosivos.filter(el => el.nombre.includes("bomba") || el.nombre.includes("granada"));
    
    const litrosPack = tambores.reduce((total, tambor) => total + tambor.litros, 0);
    
    const mochila = {
      armas: armas.map(arma => arma.nombre),
      cosas: cosas.map(cosa => cosa.nombre),
      explosivos: mochilaBum.map(explosivo => explosivo.nombre),
      litros: litrosPack
    };
    
    return mochila;
  }
  


  const misionSeleccionada = comienzo();
  if (misionSeleccionada) {
    mostrarMision(misionSeleccionada);
  }


cual()





  const miMochila = crearMochila();
  console.log(miMochila);
