import Turma from './Turma.js';

export default class TurmaPresencial extends Turma {
  constructor ({ codigo, nota, frequencia }) {
    super({ codigo, nota });
    this.frequencia = frequencia;
  }

  aprovado () {
    if (super.aprovado() && this.frequencia >= 0.75) return true;
    if (this.nota > 8 && this.frequencia >= 0.5) return true;
    return false;
  }
}
