//effetto di dissolvenza al passaggio del mouse sulle immagini

document.querySelectorAll('.col img').forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transition = 'transform 0.5s';
        image.style.transform = 'scale(1.1)';
    });
    
    image.addEventListener('mouseleave', () => {
        image.style.transition = 'transform 0.5s';
        image.style.transform = 'scale(1)';
    });
});

