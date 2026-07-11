const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQntFsoxMoVTdUxgEWJVBnFC3YP5gP6vsahy3qxGIGL3SflCaM-GsxhMUFW3hTgVxguYTJRWz5ZXgEg/pub?output=csv";

fetch(url)
  .then(response => response.text())
  .then(csv => {

    const filas = csv.trim().split("\n").map(fila => fila.split(","));

    const encabezados = filas[0];
    const datos = filas.slice(1);

    const thead = document.querySelector("#tabla thead");
    const tbody = document.querySelector("#tabla tbody");

    // Encabezados
    let html = "<tr>";

    encabezados.forEach(columna => {
      html += `<th>${columna}</th>`;
    });

    html += "</tr>";

    thead.innerHTML = html;

    // Datos
    let cuerpo = "";

    datos.forEach(fila => {

      cuerpo += "<tr>";

      fila.forEach(columna => {

        cuerpo += `<td>${columna}</td>`;

      });

      cuerpo += "</tr>";

    });

    tbody.innerHTML = cuerpo;

  })
  .catch(error => console.error(error));
