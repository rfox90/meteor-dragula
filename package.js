Package.describe({
  summary: 'Dragula - Drag and drop so simple it hurts, packaged for meteor',
  name: 'ahref:dragula',
  version: '1.1.0',
  git:'https://github.com/rfox90/meteor-dragula'
});


Package.onUse(function (api) {
	api.add_files(['dragula/dist/dragula.css','dragula/dist/dragula.js'], ['client']);
});