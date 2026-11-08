(() => {
  const canvas = document.querySelector("#Estrella");
  const ctx = canvas.getContext("2d");
  const button = document.querySelector("#start-star");
  const sections = [...document.querySelectorAll("[data-star-section]")];
  const resolutionInput = document.querySelector("#star-resolution");
  const durationInput = document.querySelector("#star-duration");
  const selected = [true, true, true, true];
  let S = 75;
  let duration = 2000;
  let isDrawn = false;

  ctx.lineWidth = 1;
  ctx.strokeStyle = "red";

  function drawSection(section, lastLine = S) {
    ctx.beginPath();

    if (section === 0) {
      ctx.moveTo(0, 0);
      for (let i = 0; i <= lastLine; i++) {
        ctx.lineTo(i * (900 / S), 450);
        ctx.moveTo(0, (i + 1) * (450 / S));
      }
    } else if (section === 1) {
      ctx.moveTo(900, 0);
      for (let i = 0; i <= lastLine; i++) {
        ctx.lineTo(900, i * (450 / S));
        ctx.moveTo((i + 1) * (900 / S), 0);
      }
    } else if (section === 2) {
      ctx.moveTo(0, 0);
      for (let i = 0; i <= lastLine; i++) {
        ctx.lineTo(0, 450 - i * (450 / S));
        ctx.moveTo((i + 1) * (900 / S), 0);
      }
    } else {
      ctx.moveTo(900, 0);
      for (let i = 0; i <= lastLine; i++) {
        ctx.lineTo(900 - i * (900 / S), 450);
        ctx.moveTo(900, (i + 1) * (450 / S));
      }
    }

    ctx.stroke();
  }

  function render(lastLine = S) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    selected.forEach((on, index) => {
      if (on) drawSection(index, lastLine);
    });
  }

  // Los botones numerados eligen qué cuadrantes incluir en el dibujo.
  sections.forEach((section, index) => {
    section.addEventListener("click", () => {
      selected[index] = !selected[index];
      section.setAttribute("aria-pressed", selected[index]);
      if (isDrawn) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        isDrawn = false;
      }
      button.disabled = !selected.some(Boolean);
      button.textContent = "Mostrar estrella";
    });
  });

  // El botón principal dibuja las secciones seleccionadas o borra el canvas.
  button.addEventListener("click", () => {
    if (isDrawn) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      isDrawn = false;
      button.textContent = "Mostrar estrella";
      return;
    }

    if (!resolutionInput.reportValidity() || !durationInput.reportValidity()) return;
    S = resolutionInput.valueAsNumber;
    duration = durationInput.valueAsNumber;

    button.disabled = true;
    sections.forEach((section) => (section.disabled = true));

    let start;
    function draw(time) {
      if (start === undefined) start = time;
      const progress = Math.min((time - start) / duration, 1);
      render(Math.floor(progress * S));

      if (progress < 1) {
        requestAnimationFrame(draw);
      } else {
        isDrawn = true;
        button.textContent = "Listo";
        button.disabled = false;
        sections.forEach((section) => (section.disabled = false));
      }
    }

    button.textContent = "Dibujando...";
    requestAnimationFrame(draw);
  });
})();
