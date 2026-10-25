document.addEventListener('DOMContentLoaded', () => {
    // 1. القائمة الجانبية للموبايل
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. تفاعل زر الطلب في المنيو
    const menuButtons = document.querySelectorAll('.card');
    menuButtons.forEach(card => {
        card.addEventListener('click', () => {
            const itemName = card.querySelector('h3').textContent;
            console.log(`تم اختيار العنصر: ${itemName}`);
        });
    });
});