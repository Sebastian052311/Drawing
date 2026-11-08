const canvas = document.querySelector("#Espiral");
const ctx = canvas.getContext("2d");
const button = document.querySelector("#start-spiral");

ctx.lineWidth = 5;
ctx.strokeStyle = "#eff30c";

const aurea = (1 + Math.sqrt(5)) / 2;
const totalSteps = 751;
const duration = 2000;
let isDrawn = false;

// Anima la espiral durante dos segundos después de presionar el botón.
button.addEventListener("click", () => {
  if (isDrawn) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    button.textContent = "Mostrar espiral";
    isDrawn = false;
    return;
  }

  button.disabled = true;
  button.textContent = "Dibujando...";
  ctx.beginPath();
  ctx.moveTo(600, 350);

  let drawnSteps = 0;
  let startTime;

  function draw(timestamp) {
    if (startTime === undefined) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const targetStep = Math.floor(progress * totalSteps);

    while (drawnSteps < targetStep) {
      const i = drawnSteps / 10;
      const radio = Math.pow(aurea, (i * 2) / Math.PI) * 2.6;

      ctx.lineTo(
        600 + radio * Math.cos(i - Math.PI / 2),
        350 - radio * Math.sin(i - Math.PI / 2),
      );
      drawnSteps++;
    }

    ctx.stroke();

    if (progress < 1) {
      requestAnimationFrame(draw);
    } else {
      button.textContent = "Listo";
      button.disabled = false;
      isDrawn = true;
    }
  }

  requestAnimationFrame(draw);
});
