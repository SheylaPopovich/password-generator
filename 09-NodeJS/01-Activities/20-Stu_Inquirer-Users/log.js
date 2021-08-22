const fs = require('fs');


fs.writeFile('log.txt', words, (err) =>{
    if (err) throw err;
    console.log('done and done')
})