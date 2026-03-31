class Exame {
  constructor(peso, gabarito) {
    this.peso = peso;
    this.gabarito = gabarito;
    this.alunos = [];
    this.medias = [];
  }
  media() {
    for (const aluno in this.alunos) {
      let media = 0;
      for (const indice in this.gabarito) {
        if (this.alunos[aluno].resposta[indice] === this.gabarito[indice]) {
          media += this.peso[indice];
        }
      }
      let estudante = { aluno: this.alunos[aluno].aluno, media: media };
      this.medias.push(estudante);
    }
  }
  add(aluno) {
    this.alunos.push(aluno);
  }
  avg() {
    let media = 0;
    for (const aluno in this.alunos) {
      for (const indice in this.gabarito) {
        if (this.alunos[aluno].resposta[indice] === this.gabarito[indice]) {
          media += this.peso[indice];
        }
      }
    }
    media = media / Object.keys(this.alunos).length;
    return `A média de notas da turma é ${media}`;
  }
  lt(nota) {
    let retorno = [];
    for (const aluno in this.medias) {
      if (this.medias[aluno].media < nota) {
        retorno.push(Object.values(this.medias[aluno]));
      }
    }
    return retorno;
  }
  gt(nota) {
    let retorno = [];
    for (const aluno in this.medias) {
      if (this.medias[aluno].media > nota) {
        retorno.push(Object.values(this.medias[aluno]));
      }
    }
    return retorno;
  }
  min(qtd) {
    let retorno = [];
    for (let i = 0; i < qtd; i++) {
      let menor = 10;
      let aluno_encontrado
      for (const aluno in this.medias) {
        if (this.medias[aluno].media <= menor && !retorno.includes(this.medias[aluno])) {
          menor = this.medias[aluno].media;
          aluno_encontrado = this.medias[aluno];
        }
      }
      if (aluno_encontrado != undefined){
        retorno.push(aluno_encontrado);
      }
      
    }
    for (const indice in retorno){
      retorno[indice] = Object.values(retorno[indice])
    }
    return retorno;
  }
  max(qtd) {
    let retorno = [];
    for (let i = 0; i < qtd; i++) {
      let maior = 0;
      let aluno_encontrado
      for (const aluno in this.medias) {
        if (this.medias[aluno].media >= maior && !retorno.includes(this.medias[aluno])) {
          maior = this.medias[aluno].media;
          aluno_encontrado = this.medias[aluno];
        }
      }
      if (aluno_encontrado != undefined){
        retorno.push(aluno_encontrado);
      }
      
    }
    for (const indice in retorno){
      retorno[indice] = Object.values(retorno[indice])
    }
    return retorno;
  }
}

//Programa Principal (PP)
const pw2 = new Exame([2, 2, 2, 2, 2], ["a", "b", "c", "d", "e"]);

pw2.add({ aluno: "Diogo", resposta: ["a", "d", "c", "d", "e"] });
pw2.add({ aluno: "Lemuel", resposta: ["a", "b", "c", "d", "e"] });
pw2.add({ aluno: "Vinicius", resposta: ["a", "c", "c", "d", "e"] });
pw2.add({ aluno: "Renan", resposta: ["a", "b", "c", "e", "e"] });
pw2.add({ aluno: "Jose_Carlos", resposta: ["a", "b", "c", "d", "e"] });
pw2.add({ aluno: "Ryan", resposta: ["a", "b", "c", "d", "e"] });
pw2.add({ aluno: "Lucas", resposta: ["a", "b", "d", "d", "e"] });


// Média das notas
console.log(pw2.avg());
//funçâo media é necessaria para todas as exceto avg rodarem
pw2.media();

// Vetor com três menores notas
console.log(pw2.min(3));

// Vetor com cinco maiores notas
console.log(pw2.max(5));

// Vetor com todas as notas menores do que 9,0
console.log(pw2.lt(9));

// Vetor com todas as notas maiores do que 7,0
console.log(pw2.gt(7));
