


function sAlert(tituloAlerta, contenidoAlerta, tipoAlerta, pieAlerta){
     
 Swal.fire({
   titleText: tituloAlerta,
   text: contenidoAlerta,
   icon: tipoAlerta ? tipoAlerta : "",
   imageUrl: 'https://i.pinimg.com/474x/40/d8/0d/40d80dd33c14069f55e363d366d0129e.jpg',
   imageWidth: 150,
   imageHeight: 150,
   confirmButtonColor: "#3085d6",
   footer: "<small>"+pieAlerta,
    
}).then((result) => {
    if (result.isConfirmed) {    
    	window.location.reload();
    } 
});

}


function sAlert2(tituloAlerta, contenidoAlerta, tipoAlerta, Uimage){
	
     if(Uimage == null){
  Swal.fire({
    titleText: tituloAlerta,
    html: contenidoAlerta,
	imageUrl: 'https://st2.depositphotos.com/1001911/10590/v/950/depositphotos_105907580-stock-illustration-ok-sign-emoticon.jpg',
   imageWidth: 200,
   imageHeight: 150,
    icon: tipoAlerta ? tipoAlerta : "",
    confirmButtonColor: "#3085d6",
     
 });
	 }else{
  Swal.fire({
    titleText: tituloAlerta,
    html: contenidoAlerta,
	
   imageWidth: 200,
   imageHeight: 150,
    icon: tipoAlerta ? tipoAlerta : "",
    confirmButtonColor: "#3085d6",
     
 });
	 }
 }

function _SWin(){ sAlert("¡Felicitaciones!","¡Lo lograste! sigue así.","",""); }
function _SLose(){sAlert("","No te rindas! Sigue intentandolo.","","El exito no se da de la noche a la ma&ntilde;ana, no te desanimes!");}