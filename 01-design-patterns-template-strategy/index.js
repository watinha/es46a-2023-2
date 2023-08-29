import * as fs from 'node:fs';

// ler o arquivo ./data/cidades-2.json
let cidades_json = fs.readFileSync('./data/cidades-2.json');

// fazer do JSON e gerar o vetor de nomes de cidades
let cidades_obj = JSON.parse(cidades_json);

// gerar o arquivo HTML
console.log('<!DOCTYPE HTML>');
console.log('<html>');
console.log('  <head>');
console.log('    <meta http-equiv="content-type" content="text/html; charset=utf-8" />');
console.log('    <title>Relatório de Nomes de Cidades</title>');
console.log('  </head>');
console.log('  <body>');
console.log('    <h1>Relatório de Nomes de Cidades</h1>');
console.log('    <ul>');

for (let i = 0; i < cidades_obj.length; i++) {
  console.log('     <li>' + cidades_obj[i]['Nome'] + '</li>');
}

console.log('    </ul>');
console.log('  </body>');
console.log('</html>');
