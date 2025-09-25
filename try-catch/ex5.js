// Exercício 5: Tratamento de Erro em Conversão de Tipos
function handleErrorTypeConversion() {
  try {
    let number = '1a';
    let numberConverted = Number(number);

    if (isNaN(numberConverted)) {
      throw new Error(`Conversion error: ${numberConverted} is not a number`);
    }
    console.log('Converted number:', numberConverted);
  } catch (error) {
    console.error('Error caught: ', error.message);
  }
}

handleErrorTypeConversion();
