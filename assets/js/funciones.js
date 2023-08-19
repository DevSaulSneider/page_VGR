
function formulario_exitoso(nombre) {
  toastr.success(`Gracias ${nombre} por contactarnos`, 'Mensaje enviado')
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  formulario.reset();
}
export function formulario_error(nombre) {
  toastr.error(`${nombre} Complete el formulario correctamente`, 'Error')

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
}

function formulario_errorEmailJS(nombre) {
  toastr.error(`Disculpe las molestas ${nombre}, tenemos un problema con el servidor, xfavor contactarnos al email: prueba@prueba.com`, 'Error 400')

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
}

export const sendEmail = (e) => {
  e.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let btn_enviar = document.querySelector("#enviar");
  btn_enviar.disabled = true;

  //Service ID - Template ID - Form ID - Public Key
  emailjs.sendForm('service_6tsvolc', 'template_stpr4ky', '#formulario', 'U4THGMO-OMu7Ju43i')
  .then((response) => {
    formulario_exitoso(nombre);
    formulario.reset();
  })
  .catch((error) => {
    formulario_errorEmailJS(nombre);
    console.log("Error al enviar mensaje de emailjs");
    console.log(error);
  })
  .finally(() => {
    btn_enviar.disabled = false;
  })
}