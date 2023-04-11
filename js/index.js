$(function(){
  localStorage.clear();

  // genera un numero aleatorio entre 0 y el multiplicador de Math.random(), en este caso de 0 a 99
  var num = (Math.floor(Math.random() * 99) + 1);

  $("#contador-ig").html(num);

  //FUNCIONES
  function obtenerFecha(){

    var fecha = new Date();
    var dia = fecha.getDate();
    var mes =  fecha.getMonth();
    var anio = fecha.getFullYear();
    var num_dia = fecha.getDay();
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    return ( dias[num_dia] + " " + dia + " de " + meses[mes] + " de " + anio);

  }

  var options = {
    strings: ["Web-app para votar Batallas de Freestyle", "¿Te animás a convertirte en juez?", "INFO: Sábado 18/7 Arranca FMS Perú"],
    typeSpeed: 120,
    showCursor: false,
    smartBackspace: true
  }
  var typed = new Typed("#typed", options);
  //FIn TYPED




  $(".formato").click(function(){

    var formato = $(this).children('h3').html();

    $(this).css('background-color', '#e53935');

    swal({
      title: "¿Comenzar " + formato + " ?",
      text: "Síguenos en Instagram @rapspreadsheet",
      icon: 'img/favicon.ico',
      buttons: true,
      dangerMode: false,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("¿Están listos?", {
          icon: "success",
        });

        switch (formato) {
          case 'FMS':
            $(location).attr('href', 'formatos/fms/fms.html');
            break;
          case '12 Compases':
            $(location).attr('href', 'formatos/12_p/12_p.html');
            break;
          case '8 Compases':
            $(location).attr('href', 'formatos/8_p/8_p.html');
            break;
          case '6 Compases':
            $(location).attr('href', 'formatos/6_p/6_p.html');
            break;
          case '4 Compases':
            $(location).attr('href', 'formatos/4_p/4_p.html');
            break;
          case '2 Compases':
            $(location).attr('href', 'formatos/2_p/2_p.html');
        }

      } else {
        swal("Elige otro formato");
        $(this).css("background-color", "rgb(198, 198, 198)")
      }
    });


  });


  $("#fecha").html(obtenerFecha());


});
