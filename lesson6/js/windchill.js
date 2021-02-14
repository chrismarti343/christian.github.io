/*

function doInputOutput () {
//Can I remove the var from the input?
var temp = parseFloat (document.getElementById('temp').value);
var windSpeed = parseFloat (document.getElementById('windSpeed').value);
//windChill();
var itsCold = windChill(temp,windSpeed)

var div = document.getElementById ('output');
	div.innerHTML = itsCold;
}

function windChill (t,v) {

var itFeelsLike = 35.74 + 0.6215 * t -35.75* a + .4275 * t * a;
var a = Math.pow(v,.16);

*/

window.addEventListener("load", ()=>{

	function windspeed(){
		var t = document.getElementById('temperature').innerHTML;
		var w = document.getElementById('windspeed').innerHTML;
	
		console.log(t);
		console.log(w);
	
		var a = Math.pow(w,.16);
		var chill = 35.74 + 0.6215 * t -35.75* a + .4275 * t * a;
		var windchill = Math.round(chill * 10) / 10
		console.log(windchill);
	
		document.getElementById("windchill").innerHTML = windchill
	
	
	}
	
	windspeed();
});



