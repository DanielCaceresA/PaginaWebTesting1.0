// noche y dia
//1 ir abuscar el boton para el evento mediante id
function alertTest(){
  alert ('weeeeee');
}


      // metodo 2

 // pagina servicios 2 

 function cambiarnocheService(){
  document.body.classList.toggle('noche');
  document.getElementById("services2").classList.toggle("noche2");
  document.getElementById("switchDN2").classList.toggle("active");
  document.getElementById("sesgoabajo").classList.toggle("noche");


  if (document.body.classList.contains('noche')){
    localStorage.setItem('dark-mode','true');
  }else{
    localStorage.setItem('dark-mode','false');
  }

 }

 if(localStorage.getItem('dark-mode') === 'true'){

  document.body.classList.add('noche');
  document.getElementById("services2").classList.add("noche2");
  document.getElementById("switchDN2").classList.add("active");
  document.getElementById("sesgoabajo").classList.add("noche");


}else {

  document.body.classList.remove('noche');
  document.getElementById("services2").classList.remove("noche2");
  document.getElementById("switchDN2").classList.remove("active");
  document.getElementById("sesgoabajo").classList.remove("noche");


}

 

 const pruebabtn = () => {
  console.log("se hizo click");
}


 const botonServicio = document.getElementById("switchDN2");
 botonServicio.addEventListener("click", cambiarnocheService);


 




//  ERRORES COMUNES ... SI NO LEE DEL DOM, ES PQ LSO ELEMENTOS NO ESTAN DECLARADOS SO, PONER SCRIPT AL FINAL DEL BODY
// Y LOS LISTENER VAN DESPUES DE LAS FUNCIONES, VA EN ORDEN
 
 


//  $(document).ready(function(){
//     $("#hide").on('click', function() {
//         $("#element").hide();
//         return false;
//     });
 
//     $("#show").on('click', function() {
//         $("#element").show();
//         return false;
//     });
//     // el script funciona dentro de html :C
//     $('.open-popup-link').magnificPopup({
//         type:'inline',
//           midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
//           });
// });


// const btnSwitch = document.querySelector('#switchDN');
// const btnSwitch2 = document.getElementsByClassName('.switchDN');

// btnSwitch2.addEventListener('click', () => {
    
//     document.body.classList.toggle('noche');
//     btnSwitch.classList.add('noche');
// }

// )