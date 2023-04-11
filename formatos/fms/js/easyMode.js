$(function(){
  $('.mdb-select').materialSelect();

  //TYPED JS
  var options = {
    strings: ["Palabras cada 10s","Comienza..", "&larr; &larr; &larr;"],
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
    var p1_patron3 = parseFloat($("#patron3p1").val());
    var p1_patron4 = parseFloat($("#patron4p1").val());
    var p1_patron5 = parseFloat($("#patron5p1").val());
    var p1_patron6 = parseFloat($("#patron6p1").val());
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
    var p2_tecnica = parseFloat($("#tecnicasp2").val());
    var p2_flow = parseFloat($("#flowp2").val());
    var p2_escena = parseFloat($("#escenap2").val());
    var p2_totalPatrones;

    p1_totalPatrones = p1_patron1 + p1_patron2 + p1_patron3 + p1_patron4 + p1_patron5 + p1_patron6;
    p2_totalPatrones = p2_patron1 + p2_patron2 + p2_patron3 + p2_patron4 + p2_patron5 + p2_patron6;

    var totalEasyMode1 = p1_totalPatrones + p1_tecnica + p1_flow + p1_escena;
    var totalEasyMode2 = p2_totalPatrones + p2_tecnica + p2_flow + p2_escena;

    //Player 1


    localStorage.setItem('em_totalPatronesP2', p2_totalPatrones);
    localStorage.setItem('em_tecnicasp2', p2_tecnica);
    localStorage.setItem('em_flowp2', p2_flow);
    localStorage.setItem('em_escenap2', p2_escena);
    localStorage.setItem('em_totalEasyMode2', totalEasyMode2)

    localStorage.setItem('em_totalPatronesP1', p1_totalPatrones);
    localStorage.setItem('em_tecnicasp1', p1_tecnica);
    localStorage.setItem('em_flowp1', p1_flow);
    localStorage.setItem('em_escenap1', p1_escena);
    localStorage.setItem('em_totalEasyMode1', totalEasyMode1);


  }

  $("#btn-terminar").click(function(e){
     e.preventDefault();

     swal({
       title: "¿Terminar Easy Mode?",
       text: ""+ p1 + " Vs " + p2 + "",
       icon: "../../../img/favicon.ico",
       buttons: true,
       dangerMode: true
     })
     .then((willDelete) => {
       if (willDelete) {
         tomarDatos();
         swal("¡Preparate para Hard Mode!", {
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
