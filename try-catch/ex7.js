// Exercício 7: Manipulação de Arquivo com Try, Catch e Finally
import fs from 'fs';

(function handleFileOperation(filePath = './ex7.txt') {
  try {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    console.log('File content:', fileData);
  } catch (error) {
    console.error('Error reading file:', error.message);
  } finally {
    console.log('File operation attempted.');
  }
})();
