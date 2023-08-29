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
  let result = `
<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <h1>Relatório de Nomes de Cidades</h1>
    <ul>
`;

  for (let i = 0; i < cidades.length; i++) {
    result += '     <li>' + cidades[i]['Nome'] + '</li>\n';
  }

  result += `
    </ul>
  </body>
</html>`;

  return result;
}

export { ler_cidades, parse_json, reportar_html };
