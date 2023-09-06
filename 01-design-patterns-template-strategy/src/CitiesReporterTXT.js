import CitiesReporter from './CitiesReporter.js';

export default class CitiesReporterTXT extends CitiesReporter {

  _output () {
    let txt = `Relatório de Nomes de Cidades
  =============================\n`;

    for (let i = 0; i < this._cities.length; i++) {
      txt += `- ${this._cities[i]['Nome']}\n`;
    }

    return txt;
  }

}
