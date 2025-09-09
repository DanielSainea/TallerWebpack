const inicioPage = (tasas) => {
    const contentPage = document.createElement('section');
//titulo
    const titulo = document.createElement('h2');
    titulo.textContent = 'Realice su conversión';
//Formulario monto
    const montoData = document.createElement('label');
    montoData.textContent = 'Monto: ';
    const montoInput = document.createElement('input');
    montoInput.type = 'number';
    montoInput.placeholder = 'Ingrese monto';
//Formulario modena origen
    const origenData = document.createElement('label');
    origenData.textContent = 'Origen: ';
    const origenSelect = document.createElement('select');
    ['USD', 'EUR', 'COP'].forEach(moneda => {
        const option = document.createElement('option');
        option.value = moneda;
        option.textContent = moneda;
        origenSelect.appendChild(option);
    });
//Formulario modena destino

    const destinoData = document.createElement('label');
    destinoData.textContent = 'Destino: ';
    const destinoSelect = document.createElement('select');
    ['USD', 'EUR', 'COP'].forEach(moneda => {
        const option = document.createElement('option');
        option.value = moneda;
        option.textContent = moneda;
        destinoSelect.appendChild(option);
    });
//Boton convertir

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.textContent = 'Convertir';

//Resultado y mensajes de alerta

    const resultado = document.createElement('p');
    resultado.textContent = 'Resultado:  ';

    const errorMsg = document.createElement('p');

    boton.addEventListener('click', () => {
        errorMsg.textContent = '';
        resultado.textContent = 'Resultado:  ';

        const monto = parseFloat(montoInput.value);
        const origen = origenSelect.value;
        const destino = destinoSelect.value;

        if (origen === destino) {
            errorMsg.textContent = '⚠️ La moneda de origen y destino no pueden ser iguales';
            return;
        }

        if (isNaN(monto)) {
            errorMsg.textContent = '⚠️ Por favor ingrese un monto válido';
            return;
        }

        const conversion = monto * tasas[origen][destino];
        resultado.textContent = `Resultado: ${conversion.toFixed(2)} ${destino}`;
    });

    contentPage.appendChild(titulo);
    contentPage.appendChild(montoData);
    contentPage.appendChild(montoInput);
    contentPage.appendChild(document.createElement('br'));

    contentPage.appendChild(origenData);
    contentPage.appendChild(origenSelect);
    contentPage.appendChild(document.createElement('br'));

    contentPage.appendChild(destinoData);
    contentPage.appendChild(destinoSelect);
    contentPage.appendChild(document.createElement('br'));

    contentPage.appendChild(boton);
    contentPage.appendChild(resultado);
    contentPage.appendChild(errorMsg);

    return contentPage;
}

export default inicioPage;
