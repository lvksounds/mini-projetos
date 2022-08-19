function validar() {
  var nome = formulario.nome.value;
  var sobrenome = formulario.sobrenome.value;
  var email = formulario.email.value;
  var senha = formulario.senha.value;

  if (nome == "" || sobrenome == "" || email == "" || senha == "") {
    alert("Preencha todos os campos obrigatórios!");
  }
}
