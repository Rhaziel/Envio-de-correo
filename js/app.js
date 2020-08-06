// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');



// event listener
eventListeners();

function eventListeners(){
     //inicio de la aplicacion y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     // campos del formulario
     email.addEventListener('blur', validarCampo);
     mensaje.addEventListener('blur', validarCampo);
     asunto.addEventListener('blur', validarCampo);

     //boton de enviar en el submit
     formularioEnviar.addEventListener('submit', enviarEmail);

     //boton de reset
     resetBtn.addEventListener('click', resetFormulario);
}

//funciones
function inicioApp(){
     //deshabilitar el envio
     btnEnviar.disabled = true;
}

// valida que el campo tenga algo escrito
function validarCampo(){
     
     // se valida la longitud del texto y que no este vacio
     validarLongitud(this);

     //validar unicamente el email
     if(this.type === 'email'){
          validarEmail(this);
     }

     let errores = document.querySelectorAll('.error');

     if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
          if(errores.length === 0){
               btnEnviar.disabled = false;
          }
     }
}

//resetear el formulario
function resetFormulario(e){
     formularioEnviar.reset();

     e.preventDefault();
}

//cuando se envia el correo
function enviarEmail(e){
     //spinner al presionar enviar
     const spinnerGif = document.querySelector('#spinner');
     spinnerGif.style.display = 'block';

     //gif que envia email
     const enviado = document.createElement('img');
     enviado.src = 'img/mail.gif';
     enviado.style.display = 'block';

     //ocultar spinner y mostrar gif de enviado
     setTimeout(function(){
          spinnerGif.style.display = 'none';
          
          document.querySelector('#loaders').appendChild(enviado);

          setTimeout(function(){
               enviado.remove();
               formularioEnviar.reset();
          },6000)
     }, 3000)

     e.preventDefault();
}

//verifica la longitud del texto en los campos
function validarLongitud(campo){
     if(campo.value.length > 0){
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     }else{
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}

function validarEmail(campo){
     const mensaje = campo.value;
     if(mensaje.indexOf('@') !== -1){
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     }else{
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}