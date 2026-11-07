const canvas = document.querySelector("#Espiral");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 5;
ctx.strokeStyle = "#eff30c";

var Aurea = (1 + Math.sqrt(5)) / 2;
console.log(Aurea);

ctx.beginPath();

var S = 75;

ctx.moveTo(600, 350);

for (var i = 0; i <= S; i += 0.1) {
  var radio = Math.pow(Aurea, (i * 2) / Math.PI) * 2.6;

  ctx.lineTo(
    600 + radio * Math.cos(i - Math.PI / 2),
    350 - radio * Math.sin(i - Math.PI / 2),
  );
}

ctx.stroke();
