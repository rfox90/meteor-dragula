Package.describe({
  summary: 'Dragula - Drag and drop so simple it hurts, packaged for meteor',
  name: 'ahref:dragula',
  version: '3.5.4',
  git:'https://github.com/rfox90/meteor-dragula'
});

Npm.depends({
  dragula: "3.5.4"
});

Package.onUse(function (api) {
	api.use(['cosmos:browserify@0.9.2'], ['client']);
	
	api.add_files(['package.browserify.js','dragula/dist/dragula.css'], ['client']);
	//api.export('dragula','client');
});
