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

for(let i = 0; i < 2; i++){

    tuNombre= prompt("Ingresar su nombre");
    tuEdad= parseInt(prompt("Ingresar su edad"));
    if(tuEdad > 17){
                alert("Puede entrar");
    }else{
                alert("Debe entrar con un adulto");
    }
    tuEntrada= prompt("Tipo de entrada: 2D, 3D o 4D");
    tuFormaDePago= prompt("Forma de pago: efectivo, credito o debito");

}



const persona1 = new Persona(
    {
        tuNombre,
        tuEdad,
        tuEntrada,
        tuFormaDePago,
    }
);

const persona2 = new Persona(
    {
        tuNombre,
        tuEdad,
        tuEntrada,
        tuFormaDePago,
    }
)

console.log(persona1);
console.log(persona2);





