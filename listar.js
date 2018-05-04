document.write(unescape("%3Cscript src='excluir.js' type='text/javascript'%3E%3C/script%3E"));
function listar(ObjPessoa) {
    $.each(ObjPessoa, function (chave, valor) {
        //adicionando os objetos dentro da tabela com o comando append
        $("#listaPessoas tbody").append(
            "<tr>" +
            "<td class='bg-success'>" + valor.$id + "</td>" +
            "<td class='bg-danger'>" + valor.nome + "</td>" +
            "<td class='bg-danger'>" + valor.email + "</td>" +
            "<td class='bg-danger'>" + valor.telefone + "</td>" +
            "<td class='bg-danger'>" + valor.Escolaridade + "</td>" +
            "<td class='bg-danger'>" + valor.Sexo + "</td>" +
            // "<td class='btn-primary'><a href='file:///C:/Users/misaelzeferino/Documents/projetosAulaMarth/aula02Ajax/cadastro.html'><button type='button' onclick='editar(" + JSON.stringify(valor.id) + "); ' id='editar'>Editar</button></a></td>" +
            "<td class='btn-primary'><button type='button' onclick='carregarCadastroParaEdicao(" + JSON.stringify(valor.id) + "); ' id='editar'>Editar</button></td>" +
            "<td class='btn-danger'><button type='button' onclick='excluir(" + JSON.stringify(valor.id) + ");' id='remover'>Excluir</button></td>"

        );
    });
}


function carregarCadastroParaEdicao(id) {

    window.location = "cadastro.html?id=" + id;
}

function listarPorNome(pessoa) {
console.log("entrou no listar por nome"+ pessoa);
console.log(JSON.stringify(pessoa))
        $("#dadosPessoais").append(
            "<thead>"+
        
            "<tr>"+
                "<th>ID</th>"+
                "<th>Nome</th>"+
                "<th>Email</th>"+
                "<th>Telefone</th>"+
                "<th>Escolaridade</th>"+
                "<th>Sexo</th>"+
            "</tr>"+
        "</thead>"+
        "<tbody>"+
            "<tr>"+
            "<td>"+pessoa.$id+"</td>"+
            "<td>"+pessoa.nome+"</td>"+
            "<td>"+pessoa.email+"</td>"+
            "<td>"+pessoa.telefone+"</td>"+
            "<td>"+pessoa.Escolaridade+"</td>"+
            "<td>"+pessoa.Sexo+"</td>"+
            "</tr>"+
            "</tbody>"
        )
}


