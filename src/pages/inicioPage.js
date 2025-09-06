

const inicioPage = ()=>{
    const contentPage = document.createElement('section');

    const titulo = document.createElement('h2');
    titulo.textContent = 'Realice su conversión';

    const monto = document.createElement('p');
    monto.textContent= 'Monto:';
      const origen = document.createElement('p');
    origen.textContent= 'Origen:';
      const destino = document.createElement('p');
    destino.textContent= 'Destino:';
 const resultado = document.createElement('p');
    resultado.textContent= 'Resultado:';

   
    contentPage.appendChild(titulo);
   contentPage.appendChild(monto);
    contentPage.appendChild(origen);
     contentPage.appendChild(destino);
     contentPage.appendChild(resultado);

    return contentPage;
}

export default inicioPage;