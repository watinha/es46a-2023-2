import { ler_cidades, parse_json, reportar_html } from './src/report.js';

let cidades_json = ler_cidades('./data/cidades-2.json');
let cidades = parse_json(cidades_json);
reportar_html(cidades);
