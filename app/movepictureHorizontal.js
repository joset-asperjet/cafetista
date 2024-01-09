// Selecciona todas las imágenes dentro de .image-container
const images = document.querySelectorAll('.image-container img');

// Función para manejar el movimiento del mouse
function handleMouseMove(e) {
  // Calcula la posición del mouse en relación con el centro de la ventana
  const x = e.clientX - window.innerWidth / 2;

  // Aplica una transformación a cada imagen
  images.forEach(image => {
    // Calcula la cantidad de movimiento (ajusta el '30' para cambiar la cantidad de movimiento)
    const dx = x * 30 / window.innerWidth;

    // Aplica la transformación
    image.style.transform = `translateX(${dx}px)`;
  });
}

// Agrega el manejador de eventos al documento
document.addEventListener('mousemove', handleMouseMove);