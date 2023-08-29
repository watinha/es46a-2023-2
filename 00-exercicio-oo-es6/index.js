import Aluno from './src/Aluno.js';
import Turma from './src/Turma.js';
import TurmaPresencial from './src/TurmaPresencial.js';

let nome = 'Willian',
    login = 'wwatanabe',
    ra = 'RADSFDSOI',
    a = new Aluno({ nome, login, ra});

a.add_turma(new Turma({ codigo: 't1', nota: 6 }));
a.add_turma(new Turma({ codigo: 't2', nota: 5 }));
a.add_turma(new Turma({ codigo: 't3', nota: 3 }));
a.add_turma(new Turma({ codigo: 't4', nota: 9 }));

a.add_turma(new TurmaPresencial({ codigo: 'p1', nota: 6, frequencia: 0.5 }));
a.add_turma(new TurmaPresencial({ codigo: 'p2', nota: 5, frequencia: 0.7 }));
a.add_turma(new TurmaPresencial({ codigo: 'p3', nota: 3, frequencia: 0.75 }));
a.add_turma(new TurmaPresencial({ codigo: 'p4', nota: 9, frequencia: 0.8 }));
a.add_turma(new TurmaPresencial({ codigo: 'p5', nota: 9, frequencia: 0.5 }));
a.add_turma(new TurmaPresencial({ codigo: 'p5', nota: 9, frequencia: 0.4 }));

a.report();
