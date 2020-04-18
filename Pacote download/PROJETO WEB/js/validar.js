
var matri;
var senh;

function validar(){

   matricula = document.form_acessar._matric.value;
   senha = document.form_acessar._senh.value;

   if (matricula == ''){
      alert('Campo matricula vazio!');
      document.form_acessar._matric.focus();
      return false;
   }

   if ( senha == ''){
      alert('Campo senha vazio!');
      document.form_acessar._senh.focus();
      return false;
   }
 
}
