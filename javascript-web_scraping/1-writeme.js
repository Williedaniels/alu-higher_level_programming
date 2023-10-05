#!/usr/bin/node

const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 4) {
  console.error('Usage: ./writeFile.js <file_path> <string_to_write>');
  process.exit(1);
}

// Get the file path and string to write from command line arguments
const filePath = process.argv[2];
const stringToWrite = process.argv[3];

// Write the string to the file asynchronously in utf-8 encoding
fs.writeFile(filePath, stringToWrite, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(`Content written to ${filePath}`);
  }
});
