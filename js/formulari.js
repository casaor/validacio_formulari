// VALIDACIÓ CAMPS BUITS

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
})();


// VALIDACIÓ EMAIL

function validateEmail() {
  let email = document.getElementById("emailLog").value;
  let emailValid = /^[\w+\d+._]+\@[\w+\d+_+]+\.[\w+\d+._]{2,8}$/;
        while (!email.match(emailValid)) {
          document.getElementById('correcte').style.color = "red";
          document.getElementById('correcte').innerHTML = "Introdueix un format d'e-mail vàlid";
          return false;
      }
      document.getElementById('correcte').style.color = "green";
      document.getElementById('correcte').innerHTML = "Format d'e-mail vàlid";
      return true; 
}


// VALIDACIÓ CONTRASENYA

function validatePass() {
  let password = document.getElementById("password1").value;
  let confirmPassword = document.getElementById("password2").value;
    while (password != confirmPassword) {
        document.getElementById('coincideix').style.color = "red";
        document.getElementById('coincideix').innerHTML = "La contrasenya no coincideix";
        return false;
    }
    document.getElementById('coincideix').style.color = "green";
    document.getElementById('coincideix').innerHTML = "La contrasenya coincideix";
    return true;   
}