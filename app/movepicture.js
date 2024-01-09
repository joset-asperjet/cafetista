// Selecciona todas las imágenes dentro de las columnas
const images = document.querySelectorAll('.column img');

// Función para manejar el movimiento del mouse
function handleMouseMove(e) {
  // Calcula la posición del mouse en relación con el centro de la ventana
  const x = e.clientX - window.innerWidth / 2;
  const y = e.clientY - window.innerHeight / 2;

  // Aplica una transformación a cada imagen
  images.forEach(image => {
    // Calcula la cantidad de movimiento (ajusta el '30' para cambiar la cantidad de movimiento)
    const dx = x * 30 / window.innerWidth;
    const dy = y * 30 / window.innerHeight;

    // Aplica la transformación
    image.style.transform = `translate(${dx}px, ${dy}px)`;
  });
}

// Agrega el manejador de eventos al documento
document.addEventListener('mousemove', handleMouseMove);



