const menu = (navigateTo, tasas) => {
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'menuPrincipal');
    nav.classList.add('menu');

    // Botón de cierre
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    const iconClose = document.createElement('span');
    iconClose.classList.add('material-symbols-outlined');
    iconClose.textContent = 'close';
    closeBtn.appendChild(iconClose);
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('open');
    });

    // Contenedor principal
    const list = document.createElement('ul');

    // Título
    const titulo = document.createElement('h3');
    titulo.textContent = 'Administrar Tasas';
    list.appendChild(titulo);

    // Tabla de tasas
    const tabla = document.createElement('table');
    tabla.classList.add('tabla-tasas');

    const header = document.createElement('tr');
    header.innerHTML = `
        <th>Origen</th>
        <th>Destino</th>
        <th>Tasa</th>
        <th>Acciones</th>
    `;
    tabla.appendChild(header);

// Función para renderizar filas
const renderFilas = () => {
    // Limpiar filas anteriores
    tabla.querySelectorAll('tr:not(:first-child)').forEach(tr => tr.remove());

    for (const origen in tasas) {
        for (const destino in tasas[origen]) {
            if (origen === destino) continue; // no mostrar tasa de la misma moneda

            const fila = document.createElement('tr');

            // Origen
            const tdOrigen = document.createElement('td');
            tdOrigen.textContent = origen;

            // Destino
            const tdDestino = document.createElement('td');
            tdDestino.textContent = destino;

            // Campo de modificación de la tasa
            const tdTasa = document.createElement('td');
            const inputTasa = document.createElement('input');
            inputTasa.type = 'number';
            inputTasa.step = '0.0001';
            inputTasa.value = tasas[origen][destino];
            tdTasa.appendChild(inputTasa);

            // Acciones
            const tdAcciones = document.createElement('td');

            const btnGuardar = document.createElement('button');
            btnGuardar.textContent = 'Guardar';
          btnGuardar.addEventListener('click', () => {
    tasas[origen][destino] = parseFloat(inputTasa.value);
    alert(`✅ Tasa actualizada: ${origen} → ${destino} = ${inputTasa.value}`);
});
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.addEventListener('click', () => {
                delete tasas[origen][destino];
                renderFilas();
            });

            tdAcciones.appendChild(btnGuardar);
            tdAcciones.appendChild(btnEliminar);

            fila.appendChild(tdOrigen);
            fila.appendChild(tdDestino);
            fila.appendChild(tdTasa);
            fila.appendChild(tdAcciones);

            tabla.appendChild(fila);
        }
    }
};

renderFilas();

    list.appendChild(tabla);

    const div = document.createElement('div');
    div.appendChild(closeBtn);
    div.appendChild(list);

    nav.appendChild(div);
    return nav;
};

export default menu;
