async function pedirTodosLosProductos() {

    const urlBase = '';

    const peticion = await fetch(urlBase + '/productos');

    const respuestaJson = await peticion.json();

    mostrarDatosEnHTML(respuestaJson);
}

pedirTodosLosProductos();


function mostrarDatosEnHTML(respuestaJson) {

    let tableBody = document.getElementById('tableBody');

    for (const prod of respuestaJson) {
        tableBody.innerHTML += `
            <tr>
                <th scope="row">${prod.codigo}</th>
                <td>${prod.nombre}</td>
                <td>${prod.precioPorUnidad}</td>
                <td>${prod.precioPorDocena}</td>
                <td>${prod.costo}</td>
                <td>${prod.categoria}</td>
                <td>${prod.suplidor}</td>
                <td>${prod.disponible}</td>
            </tr>
        `
    }


}


