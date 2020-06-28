'use strict'

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formContato').addEventListener('submit', (event) => {

        var retornovalores = formularioContato();

        if (!validar(retornovalores)) {
            event.preventDefault();
        }
    });
});

function formularioContato() {
    var obj = {
        nome: document.getElementById('txtNome').value,
        email: document.getElementById('txtEmail').value,
        assunto: document.getElementById('txtAssunto').value,
        mensagem: document.getElementById('txtMensagem').value,
    };
    return obj
}

function validar(retornovalores) {
    let filtroemail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    var erros = [];

    if (retornovalores.nome.length < 3 || retornovalores.nome.length > 50) {
        erros.push('Nome inválido.');
    } if (!filtroemail.test(retornovalores.email)) {
        erros.push('E-mail inválido. Por favor forneça um e-mail corretamente.');
    } if (retornovalores.assunto.length < 4 || retornovalores.assunto.length > 30) {
        erros.push('Por favor, informe um assunto válido.');
    } if (retornovalores.mensagem.length < 10 || retornovalores.mensagem.length > 500) {
        erros.push('Por favor, informe uma mensagem válida.');
    }

    if (erros.length > 0) {
        var listaerros = document.getElementById('errors');
        var ul = document.createElement('ul');
        for (let i = 0; i < erros.length; i++) {
            listaerros.classList.add('errors2');
            var li = document.createElement('li');
            li.innerHTML = erros[i];
            ul.appendChild(li);
            listaerros.innerHTML = '';
        }
        listaerros.appendChild(ul);
    } else {
        alert('Mensagem enviada com sucesso. Muito obrigado!');
        return true;
    }
}


//tela de loading
window.onload =
    function myFunction() {
        document.getElementById('loader').style.display = "none"; document.getElementById('animate-bottom').style.display = "block";
    }

