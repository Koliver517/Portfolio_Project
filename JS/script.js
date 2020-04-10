document.body.style.cursor="url('IMGS/test.png'), pointer";

var myVar;

function loading() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("load").style.display = "none";
  document.getElementById("loadin").style.display = "block";
}