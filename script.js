const sections = document.querySelectorAll('.item-container');

sections.forEach(section => {
    const bottomContent = section.querySelector('.bottom-content');
    const checkbox=section.querySelector('#check');

    section.addEventListener('mouseover', () => {
        bottomContent.style.display = 'block';
        checkbox.checked=true;
    });

    section.addEventListener('mouseout', () => {
        bottomContent.style.display = 'none';
        checkbox.checked=false;
    });
});