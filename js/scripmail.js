function SendMail(){

    //comilla simple alt + 96 (```)
    const nombre = document.getElementById('name').value;
    const fono = document.getElementById('fono').value;
    const email = document.getElementById('email').value;
    const empresa = document.getElementById('empresa').value;
    const msj = document.getElementById('txtarea1').value;
    window.location.href=`mailto:hola@asdasd.com?subject=Contacto&body=Nombre%3A%20${nombre}%0ATelefono%3A%20${fono}%0ACorreo%3A%20${email}%0AEmpresa%3A%20${empresa}%0AMensaje%3A%20${msj}%0A`;
  
   }
  
   const btnSend = document.getElementById('enviarCorreo');
   btnSend.addEventListener('click',function(e){
      alertTest();
      e.preventDefault();
      SendMail();
  
  
      //const nombre = document.getElementById('name').value;
     // const fono = document.getElementById('fono').value;
     // const email = document.getElementById('email').value;
    //  const empresa = document.getElementById('empresa').value;
     // const msj = document.getElementById('msj').value;
    //  window.location.href='mailto:daninba@gmail.com?subject=envioform&body=Nombre%3A%20${nombre}%0ATelefono%3A%${fono}%0ACorreo%3A%20${email}%0AEmpresa%3A%20${empresa}';
  
   }
    
   );