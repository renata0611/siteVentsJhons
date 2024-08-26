function dados() {
    // Coleta os dados inseridos no formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let dataNasc = document.getElementById("dataNasc").value;
    let tel = document.getElementById("tel").value;
    let tipo = document.getElementById("tipo").value;

    if (nome && email && dataNasc && tel && tipo) {

        document.getElementById("mensagem").innerHTML = 
            "Seus dados foram enviados!<br>" + 
            "Nome: " + nome + "<br>" + 
            "Email: " + email + "<br>" + 
            "Data de Nascimento: " + dataNasc + "<br>" + 
            "Telefone: " + tel + "<br>" + 
            "O que deseja: " + tipo;
        
        document.getElementById("mensagem").style.display = "block";
        
    } else {
        alert("Por favor, preencha aí todos os campos.");
    }
}

function limpar() {
    document.getElementById("mensagem").style.display = "none";
}