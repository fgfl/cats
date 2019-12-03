/*Dec 3, 2019

*/

//asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', callback);
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so this function returns undefined.
}

// we try to get the return value
breedDetailsFromFile('Bombay', (err, bombay) => {
  if(err) throw err;
  console.log(bombay);
  // do stuff with our data 
});
