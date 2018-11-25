/* Menu	*/

var Menu = '<li><a href="nosotros.html">Nosotros</a></li>'+
            '<li><a >Soluciones</a>'+
              '<ul class="rd-navbar-dropdown">'+
                '<li><a href="solucion01.html">Sistema de Bombeo Solar</a></li>'+
                '<li><a href="solucion02.html">Alumbrado Público Solar</a></li>'+
                '<li><a href="solucion03.html">Refrigeración Solar</a></li>'+
                '<li><a href="solucion04.html">Sistemas Fotovoltaicos fuera de Red (Viviendas Rurales)</a></li>'+
                '<li><a href="solucion05.html">Sistemas Fotovoltaicos para Autoconsumo (Ciudad)</a></li>'+
                '<li><a href="solucion06.html">Termas Solares</a></li>'+
                '<li><a href="solucion07.html">Sistemas de Proteccion Atmosférica</a></li>'+
                '<li><a href="solucion08.html">Sistemas de Pozos a Tierra</a></li>'+
              '</ul>'+
            '</li>'+
            '<li><a>Productos</a>'+
              '<ul class="rd-navbar-megamenu">'+
                '<li>'+
                  '<p class="rd-megamenu-header">Baterias</p>'+
                  '<ul class="rd-megamenu-list">'+
                    '<li><a href="producto01.html">AOKLY</a></li>'+
                    '<li><a href="producto02.html">Kaise</a></li>'+
                    '<li><a href="producto03.html">Narada</a></li>'+
                  '</ul>'+
                '</li>'+
                '<li>'+
                  '<p class="rd-megamenu-header">Controladores</p>'+
                  '<ul class="rd-megamenu-list">'+
                    '<li><a href="producto04.html">MPPT</a></li>'+
                    '<li><a href="producto05.html">PWM</a></li>'+
                  '</ul>'+
                '</li>'+
                '<li>'+
                  '<p class="rd-megamenu-header">Inversores</p>'+
                  '<ul class="rd-megamenu-list">'+
                    '<li><a href="producto06.html">Onda moderada</a></li>'+
                    '<li><a href="producto07.html">Onda Sinosuidal</a></li>'+
                  '</ul>'+
                '</li>'+
                '<li>'+
                  '<p class="rd-megamenu-header">Paneles Solares</p>'+
                  '<ul class="rd-megamenu-list">'+
                    '<li><a href="producto08.html">Paneles Solares</a></li>'+
                  '</ul>'+
                '</li>'+
              '</ul>'+
            '</li>'+
            '<li><a href="proyectos.html">Proyectos</a></li>'+
            '<li><a href="contacto.html">Contacto</a></li>';

$('#HeaderMenu').append(Menu);            

/* Teléfonos */

var telefonos = ['982 065 269','996 262 624','991 218 693', '(01) 791 2210']

//Header telefonos
var HeaderTelefonos ='';

for(var i=0; i<telefonos.length; i++)
{
	HeaderTelefonos += '<li><a href="callto:#">'+telefonos[i]+'</a></li>';
}

$('#HeaderTelefonos').append(HeaderTelefonos);
$('#Telefonos-contacto').append(HeaderTelefonos);

/* Redes Sociales */

var ofb = new Object();

ofb.Nombre = 'Facebook';
ofb.Icon = 'fa-facebook';
ofb.url = 'https://www.facebook.com/AlvatronicsGroup';

var oin = new Object();

oin.Nombre = 'Instagram';
oin.Icon = 'fa-instagram';
oin.url = 'https://www.instagram.com/alvatronicsgroup';

var opl = new Object();

opl.Nombre = 'Google Plus';
opl.Icon = 'fa-google-plus';
opl.url = 'https://plus.google.com/u/0/105127285115080122282';

var oyt = new Object();

oyt.Nombre = 'Youtube';
oyt.Icon = 'fa-youtube';
oyt.url = '#';

var redesSociales = [ofb, oin, opl, oyt];

var HeaderRedesSociales ='';

for(var i=0; i<redesSociales.length; i++)
{
	HeaderRedesSociales += '<li><a class="icon icon-xxs icon-gray-darker '+ redesSociales[i].Icon +'" href="'+ redesSociales[i].url +'"></a></li>'
}

$('#HeaderRedesSociales').append(HeaderRedesSociales);
$('#FooterRedesSociales').append(HeaderRedesSociales);
$('#RedesSociales-contacto').append(HeaderRedesSociales);

/* Dirección */

var Direccion = 'Mza. A Lote 11 Prog. Viv. La Riviera, Lima, San Martin de Porres'

$('#HeaderDireccion').append(Direccion);
$('#Direccion-contacto').append(Direccion);

/* Blog*/

var CargarBlogs = true;

if(CargarBlogs)
{
	$.ajax({
        url: "https://www.googleapis.com/blogger/v3/blogs/6592466145304625578/posts?key=AIzaSyDblxCwwqQafs4-9jEmMIpSRseavXpHrkQ"
    }).then(function(data) {

       //debugger;
    });

}
