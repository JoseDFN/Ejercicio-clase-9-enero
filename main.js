let libros = [
    {
        nombre: "Clean Code: A Handbook of Agile Software Craftsmanship",
        autor: "Robert C. Martin",
        descripcion: "Este libro es un clásico en la programación orientada a la calidad del código. Robert C. Martin (también conocido como 'Uncle Bob') presenta principios, patrones y buenas prácticas para escribir código limpio, fácil de entender y mantener. A lo largo del libro, se analizan ejemplos de código defectuoso y cómo mejorar su legibilidad, reduciendo la complejidad y aumentando la eficiencia del equipo de desarrollo. Ideal tanto para programadores experimentados como para novatos que buscan mejorar la calidad de su trabajo."
    },
    {
        nombre: "The Pragmatic Programmer: Your Journey to Mastery",
        autor: "Andrew Hunt y David Thomas",
        descripcion: "Este libro es una guía fundamental para programadores de cualquier nivel. Los autores comparten consejos prácticos sobre cómo mejorar como desarrollador, desde técnicas de codificación hasta cómo gestionar proyectos de software. Ofrece recomendaciones sobre herramientas, prácticas y hábitos que ayudan a crear código más eficiente y sostenible. Es considerado uno de los mejores libros sobre el arte de la programación."
    },
    {
        nombre: "You Don't Know JS (Book Series)",
        autor: "Kyle Simpson",
        descripcion: "Esta serie de libros está dedicada a profundizar en JavaScript, desde los aspectos más fundamentales hasta los más complejos. 'You Don’t Know JS' es ideal para programadores que desean entender a fondo cómo funciona JavaScript, un lenguaje esencial para el desarrollo web. Cada libro de la serie cubre temas específicos como el manejo de asincronía, los cierres (closures), y la manipulación de objetos. Perfecto para aquellos que quieren dominar JavaScript a un nivel avanzado."
    },
    {
        nombre: "Structure and Interpretation of Computer Programs (SICP)",
        autor: "Harold Abelson, Gerald Jay Sussman y Julie Sussman",
        descripcion: "Este libro es considerado uno de los textos más influyentes en la enseñanza de la programación. SICP es un curso clásico del MIT que utiliza el lenguaje Scheme (una variante de Lisp) para enseñar los principios fundamentales de la programación, tales como la abstracción, la recursión, y la gestión del estado. Aunque tiene un enfoque académico, es altamente recomendable para aquellos que desean profundizar en los fundamentos teóricos de la computación y la programación."
    },
    {
        nombre: "Design Patterns: Elements of Reusable Object-Oriented Software",
        autor: "Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides",
        descripcion: "Este libro es una obra esencial sobre patrones de diseño en la programación orientada a objetos. Presenta 23 patrones de diseño que son soluciones probadas y reutilizables para problemas comunes en el desarrollo de software. Cada patrón se explica con ejemplos de código y se analiza su aplicabilidad en diferentes contextos. Ideal para desarrolladores que buscan escribir código más modular, flexible y fácil de mantener."
    }
];

// Función para renderizar la tabla de libros
function renderizarLibros(librosParaMostrar) {
    const tableBody = document.getElementById('tablebody');
    tableBody.innerHTML = ''; // Limpiar contenido actual de la tabla

    // Si no hay libros para mostrar, mostramos un mensaje
    if (librosParaMostrar.length === 0) {
        const fila = document.createElement('tr');
        const celda = document.createElement('td');
        celda.colSpan = 3;
        celda.textContent = 'No se encontraron libros';
        fila.appendChild(celda);
        tableBody.appendChild(fila);
        return;
    }

    // Agregar cada libro a la tabla
    librosParaMostrar.forEach(libro => {
        const fila = document.createElement('tr');
        
        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = libro.nombre;
        fila.appendChild(celdaNombre);
        
        const celdaAutor = document.createElement('td');
        celdaAutor.textContent = libro.autor;
        fila.appendChild(celdaAutor);
        
        const celdaDescripcion = document.createElement('td');
        celdaDescripcion.textContent = libro.descripcion;
        fila.appendChild(celdaDescripcion);
        
        tableBody.appendChild(fila);
    });
}

// Función de búsqueda
function buscarLibros() {
    const query = document.getElementById('busquedaInput').value.trim().toLowerCase();
    
    // No hacer nada si el campo está vacío o solo tiene espacios
    if (query === '') {
        renderizarLibros([]);  // No mostrar resultados si la búsqueda está vacía
        return;
    }

    const librosFiltrados = libros.filter(libro => {
        return libro.descripcion.toLowerCase().includes(query);
    });
    
    renderizarLibros(librosFiltrados); // Mostrar los libros filtrados
}

// Inicializar la tabla con todos los libros al cargar la página
renderizarLibros(libros);

// Agregar el evento al botón de búsqueda
document.getElementById('buscar').addEventListener('click', buscarLibros);

// Opcional: Si el usuario presiona "Enter" en el campo de búsqueda, también se realiza la búsqueda
document.getElementById('busquedaInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        buscarLibros();
    }
});
