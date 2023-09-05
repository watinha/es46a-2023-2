import sys from 'node:sys';

import * as fs from 'node:fs';

const [cmd, script, param1] = process.argv,
      filename = './data/cidades-2.json';

// ler o arquivo ./data/cidades-2.json
function ler_arquivo (filename) {
  let cidades_json = fs.readFileSync(filename);
  return cidades_json;
}

// fazer do JSON e gerar o vetor de nomes de cidades
function parse_json (json) {
  let cidades_obj = JSON.parse(json);
  return cidades_obj;
}

// gerar o arquivo HTML
function gerar_html (cidades_obj) {
  let html = `
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

  for (let i = 0; i < cidades_obj.length; i++) {
    html += `     <li>${cidades_obj[i]['Nome']}</li>\n`;
  }

  html += `
    </ul>
  </body>
</html>`;

  return html;
}

// gerar o arquivo TXT
function gerar_txt (cidades_obj) {
  let txt = `Relatório de Nomes de Cidades
=============================\n`;

  for (let i = 0; i < cidades_obj.length; i++) {
    txt += `- ${cidades_obj[i]['Nome']}\n`;
  }

  return txt;
}

let json = ler_arquivo(filename),
    obj = parse_json(json),
    output = '';

if (param1 === 'html') {
  output = gerar_html(obj);
} else if (param1 === 'txt') {
  output = gerar_txt(obj);
} else {
  console.log('Erro bla');
  sys.exit(1);
}

console.log(output);






