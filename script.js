//effetto di dissolvenza al passaggio del mouse sulle immagini

 // Con il ciclo forEach itero ogni immagine
document.querySelectorAll('.col img').forEach(image => {
    image.addEventListener('mouseenter', () => {    // Quando il mouse entra nell'immagine, viene eseguito il seguente codice
        image.style.transition = 'transform 0.5s';
        image.style.transform = 'scale(1.1)';
    });
    
    image.addEventListener('mouseleave', () => { // Quando il mouse esce dalll'immagine, viene eseguito il seguente codice
        image.style.transition = 'transform 0.5s';
        image.style.transform = 'scale(1)';
    });
});

