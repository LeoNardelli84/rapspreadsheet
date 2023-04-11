$(function(){

  $('.mdb-select').materialSelect();
  //TYPED JS
  var options = {
    strings: ["","Comienza...", "&larr; &larr; &larr;"],
    typeSpeed: 100,
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
    var p1_patron1 = parseFloat($("#patron1p1").val()) + parseFloat($("#vpatron1p1").val());
    var p1_patron2 = parseFloat($("#patron2p1").val()) + parseFloat($("#vpatron2p1").val());
    var p1_patron3 = parseFloat($("#patron3p1").val()) + parseFloat($("#vpatron3p1").val());
    var p1_patron4 = parseFloat($("#patron4p1").val()) + parseFloat($("#vpatron4p1").val());

    var p1_tecnica = parseFloat($("#tecnicasp1").val()) + parseFloat($("#vtecnicasp1").val());
    var p1_flow = parseFloat($("#flowp1").val()) + parseFloat($("#vflowp1").val());
    var p1_escena = parseFloat($("#escenap1").val()) + parseFloat($("#vescenap1").val());
    var p1_totalPatrones;

    //Participante 2
    var p2_patron1 = parseFloat($("#patron1p2").val()) + parseFloat($("#vpatron1p2").val());
    var p2_patron2 = parseFloat($("#patron2p2").val()) + parseFloat($("#vpatron2p2").val());
    var p2_patron3 = parseFloat($("#patron3p2").val()) + parseFloat($("#vpatron3p2").val());
    var p2_patron4 = parseFloat($("#patron4p2").val()) + parseFloat($("#vpatron4p2").val());

    var p2_tecnica = parseFloat($("#tecnicasp2").val()) + parseFloat($("#vtecnicasp2").val());
    var p2_flow = parseFloat($("#flowp2").val()) + parseFloat($("#vflowp2").val());
    var p2_escena = parseFloat($("#escenap2").val()) + parseFloat($("#vescenap2").val());
    var p2_totalPatrones;

    p1_totalPatrones = p1_patron1 + p1_patron2 + p1_patron3 + p1_patron4;
    p2_totalPatrones = p2_patron1 + p2_patron2 + p2_patron3 + p2_patron4;

    var totalTematicas1 = p1_totalPatrones + p1_tecnica + p1_flow + p1_escena;
    var totalTematicas2 = p2_totalPatrones + p2_tecnica + p2_flow + p2_escena;

    //Player 1


    localStorage.setItem('te_totalPatronesP2', p2_totalPatrones);
    localStorage.setItem('te_tecnicasp2', p2_tecnica);
    localStorage.setItem('te_flowp2', p2_flow);
    localStorage.setItem('te_escenap2', p2_escena);
    localStorage.setItem('te_totalTematicas2', totalTematicas2)

    localStorage.setItem('te_totalPatronesP1', p1_totalPatrones);
    localStorage.setItem('te_tecnicasp1', p1_tecnica);
    localStorage.setItem('te_flowp1', p1_flow);
    localStorage.setItem('te_escenap1', p1_escena);
    localStorage.setItem('te_totalTematicas1', totalTematicas1);


  }

  $("#btn-terminar").click(function(e){
     e.preventDefault();

     swal({
       title: "¿Terminar Temáticas?",
       text: ""+ p1 + " Vs " + p2 + "",
       icon: "../../../img/favicon.ico",
       buttons: true,
       dangerMode: true
     })
     .then((willDelete) => {
       if (willDelete) {
         tomarDatos();
         swal("¡Bien hecho!", {
           icon: "success",
         });

         $(location).attr('href', 'menu.html');
       } else {
         e.preventDefault();
         swal("Continua votando..");

       }
     });

   });// fin btn-terminar
})
