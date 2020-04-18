


//Definição de variáveis;
var _nome, _email, _telefone;

function validar(){
     
     //Transferência de valores para as variáveis da função;
    _nome = document.form_fc.txtNC.value;
    _email = document.form_fc.txtE.value;
    _telefone = document.form_fc.txtFN.value;

    if (_nome == ""){
        alert('Nome do usuário vazio!');
        document.form_fc.txtNC.focus();
        return false;
    }

    if (_email == "" || _email.indexOf('@') == -1){
        alert('Preencha o campo E-MAIL');
        document.form_fc.txtE.focus();
        return false;
    }


}