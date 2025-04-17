// Seleccionar por ID
const titulo = document.getElementById('titulo');

// Seleccionar por clase
const parrafos = document.getElementsByClassName('parrafo');

// Seleccionar por etiqueta
const botones = document.getElementsByTagName('button');

// Selectores modernos (retornan el primer elemento que coincida)
const primerLink = document.querySelector('a.externo');

// Selectores modernos (retornan todos los elementos que coincidan)
const todosLosLinks = document.querySelectorAll('a');


// Usando un bucle for tradicional
for (let i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].textContent);
}
  
  // Usando forEach con NodeList (resultado de querySelectorAll)
  todosLosLinks.forEach(link => {
    console.log(link.href);
  });

// //Cambiar el contenido de un elemento
//   // Texto plano
// titulo.textContent = 'Nuevo título';

// // Trabajar con atributos:
// // Contenido HTML
// const contenedor = document.querySelector('.contenido');
// contenedor.innerHTML = '<p>Este es un <strong>nuevo</strong> párrafo</p>';

// //Manipular clases CSS:
// // Obtener atributo
// const imagen = document.querySelector('img');
// console.log(imagen.src);
// console.log(imagen.getAttribute('alt'));

// // Manipular estilos directamente:
// // Establecer atributo
// imagen.src = 'nueva-imagen.jpg';
// imagen.setAttribute('alt', 'Descripción de la nueva imagen');

// // Comprobar si existe un atributo
// console.log(imagen.hasAttribute('id'));

// // Eliminar atributo
// imagen.removeAttribute('data-special');


// // Crear un nuevo elemento

// const boton = document.querySelector('button');

// // Agregar clase
// boton.classList.add('destacado');

// // Eliminar clase
// boton.classList.remove('inactivo');

// // Alternar clase (agregar si no existe, eliminar si existe)
// boton.classList.toggle('seleccionado');

// // Comprobar si contiene una clase
// if (boton.classList.contains('principal')) {
//   console.log('Es el botón principal');
// }


// const panel = document.querySelector('.panel');

// // Establecer un estilo individual
// panel.style.backgroundColor = '#f0f0f0';
// panel.style.width = '100%';

// // Múltiples estilos
// Object.assign(panel.style, {
//   color: '#333',
//   fontWeight: 'bold',
//   padding: '10px'
// });


/////////Crear y Eliminar Elementos/////////

// // Crear un elemento
// const nuevoParrafo = document.createElement('p');
// nuevoParrafo.textContent = 'Este es un párrafo creado dinámicamente';
// nuevoParrafo.classList.add('destacado');

// // Crear un fragmento (para múltiples elementos)
// const fragmento = document.createDocumentFragment();
// for (let i = 1; i <= 3; i++) {
//   const item = document.createElement('li');
//   item.textContent = `Elemento ${i}`;
//   fragmento.appendChild(item);
// }

// // Agregar al final de un elemento
// const contenedor = document.querySelector('.contenido');
// contenedor.appendChild(nuevoParrafo);

// // Insertar en una posición específica
// const lista = document.querySelector('ul');
// lista.appendChild(fragmento);

// // Insertar antes de un elemento específico
// const referencia = document.querySelector('.item-referencia');
// contenedor.insertBefore(nuevoParrafo, referencia);

// // Métodos modernos
// referencia.before(nuevoParrafo);  // Antes del elemento
// referencia.after(nuevoParrafo);   // Después del elemento
// referencia.prepend(nuevoParrafo); // Al inicio de los hijos
// referencia.append(nuevoParrafo);  // Al final de los hijos

// // Método tradicional (desde el padre)
// const padre = documento.querySelector('.contenedor');
// const hijoAEliminar = document.querySelector('.elemento-obsoleto');
// padre.removeChild(hijoAEliminar);

// // Método moderno (sin referencia al padre)
// hijoAEliminar.remove();

// const nuevoElemento = document.createElement('div');
// nuevoElemento.textContent = 'Reemplazo';

// const elementoAntiguo = document.querySelector('.antiguo');
// elementoAntiguo.parentNode.replaceChild(nuevoElemento, elementoAntiguo);

// // Método moderno
// elementoAntiguo.replaceWith(nuevoElemento);