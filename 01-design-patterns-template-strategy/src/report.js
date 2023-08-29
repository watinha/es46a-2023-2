import * as fs from 'node:fs';

// ler o arquivo ./data/cidades-2.json
function ler_cidades (caminho) {
  return fs.readFileSync(caminho);
}

// fazer do JSON e gerar o vetor de nomes de cidades
function parse_json (cidades_json) {
  return JSON.parse(cidades_json);
}

// gerar o arquivo HTML
function reportar_html (cidades) {
  console.log('<!DOCTYPE HTML>');
  console.log('<html>');
  console.log('  <head>');
  console.log('    <meta http-equiv="content-type" content="text/html; charset=utf-8" />');
  console.log('    <title>Relatório de Nomes de Cidades</title>');
  console.log('  </head>');
  console.log('  <body>');
  console.log('    <h1>Relatório de Nomes de Cidades</h1>');
  console.log('    <ul>');

  for (let i = 0; i < cidades.length; i++) {
    console.log('     <li>' + cidades[i]['Nome'] + '</li>');
  }

  console.log('    </ul>');
  console.log('  </body>');
  console.log('</html>');
}

export { ler_cidades, parse_json, reportar_html };
