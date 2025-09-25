// Exercício 4: Tratamento de Erro em Acesso a Propriedade Inexistente
function handleErrorAccessNonExistentProperty() {
  let object = {};
  try {
    console.log(object.nonExistentProperty.subProperty);
  } catch (error) {
    console.error('Error caught: ', error.message);
  }
}

handleErrorAccessNonExistentProperty();
