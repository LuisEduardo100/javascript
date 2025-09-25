// Exercício 1: Tratamento de Erro em Variável Não Definida
function handleUndefinedVariableError() {
  try {
    console.log(nonExistentVariable);
  } catch (error) {
    console.error('Error caught: ', error.message);
  }
}

handleUndefinedVariableError();
