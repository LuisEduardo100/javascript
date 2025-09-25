// Exercício 8: Conexão com Banco de Dados com Try, Catch e Finally
let database = {
  register1: { name: 'Alice', age: 30 },
  register2: { name: 'Bob', age: 25 },
  register3: { name: 'Charlie', age: 35 },
};

(function handleDatabaseOperation() {
  try {
    const result = database.register4.name;

    // take care using ! operator because if result is 0 it will enter in the condition
    // in Javascript, falsies is 0, '', null, undefined, NaN and false
    // and truthies is everything else, including negative numbers and empty objects/arrays
    if (!result) {
      throw new Error('Record not found in the database');
    }
    console.log('Database record:', result);
  } catch (error) {
    console.error('Error accessing database record:', error.message);
  } finally {
    console.log('Database operation attempted.');
  }
})();
