/**
 * ========================================
 * SCRIPT - MENÚ DIGITAL CABO FRÍO
 * Lógica de navegación y acordeones
 * ========================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // NAVEGACIÓN DE CATEGORÍAS (PESTAÑAS)
       
    const categoryButtons = document.querySelectorAll('.category-btn');
    const categorySections = document.querySelectorAll('.category-section');

    // Función para cambiar de categoría
    function switchCategory(categoryId) {
        // Quitar clase active de todos los botones
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Quitar clase active de todas las secciones
        categorySections.forEach(section => {
            section.classList.remove('active');
        });

        // Agregar clase active al botón seleccionado
        const activeBtn = document.querySelector(`[data-category="${categoryId}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Agregar clase active a la sección seleccionada
        const activeSection = document.getElementById(categoryId);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        // Scroll arriba suave
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Agregar eventos a los botones de categorías
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const categoryId = btn.getAttribute('data-category');
            switchCategory(categoryId);
        });
    });

    // ========================================
    // ANIMACIONES ADICIONALES
    // ========================================

    // Efecto ripple en items al hacer click
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Crear efecto visual
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // ========================================
    // MEJORAS DE ACCESIBILIDAD
    // ========================================

    // Navegación con teclado
    categoryButtons.forEach((btn, index) => {
        btn.addEventListener('keydown', (e) => {
            let newIndex = index;

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                newIndex = (index + 1) % categoryButtons.length;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                newIndex = (index - 1 + categoryButtons.length) % categoryButtons.length;
            }

            if (newIndex !== index) {
                categoryButtons[newIndex].focus();
                const categoryId = categoryButtons[newIndex].getAttribute('data-category');
                switchCategory(categoryId);
            }
        });
    });
});
