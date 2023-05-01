var generator = require('generate-password');
var fs = require('fs');

var password = generator.generate({
	length: 10,
	numbers: true
});

fs.writeFile('password-generator.txt', password, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
