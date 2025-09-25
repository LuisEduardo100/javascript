// Exercício 3: Tratamento de Erro ao Acessar Propriedade de null
function handleErrorAccessNullProperty() {
  try {
    const nullObject = null;
    console.log(nullObject.property);
  } catch (error) {
    console.error('Error caught: ', error.message);
  }
}

handleErrorAccessNullProperty();
