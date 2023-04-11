$(function(){
  // genera un numero aleatorio entre 0 y el multiplicador de Math.random(), en este caso de 0 a 99
  var num = (Math.floor(Math.random() * 99) + 1);

  $("#contador-ig").html(num);
  

 let p1 = localStorage.getItem('p1');
 let p2 = localStorage.getItem('p2');

 $("#p1").html(p1);
 $("#p2").html(p2);

 $("#p1-final").html(p1);
 $("#p2-final").html(p2);

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
 $("#fecha").html(obtenerFecha());

 // variables EasyMode
  let em_totalPatronesP1 = localStorage.getItem('em_totalPatronesP1');
  let em_tecnicasp1 = localStorage.getItem('em_tecnicasp1');
  let em_flowp1 = localStorage.getItem('em_flowp1');
  let em_escenap1 = localStorage.getItem('em_escenap1');
  let em_totalP1 = localStorage.getItem('em_totalEasyMode1');

  let em_totalPatronesP2 = localStorage.getItem('em_totalPatronesP2');
  let em_tecnicasp2 = localStorage.getItem('em_tecnicasp2');
  let em_flowp2 = localStorage.getItem('em_flowp2');
  let em_escenap2 = localStorage.getItem('em_escenap2')
  let em_totalP2 = localStorage.getItem('em_totalEasyMode2');

  // variables HardMode
  let hm_totalPatronesP1 = localStorage.getItem('hm_totalPatronesP1');
  let hm_tecnicasp1 = localStorage.getItem('hm_tecnicasp1');
  let hm_flowp1 = localStorage.getItem('hm_flowp1');
  let hm_escenap1 = localStorage.getItem('hm_escenap1')
  let hm_totalP1 = localStorage.getItem('hm_totalHardMode1');

  let hm_totalPatronesP2 = localStorage.getItem('hm_totalPatronesP2');
  let hm_tecnicasp2 = localStorage.getItem('hm_tecnicasp2');
  let hm_flowp2 = localStorage.getItem('hm_flowp2');
  let hm_escenap2 = localStorage.getItem('hm_escenap2')
  let hm_totalP2 = localStorage.getItem('hm_totalHardMode2');

  // variables tematicas
  let te_totalPatronesP1 = localStorage.getItem('te_totalPatronesP1');
  let te_tecnicasp1 = localStorage.getItem('te_tecnicasp1');
  let te_flowp1 = localStorage.getItem('te_flowp1');
  let te_escenap1 = localStorage.getItem('te_escenap1')
  let te_totalP1 = localStorage.getItem('te_totalTematicas1');

  let te_totalPatronesP2 = localStorage.getItem('te_totalPatronesP2');
  let te_tecnicasp2 = localStorage.getItem('te_tecnicasp2');
  let te_flowp2 = localStorage.getItem('te_flowp2');
  let te_escenap2 = localStorage.getItem('te_escenap2')
  let te_totalP2 = localStorage.getItem('te_totalTematicas2');

  // variables Random Mode
  let rm_totalPatronesP1 = localStorage.getItem('rm_totalPatronesP1');
  let rm_tecnicasp1 = localStorage.getItem('rm_tecnicasp1');
  let rm_flowp1 = localStorage.getItem('rm_flowp1');
  let rm_escenap1 = localStorage.getItem('rm_escenap1')
  let rm_totalP1 = localStorage.getItem('rm_totalRandom1');

  let rm_totalPatronesP2 = localStorage.getItem('rm_totalPatronesP2');
  let rm_tecnicasp2 = localStorage.getItem('rm_tecnicasp2');
  let rm_flowp2 = localStorage.getItem('rm_flowp2');
  let rm_escenap2 = localStorage.getItem('rm_escenap2')
  let rm_totalP2 = localStorage.getItem('rm_totalRandom2');

  //variables LIBRE
  let li_totalPatronesP1 = localStorage.getItem('li_totalPatronesP1');
  let li_tecnicasp1 = localStorage.getItem('li_tecnicasp1');
  let li_flowp1 = localStorage.getItem('li_flowp1');
  let li_escenap1 = localStorage.getItem('li_escenap1')
  let li_totalP1 = localStorage.getItem('li_totalLibre1');

  let li_totalPatronesP2 = localStorage.getItem('li_totalPatronesP2');
  let li_tecnicasp2 = localStorage.getItem('li_tecnicasp2');
  let li_flowp2 = localStorage.getItem('li_flowp2');
  let li_escenap2 = localStorage.getItem('li_escenap2')
  let li_totalP2 = localStorage.getItem('li_totalLibre2');

  //variables Deluxe
  let de_totalPatronesP1 = localStorage.getItem('de_totalPatronesP1');
  let de_tecnicasp1 = localStorage.getItem('de_tecnicasp1');
  let de_flowp1 = localStorage.getItem('de_flowp1');
  let de_escenap1 = localStorage.getItem('de_escenap1')
  let de_totalP1 = localStorage.getItem('de_totalDeluxe1');

  let de_totalPatronesP2 = localStorage.getItem('de_totalPatronesP2');
  let de_tecnicasp2 = localStorage.getItem('de_tecnicasp2');
  let de_flowp2 = localStorage.getItem('de_flowp2');
  let de_escenap2 = localStorage.getItem('de_escenap2')
  let de_totalP2 = localStorage.getItem('de_totalDeluxe2');

  let resFinalesP1 = parseFloat(em_totalP1) + parseFloat(hm_totalP1) + parseFloat(te_totalP1) + parseFloat(rm_totalP1) + parseFloat(li_totalP1) + parseFloat(de_totalP1);
  let resFinalesP2 = parseFloat(em_totalP2) + parseFloat(hm_totalP2) + parseFloat(te_totalP2) + parseFloat(rm_totalP2) + parseFloat(li_totalP2) + parseFloat(de_totalP2);


  // Easy Mode
  $("#em_resPatronesP1").html(em_totalPatronesP1);
  $("#em_resTecnicasP1").html(em_tecnicasp1);
  $("#em_resFlowP1").html(em_flowp1);
  $("#em_resEscenaP1").html(em_escenap1);
  $("#em_totalP1").html(em_totalP1);

  $("#em_resPatronesP2").html(em_totalPatronesP2);
  $("#em_resTecnicasP2").html(em_tecnicasp2);
  $("#em_resFlowP2").html(em_flowp2);
  $("#em_resEscenaP2").html(em_escenap2);
  $("#em_totalP2").html(em_totalP2);

  // Hard Mode
  $("#hm_resPatronesP1").html(hm_totalPatronesP1);
  $("#hm_resTecnicasP1").html(hm_tecnicasp1);
  $("#hm_resFlowP1").html(hm_flowp1);
  $("#hm_resEscenaP1").html(hm_escenap1);
  $("#hm_totalP1").html(hm_totalP1);

  $("#hm_resPatronesP2").html(hm_totalPatronesP2);
  $("#hm_resTecnicasP2").html(hm_tecnicasp2);
  $("#hm_resFlowP2").html(hm_flowp2);
  $("#hm_resEscenaP2").html(hm_escenap2);
  $("#hm_totalP2").html(hm_totalP2);

  // tematicas
  $("#te_resPatronesP1").html(te_totalPatronesP1);
  $("#te_resTecnicasP1").html(te_tecnicasp1);
  $("#te_resFlowP1").html(te_flowp1);
  $("#te_resEscenaP1").html(te_escenap1);
  $("#te_totalP1").html(te_totalP1);

  $("#te_resPatronesP2").html(te_totalPatronesP2);
  $("#te_resTecnicasP2").html(te_tecnicasp2);
  $("#te_resFlowP2").html(te_flowp2);
  $("#te_resEscenaP2").html(te_escenap2);
  $("#te_totalP2").html(te_totalP2);

  //random Mode
  $("#rm_resPatronesP1").html(rm_totalPatronesP1);
  $("#rm_resTecnicasP1").html(rm_tecnicasp1);
  $("#rm_resFlowP1").html(rm_flowp1);
  $("#rm_resEscenaP1").html(rm_escenap1);
  $("#rm_totalP1").html(rm_totalP1);

  $("#rm_resPatronesP2").html(rm_totalPatronesP2);
  $("#rm_resTecnicasP2").html(rm_tecnicasp2);
  $("#rm_resFlowP2").html(rm_flowp2);
  $("#rm_resEscenaP2").html(rm_escenap2);
  $("#rm_totalP2").html(rm_totalP2);

  //libre
  $("#li_resPatronesP1").html(li_totalPatronesP1);
  $("#li_resTecnicasP1").html(li_tecnicasp1);
  $("#li_resFlowP1").html(li_flowp1);
  $("#li_resEscenaP1").html(li_escenap1);
  $("#li_totalP1").html(li_totalP1);

  $("#li_resPatronesP2").html(li_totalPatronesP2);
  $("#li_resTecnicasP2").html(li_tecnicasp2);
  $("#li_resFlowP2").html(li_flowp2);
  $("#li_resEscenaP2").html(li_escenap2);
  $("#li_totalP2").html(li_totalP2);

  // deluxe
  $("#de_resPatronesP1").html(de_totalPatronesP1);
  $("#de_resTecnicasP1").html(de_tecnicasp1);
  $("#de_resFlowP1").html(de_flowp1);
  $("#de_resEscenaP1").html(de_escenap1);
  $("#de_totalP1").html(de_totalP1);

  $("#de_resPatronesP2").html(de_totalPatronesP2);
  $("#de_resTecnicasP2").html(de_tecnicasp2);
  $("#de_resFlowP2").html(de_flowp2);
  $("#de_resEscenaP2").html(de_escenap2);
  $("#de_totalP2").html(de_totalP2);

  $("#player1").html(p1);
  $("#player2").html(p2);

  $("#resFinalesP1").html(resFinalesP1);
  $("#resFinalesP2").html(resFinalesP2);

  function difTotales(num1, num2){
     if (num1 > num2) {
       return num1 - num2;
     }else{
       return num2 - num1;
     }
   }

   var difTotales = difTotales(resFinalesP1, resFinalesP2);

   if (difTotales <= 5) {
     $("#resultado").html("REPLICA");
     $(".final").css('background-color', 'rgb(57, 57, 57)');
   } else if (resFinalesP1 > resFinalesP2) {
     $("#resultado").html("Ganó " + p1);
     $("#resultado").css('color', 'black');
     $(".final").css('background-color', 'blue');
   } else{
     $("#resultado").html("Ganó " + p2);
     $("#resultado").css('color', 'black');
     $(".final").css('background-color', 'red')
   }

   //Chart.js
   var totalPatronesP1 = (parseFloat(em_totalPatronesP1) + parseFloat(hm_totalPatronesP1) + parseFloat(te_totalPatronesP1) + parseFloat(rm_totalPatronesP1) + parseFloat(li_totalPatronesP1) + parseFloat(de_totalPatronesP1)) * 100 / 210;
   var totalTecnicasP1 = (parseFloat(em_tecnicasp1) + parseFloat(hm_tecnicasp1) + parseFloat(te_tecnicasp1) + parseFloat(rm_tecnicasp1) + parseFloat(li_tecnicasp1) + parseFloat(de_tecnicasp1)) * 100 / 16;
   var totalFlowP1 = (parseFloat(em_flowp1) + parseFloat(hm_flowp1) + parseFloat(te_flowp1) + parseFloat(rm_flowp1) + parseFloat(li_flowp1) + parseFloat(de_flowp1)) * 100 / 16;
   var totalEscenaP1 = (parseFloat(em_escenap1) + parseFloat(hm_escenap1) + parseFloat(te_escenap1) + parseFloat(rm_escenap1) + parseFloat(li_escenap1) + parseFloat(de_escenap1)) * 100 /16;

   var totalPatronesP2 = (parseFloat(em_totalPatronesP2) + parseFloat(hm_totalPatronesP2) + parseFloat(te_totalPatronesP2) + parseFloat(rm_totalPatronesP2) + parseFloat(li_totalPatronesP2) + parseFloat(de_totalPatronesP2)) * 100 / 210;
   var totalTecnicasP2 = (parseFloat(em_tecnicasp2) + parseFloat(hm_tecnicasp2) + parseFloat(te_tecnicasp2) + parseFloat(rm_tecnicasp2) + parseFloat(li_tecnicasp2) + parseFloat(de_tecnicasp2)) * 100 / 16;
   var totalFlowP2 = (parseFloat(em_flowp2) + parseFloat(hm_flowp2) + parseFloat(te_flowp2) + parseFloat(rm_flowp2) + parseFloat(li_flowp2) + parseFloat(de_flowp2)) * 100 / 16;
   var totalEscenaP2 = (parseFloat(em_escenap2) + parseFloat(hm_escenap2) + parseFloat(te_escenap2) + parseFloat(rm_escenap2) + parseFloat(li_escenap2) + parseFloat(de_escenap2)) * 100 /16;

   var batallometro = (parseFloat(resFinalesP1) + parseFloat(resFinalesP2)) * 100 / 516;


   // chart BARRAS
    var chart1 = document.getElementById('chart1').getContext('2d');

    var chart1_bar = new Chart(chart1,{
        type:"bar",
        data: {
          labels:['Patrones', 'Técnica', 'Flow', 'P. Escena'],
          datasets: [
            {
            label: p1,
            data: [totalPatronesP1.toFixed(2), totalTecnicasP1.toFixed(2), totalFlowP1.toFixed(2), totalEscenaP1.toFixed(2)],
            backgroundColor: 'rgb(0, 0, 220)',
            borderColor: 'rgb(0, 0, 210)',
            borderWidth: 1
          },{
            label: p2,
            data: [totalPatronesP2.toFixed(2), totalTecnicasP2.toFixed(2), totalFlowP2.toFixed(2), totalEscenaP2.toFixed(2) ],
            backgroundColor: 'rgb(220, 0, 0)',
            borderColor: 'rgb(210, 0, 0)',
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

    // chart LINE
    var chart2 = document.getElementById('chart2').getContext('2d');

    var chart2_line = new Chart(chart2,{
        type:"line",
        data: {
          labels:['EM', 'HM', 'TE', 'RM', 'LI', 'DE'],
          datasets: [
            {
            label: p1,
            data: [(parseFloat(em_totalP1) * 100 / 30).toFixed(2), (parseFloat(hm_totalP1) * 100 /30).toFixed(2), (parseFloat(te_totalP1) * 100 / 44).toFixed(2), (parseFloat(rm_totalP1) * 100 / 38).toFixed(2), (parseFloat(li_totalP1) * 100 / 66).toFixed(2), (parseFloat(de_totalP1) * 100 / 50).toFixed(2) ],
            borderColor: 'rgb(0, 98, 255)',
            borderWidth: 2
          },{
            label: p2,
            data: [(parseFloat(em_totalP2) * 100 / 30).toFixed(2), (parseFloat(hm_totalP2) * 100 / 30).toFixed(2), (parseFloat(te_totalP2) * 100 / 44).toFixed(2), (parseFloat(rm_totalP2) * 100 / 38).toFixed(2), (parseFloat(li_totalP2) * 100 / 66).toFixed(2), (parseFloat(de_totalP2) * 100 /50).toFixed(2) ],
            borderColor: 'rgb(210, 0, 0)',
            borderWidth: 2
          }
        ]},
        options: {
          layout: {
              padding: {
                  left: 5,
                  right: 5,
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

    $(".h6-batallometro").html((parseFloat(resFinalesP1) + parseFloat(resFinalesP2)) + " Pts totales (nivel de batalla)")

    $("#btn-terminar").click(function(e){
       e.preventDefault();

       swal({
         title: "¿Volver al Menu Principal?",
         text: "Podrás elegir otros formatos",
         icon: "../../../img/favicon.ico",
         buttons: true,
         dangerMode: true
       })
       .then((willDelete) => {
         if (willDelete) {
           swal("¡No olvides seguirnos en Instagram!", {
             icon: "success",
           });

           $(location).attr('href', '../../../index.html');
         } else {
           e.preventDefault();
           swal("Recuerda seguirnos en Instagram @rapspreadsheet");

         }
       });

     });// fin btn-terminar
});
