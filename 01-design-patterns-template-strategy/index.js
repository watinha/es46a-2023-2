import CidadesHTMLReport from './src/report.js';

let reporter = new CidadesHTMLReport();
let cidades_json = reporter.ler_cidades('./data/cidades-2.json');
let cidades = reporter.parse_json(cidades_json);
let html = reporter.reportar_html(cidades);
console.log(html);
