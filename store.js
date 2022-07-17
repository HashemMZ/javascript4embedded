function detectIE() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return false;
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		return false;
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return false;
	}

	// other browser
	return true;
}
//then to set key value use something like this
function store(key,value)
{
	if (detectIE()) 
		window.localStorage.setItem(key, value);
	else
		setCookie(key,value,1);
}

function restore(key)
{
	var value;
	if (detectIE()) 
		value = window.localStorage.getItem(key);
	else{
		setCookie('key','value',1);
		value = getCookie(key);
	}
	return value;
}

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
return null;}
//also you can erase the cookie

function eraseCookie(name) {   
document.cookie = name+'=; Max-Age=-99999999;';  }