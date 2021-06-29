
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2, silver: 3}
}

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi a melhor jogadora a melhor mundo por ' + bestInTheWorld.length + ' vezes');


let cars = ['Saab', 'Volvo', 'BMW'];

//  O FOR/IN percorre por todas as index da array
for (let index in cars) {
  console.log(cars[index]);
}

// FOR/IN SEM ARRAY E COM UMA VARIÁVEL NOMAL
// IMPRIMINDO O TIPO DA VARIÁVEL E O SEU CONTEÚDO
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  // PERCORRE O NÚMERO DA POSIÇÃO DO ARRAY [IN]
  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let position in food){
      console.log(position);
  } 

  // PERCORRE PELO CONTEÚDO DO ARRAY [OF]
  let foodtoo = ['hamburguer', 'bife', 'acarajé'];
  for (let value of foodtoo) {
  console.log(value);
  } 
 //resultado: hamburguer, bife, acarajé;


 let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  // FOR PARA EXIBIR O CONTEÚDO DE names
  // FOR NÃO PERCORRE PELO [OF], SOMENTE PELO [IN]
  // EM VARIÁVEL, E NÃO PELO ARRAY
 for (let index in names){
    console.log('Olá ' + names[index] + '!');
}

// EXIBINDO O MODELO, A MARCA E O ANO DO CARRO
 let cars = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let index in cars){
      console.log(index, cars[index]);
  }

  // RESULTADO
  // model A3 Sedan
  // manufacturer Audi
  // year 2020

 /* let a = 10;
  let b = 15;
  
    function sum(a, b){
        return a + b;
    } */