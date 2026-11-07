(() => {
  const canvas = document.querySelector("#Estrella");
  const ctx = canvas.getContext("2d");

  ctx.lineWidth = 1;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(0, 0);

  S = 75;

  for (let i = 0; i <= S; i++) {
    ctx.lineTo(i * (900 / S), 450);
    ctx.moveTo(0, (i + 1) * (450 / S));
  }

  ctx.moveTo(900, 0);

  for (let i = 0; i <= S; i++) {
    ctx.lineTo(900, i * (450 / S));
    ctx.moveTo((i + 1) * (900 / S), 0);
  }

  ctx.moveTo(0, 0);

  for (let i = 0; i <= S; i++) {
    ctx.lineTo(0, 450 - i * (450 / S));
    ctx.moveTo((i + 1) * (900 / S), 0);
  }

  for (let i = 0; i <= S; i++) {
    ctx.lineTo(900 - i * (900 / S), 450);
    ctx.moveTo(900, (i + 1) * (450 / S));
  }

  // for (let i = 0; i <= S; i++) {
  //   ctx.lineTo(i * (900 / S), 900);
  //   ctx.moveTo(0, (i + 1) * (900 / S));
  // }

  // ctx.moveTo(900, 0);

  // for (let i = 0; i <= S; i++) {
  //   ctx.lineTo(900, i * (900 / S));
  //   ctx.moveTo((i + 1) * (900 / S), 0);
  // }

  // ctx.moveTo(0, 0);

  // for (let i = 0; i <= S; i++) {
  //   ctx.lineTo(0, 900 - i * (900 / S));
  //   ctx.moveTo((i + 1) * (900 / S), 0);
  // }

  // for (let i = 0; i <= S; i++) {
  //   ctx.lineTo(900 - i * (900 / S), 900);
  //   ctx.moveTo(900, (i + 1) * (900 / S));
  // }

  ctx.stroke();
})();
