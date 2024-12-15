// Evento para manejar el formulario y agregar materiales a la tabla
document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores de los campos
    const id = this.ID.value;
    const nombre = this.nombre.value;
    const cantidad = this.cantidad.value;
    const color = this.color.value;

    // Crea una nueva fila en la tabla
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${color}</td>
        <td><button class="deleteBtn">Eliminar</button></td>
    `;

    // Agrega la nueva fila al cuerpo de la tabla
    document.querySelector('#productTable tbody').appendChild(newRow);

    // Limpia el formulario
    this.reset();
});

// Delegación de eventos para eliminar materiales
document.querySelector('#productTable tbody').addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteBtn')) {
        event.target.closest('tr').remove(); // Elimina la fila del material
    }
});

// Filtro de búsqueda para los materiales
document.getElementById('searchBtn').addEventListener('click', function () {
    const filter = document.getElementById('searchInput').value.toLowerCase(); // Obtiene el valor del input
    const rows = document.querySelectorAll('#productTable tbody tr'); // Selecciona todas las filas de la tabla

    rows.forEach(row => {
        const cells = row.getElementsByTagName('td'); // Obtiene todas las celdas de la fila
        const rowData = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(' '); // Combina el texto de las celdas
        row.style.display = rowData.includes(filter) ? '' : 'none'; // Muestra u oculta la fila según el filtro
    });
});

// Evento para manejar el botón de salida
document.getElementById('exitBtn').addEventListener('click', function () {
    // Acción al hacer clic en el botón de salida
    if (confirm('¿Estás seguro de que deseas salir?')) {
        window.location.href = 'index.html'; // Redirige a la página de inicio o cualquier otra página
    }
});
