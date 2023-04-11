$(function(){
  $('.mdb-select').materialSelect();

  //TYPED JS
  var options = {
    strings: ["Nuevo formato 2020"," 8x8 con votaciones intermedias", "5 sobres, 5 opciones:", "Imagenes, Objetos, Personajes..", "Terminaciones y conceptos y Actualidad", "Comienza...", "&larr; &larr; &larr;"],
    typeSpeed: 120,
    showCursor: false,
    smartBackspace: true
  }
  var typed = new Typed("#typed", options);
  //FIn TYPED

  let p1 = localStorage.getItem('p1');
  let p2 = localStorage.getItem('p2');

  $("#p1").html(p1);
  $("#p2").html(p2);

  function tomarDatos(){

    //Participante 1
    var p1_patron1 = parseFloat($("#patron1p1").val());
    var p1_patron2 = parseFloat($("#patron2p1").val());
    var p1_patron3 = parseFloat($("#patron3p1").val());
    var p1_patron4 = parseFloat($("#patron4p1").val());
    var p1_patron5 = parseFloat($("#patron5p1").val());
    var p1_patron6 = parseFloat($("#patron6p1").val());
    var p1_patron7 = parseFloat($("#patron7p1").val());
    var p1_patron8 = parseFloat($("#patron8p1").val());

    var p1_tecnica = parseFloat($("#tecnicasp1").val());
    var p1_flow = parseFloat($("#flowp1").val());
    var p1_escena = parseFloat($("#escenap1").val());
    var p1_totalPatrones;

    //Participante 2
    var p2_patron1 = parseFloat($("#patron1p2").val());
    var p2_patron2 = parseFloat($("#patron2p2").val());
    var p2_patron3 = parseFloat($("#patron3p2").val());
    var p2_patron4 = parseFloat($("#patron4p2").val());
    var p2_patron5 = parseFloat($("#patron5p2").val());
    var p2_patron6 = parseFloat($("#patron6p2").val());
    var p2_patron7 = parseFloat($("#patron7p2").val());
    var p2_patron8 = parseFloat($("#patron8p2").val());


    var p2_tecnica = parseFloat($("#tecnicasp2").val());
    var p2_flow = parseFloat($("#flowp2").val());
    var p2_escena = parseFloat($("#escenap2").val());
    var p2_totalPatrones;

    p1_totalPatrones = p1_patron1 + p1_patron2 + p1_patron3 + p1_patron4 + p1_patron5 + p1_patron6 + p1_patron7 + p1_patron8;
    p2_totalPatrones = p2_patron1 + p2_patron2 + p2_patron3 + p2_patron4 + p2_patron5 + p2_patron6 + p2_patron7 + p2_patron8;

    var totalRandom1 = p1_totalPatrones + p1_tecnica + p1_flow + p1_escena;
    var totalRandom2 = p2_totalPatrones + p2_tecnica + p2_flow + p2_escena;

    //Player 1


    localStorage.setItem('rm_totalPatronesP2', p2_totalPatrones);
    localStorage.setItem('rm_tecnicasp2', p2_tecnica);
    localStorage.setItem('rm_flowp2', p2_flow);
    localStorage.setItem('rm_escenap2', p2_escena);
    localStorage.setItem('rm_totalRandom2', totalRandom2)

    localStorage.setItem('rm_totalPatronesP1', p1_totalPatrones);
    localStorage.setItem('rm_tecnicasp1', p1_tecnica);
    localStorage.setItem('rm_flowp1', p1_flow);
    localStorage.setItem('rm_escenap1', p1_escena);
    localStorage.setItem('rm_totalRandom1', totalRandom1);


  }

  $("#btn-terminar").click(function(e){
     e.preventDefault();

     swal({
       title: "¿Terminar Random Mode?",
       text: ""+ p1 + " Vs " + p2 + "",
       icon: "../../../img/favicon.ico",
       buttons: true,
       dangerMode: true
     })
     .then((willDelete) => {
       if (willDelete) {
         tomarDatos();
         swal("¡Excelente votación!", {
           icon: "success",
         });

         $(location).attr('href', 'menu.html');
       } else {
         e.preventDefault();
         swal("Continua votando..");

       }
     });

   });// fin btn-terminar



});
