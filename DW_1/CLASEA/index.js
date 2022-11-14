// let boton = document.getElementById("uno");
let boton2 = document.getElementById("dos" );
let boton3 = document.getElementById("tres");

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function iniciar()
{
    boton2.disabled=false;
    
    setCookie("boton2.disabled",false,10);

}

function iniciar2()
{
    if (document.cookie=boton2.disabled == false) {

        boton3.disabled=false;
        setCookie("boton3.disabled",false,10);
        // setCookie("valor","0",10 )
    }
}
function accion() {
    if (getCookie("boton2.disabled") == false) {
        boton2.disabled = getCookie("boton2.disabled");
        boton3.disabled = getCookie("boton3.disabled");
    }
}

onload = accion();

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }