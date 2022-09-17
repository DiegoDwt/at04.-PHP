/*
function validar(){
  var nome = formname.nome.value
  var sobrenome = formname.sobrenome.value
  var telefone = formname.telefone.value
  var email = formname.email.value
  var dataNasc = formname.dataNasc.value
  var idade = formname.idade.value

  if (nome == ""){
    alert("Preencha o campo nome.")
    formname.nome.focus()
    return false
  }

  if (sobrenome == ""){
    alert("Preencha o campo sobrenome.")
    formname.sobrenome.focus()
    return false
  }

  if (telefone == ""){
    alert("Preencha o campo telefone.")
    formname.telefone.focus()
    return false
  }

  if (email == "" || email.indexOf("@") == -1){
    alert("Preencha o campo email.")
    formname.email.focus()
    return false
  }

  if (dataNasc == ""){
    alert("Preencha o campo Data de Nascimento.")
    formname.dataNasc.focus()
    return false;
  }

  if (idade == ""){
    alert("Preencha o campo idade.")
    formname.idade.focus()
    return false
  }

}
*/

function entrar() {
    var a = window.document.getElementById("enviar")
    a.style.color = "red"
}

function sair() {
   var b = window.document.getElementById("enviar")
   b.style.color = "black"
}

function completar() {

  var atual = new Date(); 
                  
  var anoAtual = atual.getFullYear();

  var a = document.getElementById("dataNasc").value;
  var b = new Date(a);

  var anoNasc = b.getFullYear();

  var idadeAtual = anoAtual - anoNasc;
 
  console.log(idadeAtual);

  idade.value = idadeAtual;
 
}

function salvar() {
  nome = document.getElementById("nome")
  sobrenome = document.getElementById("sobrenome")
  parente = document.getElementById("parente")
  telefone = document.getElementById("telefone")
  email = document.getElementById("email")
  dataNasc = document.getElementById("dataNasc")
  idade = document.getElementById("idade")
  
    data = {
  nome : nome.value,
  sobrenome : sobrenome.value,
  parente : parente.value,
  telefone : telefone.value,
  email : email.value,
  dataNasc : dataNasc.value,
  idade : idade.value,
  
  }

  const saida = JSON.stringify(data);

  alert(saida);
}


