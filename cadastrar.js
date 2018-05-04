function cadastrar(pessoa){
    
    $('input:radio[name=valor]').each(function () {
        //Verifica qual está selecionado
        if ($(this).is(':checked'))
            valor = $(this).val();
    })
    // obtendo o valor do atributo value da tag option
    valorEscolhido = $("#Escolaridade option:selected").val();

    var pessoa = JSON.stringify({
        nome: $("#cadNome").val(),
        email: $("#cadEmail").val(),
        senha: "",
        telefone: $("#cadTelefone").val(),
        Escolaridade: valorEscolhido,
        Sexo: valor
    });
    return pessoa;
}