$(function(){
  localStorage.clear();

  var typed = new Typed('#typed', {
  strings: ['Votá las batallas de FMS', 'Armá tu propia liga', 'Votaciones Online' ,'¿Estás listo?'],
  smartBackspace: false,
  typeSpeed: 55,
  backSpeed: 25,
  showCursor: false
  });

  var btnComenzar = $("#btn-comenzar");

  btnComenzar.click(function(e){
    var p1 = $("#p1").val();
    var p2 = $("#p2").val();

    if (p1 == "") {
      e.preventDefault();
      swal({
        title: "El participante 1 necesita un nombre!",
        text: "recuerda que son maximo 10 caracteres",
        icon: "../../img/favicon.ico"
      });

    } else if (p2 == "") {
      e.preventDefault();
      swal({
        title: "El participante 2 necesita un nombre!",
        text: "Recuerda que son maximo 10 caracteres",
        icon: "../../img/favicon.ico"
      });

    } else{
      localStorage.setItem("p1", p1);
      localStorage.setItem("p2", p2);
      $(location).attr('href', 'menu/menu.html');
    }


  });

  $("#btn-volver").click(function(e){
      e.preventDefault();

      swal({
        title: "¿Volver al menu principal?",
        text: "podrás elegir otro formato",
        icon: "../../img/favicon.ico",
        buttons: true,
        dangerMode: true
      })
      .then((willDelete) => {
        if (willDelete) {

          swal("¡Volviendo al menu!", {
            icon: "success",
          });

          $(location).attr('href', '../../index.html');
        } else {
          e.preventDefault();
          swal("Continua con la FMS");

        }
      });

    });// fin btn-volver
});
