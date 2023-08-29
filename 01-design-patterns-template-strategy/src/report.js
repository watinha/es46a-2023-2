import * as fs from 'node:fs';

export default class CidadesHTMLReport {

  ler_cidades (caminho) {
    return fs.readFileSync(caminho);
  }

  parse_json (cidades_json) {
    return JSON.parse(cidades_json);
  }

  reportar_html (cidades) {
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
}
