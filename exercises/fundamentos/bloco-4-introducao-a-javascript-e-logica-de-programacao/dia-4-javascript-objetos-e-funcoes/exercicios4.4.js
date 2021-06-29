
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  let infoSecond = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  console.log('Bem-vinda', info.personagem);
  console.log(info.recorrente);

  // IMPRIMINDO AS CHAVES/TIPOS DO CONTEÚDO
  for (let index in info){
      console.log(index);
  }

  // IMPRIMINDO O CONTEÚDO DA VARIÁVEL
  for (let index in info){
    console.log(info[index]);
}
  // IMPRIMINDO O CONTEÚDO DAS DUAS VARIÁVEIS JUNTOS
  for (let index in info && infoSecond){
    console.log(info[index] + ' e ' + infoSecond[index])
}

