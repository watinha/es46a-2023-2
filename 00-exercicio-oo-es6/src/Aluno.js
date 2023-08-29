export default class Aluno {
  #turmas = [];

  constructor ({ nome, login, ra }) {
    this.nome = nome;
    this.login = login;
    this.ra = ra;
  }

  add_turma (turma) { this.#turmas.push(turma); }

  report () {
    console.log(`Aluno: ${this.nome} (RA: ${this.ra})`);
    this.#turmas.forEach((turma) => {
      console.log(`- ${turma.codigo} - Nota: ${turma.nota} - Frequência: ${turma.frequencia} - ${turma.aprovado()}`);
    });
  }
}
