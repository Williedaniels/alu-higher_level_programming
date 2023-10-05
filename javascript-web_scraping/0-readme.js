#!/usr/bin/node

const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 3) {
  console.error('Usage: ./readFile.js <file_path>');
  process.exit(1);
}

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the file asynchronously in utf-8 encoding
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(data);
  }
});
