#!/usr/bin/node

const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 4) {
  console.error('Usage: ./writeFile.js <file_path> "<text_to_write>"');
  process.exit(1);
}

const filePath = process.argv[2];
const textToWrite = process.argv[3];

// Write the string to the file
fs.writeFile(filePath, textToWrite, 'utf-8', (err) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log(`"${textToWrite}" was successfully written to ${filePath}`);
  }
});
