// Inicializa o carrossel com intervalo de 3 segundos
document.addEventListener('DOMContentLoaded', function() {
    const carouselElement = document.querySelector('#carouselExampleCaptions');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Troca de slide a cada 3 segundos
        ride: 'carousel'
    });
});