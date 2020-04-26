function my_rand(max) {
  return Math.floor(Math.random() *  Math.floor(max));
}

function my_URL(url) {
  window.location=url;
}

function RedirectionJavascript(ici) {
	document.location.href=ici
	}

function rand() {

let a = my_rand(21);
if (a == 0)
	RedirectionJavascript("destinations/gorge_de_vikos.html");
if (a == 1) 
	RedirectionJavascript("destinations/grande_barriere_de_corail.html");
if (a == 2) 
    RedirectionJavascript("destinations/Inde.html");
if (a == 3) 
	RedirectionJavascript("destinations/kenya.html");
if (a == 4) 
  	RedirectionJavascript("destinations/kilimanjaro.html");
if (a == 5) 
	RedirectionJavascript("destinations/lave.html");
if (a == 6) 
  	RedirectionJavascript("destinations/machu_pichu.html");
if (a == 7) 
	RedirectionJavascript("destinations/magdalenefjorden.html");
if (a == 8) 
	RedirectionJavascript("destinations/montagne_pelee.html");
if (a == 9) 
	RedirectionJavascript("destinations/mt_saint_michel.html");
if (a == 10) 
  	RedirectionJavascript("destinations/nebraska.html");
if (a == 11) 
	RedirectionJavascript("destinations/new_york.html");
if (a == 12) 
  	RedirectionJavascript("destinations/pyramide_de_gizeh.html");
if (a == 13) 
	RedirectionJavascript("destinations/taj_mahal.html");
if (a == 14) 
  	RedirectionJavascript("destinations/vietnam.html");
if (a == 15) 
	RedirectionJavascript("destinations/bangok.html");
if (a == 16) 
  	RedirectionJavascript("destinations/canyon_lake.html");
if (a == 17) 
	RedirectionJavascript("destinations/chichen_itza.html");
if (a == 18) 
  	RedirectionJavascript("destinations/crater_volcan.html");
if (a == 19) 
	RedirectionJavascript("destinations/himalaya.html");
if (a == 20) 
  	RedirectionJavascript("destinations/uluru.html");
}