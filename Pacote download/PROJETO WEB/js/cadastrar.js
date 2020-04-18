
 var _cpf, d_nascimento, _nome, n_mae, _email, _senha, r_senha;

function  cadastrar(){

    _cpf = document.cadastro_usu.txtCPF.value;
    d_nascimento = document.cadastro_usu.txtDN.value;
    _nome = document.cadastro_usu.txtN.value;
    n_mae = document.cadastro_usu.txtNM.value;
    _email = document.cadastro_usu.txtE.value;
    _senha = document.cadastro_usu.txtP1.value;
    r_senha = document.cadastro_usu.txtP2.value;

    if (_cpf == '' ){
        alert('Preencha o campo CPF!');
        document.cadastro_usu.txtCPF.focus();
        return false;
    
    }
    else if(_cpf.length < 14) {
       alert('Siga este Ex: 000.000.000-00');
       document.cadastro_usu.txtCPF.focus();
       return false;
    }

    if (d_nascimento == ''){
        alert('Qual é sua data de nascimento ?');
        document.cadastro_usu.txtDN.focus();
        return false;
    }

    if (_nome == ''){
        alert('Preencha o campo nome!');
        document.cadastro_usu.txtN.focus();
        return false;
    }

    if (n_mae == ''){
        alert('Preencha o campo Mãe!');
        document.cadastro_usu.txtNM.focus();
        return false;
    }

    if (_email == '' || _email.indexOf('@') == -1){
        alert('E-mail informado, Inválido!');
        document.cadastro_usu.txtE.focus();
        return false;
    }
    
    if (_senha == ''){
        alert('Informe sua senha!');
        document.cadastro_usu.txtP1.focus();
        return false;
    }
    else if (_senha.length < 6){
        alert('Digite uma senha com 6 ou mais caracteres!');
        document.cadastro_usu.txtP1.focus();
        return false;
    }

    if (r_senha == '') {
        alert('Informe sua senha!');
        document.cadastro_usu.txtP2.focus();
        return false;
    }
    else if (r_senha.length < 6){
        alert('Digite uma senha com 6 ou mais caracteres!');
        document.cadastro_usu.txtP2.focus();
        return false;
    }
    if (_senha != r_senha){
        alert('Senhas estão diferentes!');
        document.cadastro_usu.txtP2.focus();
        return false;
    }

    
}