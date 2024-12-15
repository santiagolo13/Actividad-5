// Script para agregar y eliminar productos
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores de los campos
    const id = this.ID.value;
    const nombre = this.nombre.value;
    const descripcion = this.descripcion.value;
    const cantidad = this.cantidad.value;
    const color = this.color.value;

    // Crea una nueva fila en la tabla
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${descripcion}</td>
        <td>${cantidad}</td>
        <td>${color}</td>
        <td><button class="deleteBtn">Eliminar</button></td>
    `;

    // Agrega la nueva fila al cuerpo de la tabla
    document.querySelector('#productTable tbody').appendChild(newRow);

    // Limpia el formulario
    this.reset();
});

// Delegación de eventos para eliminar productos
document.querySelector('#productTable tbody').addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteBtn')) {
        event.target.closest('tr').remove(); // Elimina la fila del producto
    }
});

// Filtro para productos
document.getElementById('searchBtn').addEventListener('click', function() {
    const filter = document.getElementById('searchInput').value.toLowerCase(); // Obtiene el valor del input
    const rows = document.querySelectorAll('#productTable tbody tr'); // Selecciona todas las filas de la tabla

    rows.forEach(row => {
        const cells = row.getElementsByTagName('td'); // Obtiene todas las celdas de la fila
        const rowData = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(' '); // Combina el texto de las celdas
        row.style.display = rowData.includes(filter) ? '' : 'none'; // Muestra u oculta la fila según el filtro
    });
});
