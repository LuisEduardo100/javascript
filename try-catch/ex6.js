// Exercício 6: Tratamento de Erro em Divisão por Zero
(function handleErrorDivisionByZero() {
  try {
    let dividendo = 10;
    let divisor = 0;

    if (divisor === 0) {
      throw new Error('Division by zero is not allowed');
    }
    let resultado = dividendo / divisor;
    console.log('Result:', resultado);
  } catch (error) {
    console.error('Error caught: ', error.message);
  }
})();
