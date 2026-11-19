// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");
if (svgPlaceholder) {
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
}
const armbaand = document.querySelector(".opsamling-placeholder");

if (armbaand) {
  const params = new URLSearchParams(location.search);
  console.log(params.get("moenster"));

  if (params.get("moenster") === "camo") {
    if (params.get("farver") === "palet1") {
      if (params.get("logo") === "partout") {
        armbaand.innerHTML = `<img src="imgs/camo-lilla-partout.webp" alt="armbånd">`;
      } else if (params.get("logo") === "endags") {
        armbaand.innerHTML = `<img src="imgs/camo-lilla-en-dags.webp" alt="armbånd">`;
      } else if (params.get("logo") === "todags") {
        armbaand.innerHTML = `<img src="imgs/camo-lilla-to-dags.webp" alt="armbånd">`;
      }
    } else if (params.get("farver") === "palet2") {
      if (params.get("logo") === "partout") {
        armbaand.innerHTML = `<img src="imgs/camo-varm-partout.webp" alt="armbånd">`;
      } else if (params.get("logo") === "endags") {
        armbaand.innerHTML = `<img src="imgs/camo-varm-en-dags.webp" alt="armbånd">`;
      } else if (params.get("logo") === "todags") {
        armbaand.innerHTML = `<img src="imgs/camo-varm-to-dags.webp" alt="armbånd">`;
      }
    }
  }

  if (params.get("moenster") === "leopard") {
    if (params.get("farver") === "palet1") {
      if (params.get("logo") === "partout") {
        armbaand.innerHTML = `<img src="imgs/leopard-lilla-partout.webp" alt="armbånd">`;
      } else if (params.get("logo") === "endags") {
        armbaand.innerHTML = `<img src="imgs/leopard-lilla-en-dags.webp" alt="armbånd">`;
      } else if (params.get("logo") === "todags") {
        armbaand.innerHTML = `<img src="imgs/leopard-lilla-to-dags.webp" alt="armbånd">`;
      }
    } else if (params.get("farver") === "palet2") {
      if (params.get("logo") === "partout") {
        armbaand.innerHTML = `<img src="imgs/leopard-varm-partout.webp" alt="armbånd">`;
      } else if (params.get("logo") === "endags") {
        armbaand.innerHTML = `<img src="imgs/leopard-varm-en-dags.webp" alt="armbånd">`;
      } else if (params.get("logo") === "todags") {
        armbaand.innerHTML = `<img src="imgs/leopard-varm-to-dags.webp" alt="armbånd">`;
      }
    }
  }
}
