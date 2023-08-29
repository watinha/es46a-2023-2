import CidadesHTMLReport from './src/CidadesHTMLReporter.js';

let reporter = new CidadesHTMLReport();
reporter.ler('./data/cidades-2.json');
reporter.parse();
let html = reporter.reportar();
console.log(html);
