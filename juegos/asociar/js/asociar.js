var ac=0;
        function comprobar() {
            var checkRadio1 = document.querySelector('input[name="prof"]:checked');
            var checkRadio2 = document.querySelector('input[name="objt"]:checked');
            var anashe; var anashe2;
            if(checkRadio1 != null){
                    var rad1 = checkRadio1.value;
                    console.log(rad1);
            }
            if(checkRadio2 != null){
                    var rad2 = checkRadio2.value;
                    console.log(rad2); 
            }
            if(ac != 3){
                if(rad1 == rad2 && rad1 != null && rad2 != null){
					 sAlert2("iGenial!", "Muy bien! continua.", "");
                    console.log(checkRadio1.id, checkRadio2.id)
                    document.getElementById(checkRadio1.id).remove();
                    document.getElementById(checkRadio2.id).remove();
                    document.getElementById(checkRadio1.id).remove();
                    document.getElementById(checkRadio2.id).remove();
    
                    ac++;
                }
                else{
                  sAlert2("Oh oh...", "Los puntos seleccionados no coinciden... Intentalo de nuevo :D", "");
    
                }
            }else if(ac==3){
				_SWin();
                
                document.getElementById(checkRadio1.id).remove();
                document.getElementById(checkRadio2.id).remove();
                document.getElementById(checkRadio1.id).remove();
                document.getElementById(checkRadio2.id).remove();
                
                location.reload();
             
            }
        }