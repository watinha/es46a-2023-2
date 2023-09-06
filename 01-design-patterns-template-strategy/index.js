import sys from 'node:sys';

import CitiesReporterHTML from './src/CitiesReporterHTML.js';
import CitiesReporterTXT from './src/CitiesReporterTXT.js';

const [cmd, script, param1] = process.argv,
      filename = './data/cidades-2.json';

let reporter = null;
if (param1 === 'html') reporter = new CitiesReporterHTML();
else if (param1 === 'txt') reporter = new CitiesReporterTXT();
else {
  console.log('Erro bla');
  sys.exit(1);
}

let output = reporter.report(filename);

console.log(output);






