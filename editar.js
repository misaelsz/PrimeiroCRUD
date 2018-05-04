function editar(resposta){
    var e = resposta;
    console.log("retorno do callback"+e);

    console.log("retorno: " + JSON.stringify(e.nome));
    document.getElementById('cadNome').value = e.nome;
    document.getElementById('cadEmail').value = e.email;
    document.getElementById('cadTelefone').value = e.telefone;
    $("input[name=valor][value=" + e.Sexo + "]").attr('checked', 'checked');
    $('#Escolaridade option[value='+e.Escolaridade+']').attr('selected','selected');

    $('#btnCadastrar').click(function () {
        $('input:radio[name=valor]').each(function () {
            //Verifica qual está selecionado
            if ($(this).is(':checked'))
                valor = $(this).val();
        })
        // obtendo o valor do atributo value da tag option
        valorEscolhido = $("#Escolaridade option:selected").val();

        e.nome = document.getElementById('cadNome').value;
        e.email = document.getElementById('cadEmail').value;
        e.telefone = document.getElementById('cadTelefone').value;
        e.Escolaridade = valorEscolhido;
        e.Sexo = valor;

        console.log(e.nome = document.getElementById('cadNome').value,
            e.email = document.getElementById('cadEmail').value,
            e.telefone = document.getElementById('cadTelefone').value);

        var id = e.id;
        var pessoa = e;
        put(id ,pessoa);
    });
}