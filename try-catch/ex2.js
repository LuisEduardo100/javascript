// Exercício 2: Exercício: Tratamento de Erro em Chamada de Função Inexistente
function handleErrorFunctionDoesNotExist() {
  try {
    nonExistentFunction();
  } catch (error) {
    console.error('Error caught: ', error.message);
  }
}

handleErrorFunctionDoesNotExist();
