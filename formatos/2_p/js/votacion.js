$(function(){

  $('.mdb-select').materialSelect();
  //TYPED JS
  var options = {
    strings: ["Tienes 2 compases para votar a c/u","formato para 12x12 (30s c/u)", "Las reglas las pones tú...","Comienza...", "&larr; &larr; &larr;"],
    typeSpeed: 75,
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


    var p1_tecnica = parseFloat($("#tecnicasp1").val());
    var p1_flow = parseFloat($("#flowp1").val());
    var p1_escena = parseFloat($("#escenap1").val());
    var p1_dtempo = parseFloat($("#tempop1").val());

    var p1_totalPatrones;

    //Participante 2
    var p2_patron1 = parseFloat($("#patron1p2").val());
    var p2_patron2 = parseFloat($("#patron2p2").val());


    var p2_tecnica = parseFloat($("#tecnicasp2").val());
    var p2_flow = parseFloat($("#flowp2").val());
    var p2_escena = parseFloat($("#escenap2").val());
    var p2_dtempo = parseFloat($("#tempop2").val());
    var p2_totalPatrones;

    p1_totalPatrones = p1_patron1 + p1_patron2;
    p2_totalPatrones = p2_patron1 + p2_patron2;

    var totalP1 = p1_totalPatrones + p1_tecnica + p1_flow + p1_escena + p1_dtempo;
    var totalP2 = p2_totalPatrones + p2_tecnica + p2_flow + p2_escena + p2_dtempo;

    //Player 1


    localStorage.setItem('totalPatronesP2', p2_totalPatrones);
    localStorage.setItem('tecnicasp2', p2_tecnica);
    localStorage.setItem('flowp2', p2_flow);
    localStorage.setItem('escenap2', p2_escena);
    localStorage.setItem('dtempo2', p2_dtempo);
    localStorage.setItem('totalP2', totalP2);

    localStorage.setItem('totalPatronesP1', p1_totalPatrones);
    localStorage.setItem('tecnicasp1', p1_tecnica);
    localStorage.setItem('flowp1', p1_flow);
    localStorage.setItem('escenap1', p1_escena);
    localStorage.setItem('dtempo1', p1_dtempo);
    localStorage.setItem('totalP1', totalP1);


  }

  $("#btn-terminar").click(function(e){
     e.preventDefault();

     swal({
       title: "¿Terminar Batalla?",
       text: ""+ p1 + " Vs " + p2 + "",
       icon: "../../img/favicon.ico",
       buttons: true,
       dangerMode: true
     })
     .then((willDelete) => {
       if (willDelete) {
         tomarDatos();
         swal("¡Preparando los resultados!", {
           icon: "success",
         });

         $(location).attr('href', 'resultados.html');
       } else {
         e.preventDefault();
         swal("Continua votando..");

       }
     });

   });// fin btn-terminar
});
