$(function(){
  var p1 = localStorage.getItem('p1');
  var p2 = localStorage.getItem('p2');
  $("#p1").html(p1);
  $("#p1").css('color', 'blue');
  $("#p2").html(p2);
  $("#p2").css('color', 'red');


  var p1_totalPatrones = parseFloat(localStorage.getItem('totalPatronesP1'));
  var p1_tecnica = parseFloat(localStorage.getItem('tecnicasp1'));
  var p1_flow = parseFloat(localStorage.getItem('flowp1'));
  var p1_dobletempo = parseFloat(localStorage.getItem('dtempo1'));
  var p1_escena = parseFloat(localStorage.getItem('escenap1'));

  var p1_total = p1_totalPatrones + p1_tecnica + p1_flow + p1_dobletempo + p1_escena;


  var p2_totalPatrones = parseFloat(localStorage.getItem('totalPatronesP2'));
  var p2_tecnica = parseFloat(localStorage.getItem('tecnicasp2'));
  var p2_flow = parseFloat(localStorage.getItem('flowp2'));
  var p2_dobletempo = parseFloat(localStorage.getItem('dtempo2'));
  var p2_escena = parseFloat(localStorage.getItem('escenap2'));

  var p2_total = p2_totalPatrones + p2_tecnica + p2_flow + p2_dobletempo + p2_escena;

  $("#p1_resPatrones").html(p1_totalPatrones);
  $("#p1_resTecnica").html(p1_tecnica);
  $("#p1_resFlow").html(p1_flow);
  $("#p1_resDobletempo").html(p1_dobletempo);
  $("#p1_resEscena").html(p1_escena);

  $("#p2_resPatrones").html(p2_totalPatrones);
  $("#p2_resTecnica").html(p2_tecnica);
  $("#p2_resFlow").html(p2_flow);
  $("#p2_resDobletempo").html(p2_dobletempo);
  $("#p2_resEscena").html(p2_escena);

  $("#p1_total").html(p1_total);
  $("#p2_total").html(p2_total);

  function difTotales(player1, player2){
    if (player1 > player2) {
      return player1 - player2;
    } else{
      return player2 - player1;
    }
  }

  var difTotales = difTotales(p1_total, p2_total);


  if (difTotales <= 3) {
    $("#resultado").html('Réplica');
    $("#resultado").css('color', 'white');
    $("body").css('background', 'rgb(57,57,57)');
  } else if (p1_total > p2_total) {
    $("body").css('background', 'blue');
    $("#resultado").html("Ganó " + p1);
  } else {
    $("body").css('background', 'red');
    $("#marca").css('color', 'black');
    $("#resultado").html("Ganó " + p2);
  }


  // porcentajes para los graficos
  var p1_porcentajePatrones = p1_totalPatrones * 100 / 48;
  var p1_porcentajeTecnica = p1_tecnica * 100 / 2;
  var p1_porcentajeFlow = p1_flow * 100 / 2;
  var p1_porcentajeDobletempo = p1_dobletempo * 100 / 2;
  var p1_porcentajeEscena = p1_escena * 100 / 2;

  var p2_porcentajePatrones = p2_totalPatrones * 100 / 48;
  var p2_porcentajeTecnica = p2_tecnica * 100 / 2;
  var p2_porcentajeFlow = p2_flow * 100 / 2;
  var p2_porcentajeDobletempo = p2_dobletempo * 100 / 2;
  var p2_porcentajeEscena = p2_escena * 100 / 2;

  var batallometro = (parseFloat(p1_total) + parseFloat(p2_total)) * 100 / 112;

  // Grafico RADAR
  var ctx = document.getElementById('graficoRadar').getContext('2d');
  var chart = new Chart(ctx,{
        type:"bar",
        data: {
          labels:['Patrones', 'Técnica', 'Flow', 'D. tempo', 'P. escena'],
          datasets: [
            {
            label: p1,
            data: [p1_porcentajePatrones.toFixed(2), p1_porcentajeTecnica.toFixed(2), p1_porcentajeFlow.toFixed(2), p1_porcentajeDobletempo.toFixed(2), p1_porcentajeEscena.toFixed(2)],
            backgroundColor: '#0d47a1',
            borderColor: 'rgb(0, 98, 255)',
            borderWidth: 1
          },{
            label: p2,
            data: [p2_porcentajePatrones.toFixed(2), p2_porcentajeTecnica.toFixed(2), p2_porcentajeFlow.toFixed(2), p2_porcentajeDobletempo.toFixed(2), p2_porcentajeEscena.toFixed(2)],
            backgroundColor: '#b71c1c',
            borderColor: 'rgb(255, 0, 0)',
            borderWidth: 1
          }
        ]},
        options: {
          layout: {
              padding: {
                  left: 0,
                  right: 10,
                  top: 10,
                  bottom: 10
              }
          },
          legend:{
            labels:{
              fontColor: 'white',
              fontFamily: 'Russo One',
              display: false
            }
          },
          scales: {
            xAxes: [{

              ticks: {
                fontColor: 'white',
                fontSize: 14,
                fontFamily: 'Russo One'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                fontSize: 18
              }
            }]
          }
        }

    });

    $("#btn-nuevaBatalla").click(function(e){
       e.preventDefault();

       swal({
         title: "¿Volver al Menu Principal?",
         text: "Podrás elegir otros formatos",
         icon: "../../img/favicon.ico",
         buttons: true,
         dangerMode: true
       })
       .then((willDelete) => {
         if (willDelete) {
           swal("¡No olvides seguirnos en Instagram!", {
             icon: "success",
           });

           $(location).attr('href', '../../index.html');
         } else {
           e.preventDefault();
           swal("Siguenos en Instagram @rapspreadsheet");

         }
       });

     });// fin btn-terminar

     //batallometro
     $(".progressBar").width(batallometro + "%");

     if (batallometro < 35 ) {
         $(".progressBar").html(batallometro.toFixed(2) + "% ");
     } else  if (batallometro > 35 && batallometro <= 40){
         $(".progressBar").html(batallometro.toFixed(2) + "% " + " Regular..");
     } else if (batallometro > 40 && batallometro <= 45){
         $(".progressBar").html(batallometro.toFixed(2) + "% " + " Buena! ");
     } else  if (batallometro > 45 && batallometro <= 50){
         $(".progressBar").html(batallometro.toFixed(2) + "% " + " Muy buena! ");
     } else  if (batallometro > 50 && batallometro <= 55){
         $(".progressBar").html(batallometro.toFixed(2) + "% " + " Excelente!! ");
     } else  if (batallometro > 55 && batallometro <= 60){
         $(".progressBar").html(batallometro.toFixed(2) + "% " + " Increible!!!");
     } else  if (batallometro > 60 && batallometro <= 70){
             $(".progressBar").html(batallometro.toFixed(2) + "% " + " WOW!!!!");
     } else if (batallometro > 70){
       $(".progressBar").html(batallometro.toFixed(2) + "% " + " Epica!!!!!");
     }

     $(".h6-batallometro").html((parseFloat(p1_total) + parseFloat(p2_total)) + " Pts totales (nivel de batalla)")
});
