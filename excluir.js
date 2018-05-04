document.write(unescape("%3Cscript src='ajax.js' type='text/javascript'%3E%3C/script%3E"));
var btnConfirm = "";
function excluir(id) {

    document.getElementById('confirm').style.display = 'block'; " style=width:auto";
    console.log("Guid" + id);

    $("#btnConfirm").click(function () {
        btnConfirm = "sim";
        console.log("dentro do click" + btnConfirm);


        if (btnConfirm == 'sim') {
            console.log("dentro do if:" + btnConfirm);
            //faz a exclusao via ajax
            Delete(id);
        }
        document.getElementById('confirm').style.display = 'none';
    })

}