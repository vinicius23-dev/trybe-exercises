//Conteúdos
//Parte 2
const name = 'Carolina';
const birthCity = "Nilopolis";
let birthYear = "1992";

console.log(name);
console.log(birthCity);
console.log(birthYear);

//Parte 3
let patientId = '50';
let isEnrolled = true;
const patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientAge);
console.log(typeof patientId);

let base = 5;
let altura = 8;
let area = base*altura;
let perimetro = (base * 2) + (altura * 2);
console.log('Área:', area);
console.log('Perímetro:', perimetro);

//Parte 4
let nota = 70;
if(nota >= 80){
    console.log("Parabéns, você foi aprovada(o)!");
}else if(nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera!");
}else if(nota < 60){
    console.log("Você foi reprovado!");
}

//Parte 5
let resultado = 'aprovada';

switch(resultado){
    case "aprovada":
    console.log("Você foi aprovada!");
    break;

    case "reprovada":
    console.log("Você foi reprovada!");
    break;

    case "lista":
    console.log("Você está na nossa lista!");
    break;

    default:
        console.log("valor desconhecido");
        break;
}
