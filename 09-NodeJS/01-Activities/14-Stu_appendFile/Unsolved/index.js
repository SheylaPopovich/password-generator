// TODO: What are we importing?

//this is in include the File System module library
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()

//this will add text onto a new line on log.txt file
//  \n adds a new line to text log
//
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
// if there is an error catch it and if not log "message" 
  err ? console.error(err) : console.log('Commit logged!')
);

