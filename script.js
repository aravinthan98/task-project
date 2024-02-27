const sections = document.querySelectorAll('.item-container');

sections.forEach(section => {
    const bottomContent = section.querySelector('.bottom-content');
   
    section.addEventListener('mouseover', () => {
        bottomContent.style.display = 'block';       
    });

    section.addEventListener('mouseout', () => {
        bottomContent.style.display = 'none';
    });
});
