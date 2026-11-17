// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

/* SVG */
const svgfestival = document.querySelector(".svg_festival");

const indgangen = document.querySelector("#details-indgangen");
const strandbaren = document.querySelector("#details-strandbaren");
const strandscenen = document.querySelector("#details-strandscenen");

indgangen.addEventListener("toggle", updateSvgPosition);
strandbaren.addEventListener("toggle", updateSvgPosition);
strandscenen.addEventListener("toggle", updateSvgPosition);

function updateSvgPosition() {
  console.log("updateSvgPosition");
  const openDetails = document.querySelector(".accordion-item:open");

  if (openDetails) {
    // hvis der er en åben
    // console.log(openDetails.dataset.position);
    svgfestival.dataset.position = openDetails.dataset.position;
  } else {
    // hvis der ikke er nogen åben
    delete svgfestival.dataset.position;
  }
}
