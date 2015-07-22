Package.describe({
  summary: 'Dragular - Drag and drop so simple it hurts packaged for meteor',
  name: 'ahref:dragular',
  version: '1.0.1',
  git:'https://github.com/rfox90/dragula'
});


Package.onUse(function (api) {
	api.add_files(['dragular/dist/dragular.css','dragular/dist/dragular.js'], ['client']);
	api.export('dragular');
});