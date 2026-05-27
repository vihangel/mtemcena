/** @format */

function downloadPNG() {
  const card = document.getElementById("card");
  html2canvas(card, {
    width: 1080,
    height: 1320,
    scale: 1,
    useCORS: true,
    allowTaint: true,
    backgroundColor: null,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "vaga-comercial-gc.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
