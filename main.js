// /*ENTRADAS AL CINE*/

function saludar(){
    alert("Bienvenido/a");
}

class Persona{
    constructor(info){
        this.nombre = info.tuNombre;
        this.edad = info.tuEdad;
        this.entrada = info.tuEntrada;
        this.formaDePago = info.tuFormaDePago;
    }
}

saludar();

let tuNombre;
let tuEdad;
let tuEntrada;
let tuFormaDePago;
const arrayPersonas = []

for(let i = 0; i < 10; i++){

    tuNombre= prompt("Ingresar su nombre");
    tuEdad= parseInt(prompt("Ingresar su edad"));
    if(tuEdad > 17){
                alert("Puede entrar");
    }else{
                alert("Debe entrar con un adulto");
    }
    tuEntrada= prompt("Tipo de entrada: 2D, 3D o 4D");
    tuFormaDePago= prompt("Forma de pago: efectivo, credito o debito");

    const persona = new Persona(
        {tuNombre,
        tuEdad,
        tuEntrada,
        tuFormaDePago,}
    );
    console.log(persona);
    arrayPersonas.push(persona);
}

console.log(arrayPersonas[3].nombre);

arrayPersonas.reverse();
console.log(arrayPersonas);











