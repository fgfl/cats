// Dec 3, 2019

const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', callback);
};

// we try to get the return value
breedDetailsFromFile('Bombay', (err, bombay) => {
  if (err) throw err;
  console.log(bombay);
});

module.exports = breedDetailsFromFile;