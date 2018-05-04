//Arquivo para as requisiçoes ajax
function get(funcao) {
    $.ajax({
        url: 'http://localhost:52698/api/pessoa',
        method: 'GET'
    }).done(function (data) {
        funcao(data);
    });
}

function getPorId(id, funcao) {
    $.ajax({
        url: 'http://localhost:52698/api/pessoa/' + id,
        method: 'GET',
        contentType: 'application/json; charset=UTF-8',
    }).then(function (resposta) {
        console.log("dentro da requisicao" + resposta);
        funcao(resposta);
    })

}

function getPorNome(nome, funcao){
    console.log("O nome e:"+nome);
    JSON.stringify(nome);
    console.log(nome);
    $.ajax({
        url: 'http://localhost:52698/api/pessoa/?nome=' + nome,
        method:'GET',
        contentType:'application/json; charset=UTF-8',
    }).then(function(a){
        console.log("retorno do get por nome: "+a)
        funcao(a);
    })
}

function put(id, pessoa) {
    $.ajax({
        url: 'http://localhost:52698/api/pessoa/' + id,
        method: 'PUT',
        data: JSON.stringify(pessoa),
        contentType: 'application/json; charset=UTF-8',
    }).then(function (a) {
        alert("sucesso");
        console.log("retorno put" + a);
    })
}

function post(pessoa) {
    $.ajax({

        url: 'http://localhost:52698/api/pessoa',
        data: pessoa,
        type: 'POST',
        contentType: 'application/json; charset=UTF-8',
        success: (function (retorno) {
            console.log("pessoa :" + pessoa + "success");
            console.log("data :" + retorno);
            alert("Cadastro efetuado com sucesso.");
        }),
        error: (function (retorno) {
            console.log("pessoa :" + pessoa + "success");
            console.log("data :" + retorno);
            alert("Algum erro inesperado ocorreu :-(!.");
        })

    });
}

function Delete(id){
    $.ajax({
        url: 'http://localhost:52698/api/pessoa/' + id,
        method: 'DELETE',
        contentType: 'application/json; charset=UTF-8',
    }).then(function (e) {
        $("#remover").parent().parent().parent().remove();
        var ObjPessoa = null;
        $.ajax({
            url: 'http://localhost:52698/api/pessoa',
            method: 'GET'
        }).done(function (data) {
            ObjPessoa = [];
            ObjPessoa = data;
            console.log("data Json" + JSON.stringify(data));

            console.log("objJSON : " + ObjPessoa);
        });
    })
}


