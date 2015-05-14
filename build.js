'use strict';

var exec = require('child_process').execSync;
var fs = require('fs');

exec('npm run convert');

var data = JSON.parse(fs.readFileSync('common.json', { encoding: 'UTF-8' }));

var content = '## Phrasal Verbs\n\n' + '### Commons\n' + '|Phrasal Verb|Definition|Examples|\n' + '|---|---|---|\n';

data.forEach(function (item) {
	content += '|' + item.verb + '|' + item.definition + '|' + item.examples.join('</br></br>') + '|\n';
});

content += '<style>table:nth-of-type(1){display:table;width:100%;}table:nth-of-type(1) th:nth-of-type(1){width:100px;}</style>';

fs.writeFileSync('README.md', content);
