let Espectadores = require('../modulos/espectadores')


let lista = {
  mediaIdade: function (array) {
    let media = 0;
    let qtdOpina = 0;
    let idadeSoma = 0;

    for (i = 0; i < array.length; i++) {
      var Aux = array[i];
      if (Aux.opniao === 3) {
        qtdOpina++;
        idadeSoma += Aux.idade;
      }
    }
    media = idadeSoma / qtdOpina;
    return media
  },

  qtdRegular: function (array) {
    let qtd = 0;
    for (i = 0; i < array.length; i++) {
      var Aux = array[i];
      if (Aux.opniao === 1) {
        qtd++
      }
    }
    return qtd;
  },

  bomPercent: function (array) {
    let qtd = 0;
    for (i = 0; i < array.length; i++) {
      var Aux = array[i];
      if (Aux.opniao === 2) {
        qtd++
      }
    }
    return (qtd * 100) / array.length
  }
}

console.log(lista.mediaIdade(Espectadores));
console.log(lista.qtdRegular(Espectadores));
console.log(lista.bomPercent(Espectadores));

