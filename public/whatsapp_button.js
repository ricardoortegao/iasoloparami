/**
 * WhatsApp Button Component
 * 
 * To use this component, include this script file and ensure the HTML button exists:
 * 
 * <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" class="whatsapp-float" title="Contactar por WhatsApp">
 *     <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
 *         <!-- SVG path here -->
 *     </svg>
 * </a>
 * 
 * The component will automatically initialize when the DOM is loaded.
 */

(function() {
    'use strict';
    
    // Wait for the DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWhatsAppButton);
    } else {
        // DOM is already loaded
        initWhatsAppButton();
    }
    
    /**
     * Inicializa las animaciones del botón de WhatsApp
     */
    function initWhatsAppButton() {
        const whatsappButton = document.querySelector('.whatsapp-float');
        
        if (whatsappButton) {
            // Agregar animación inicial después de un breve retraso
            setTimeout(() => {
                whatsappButton.classList.add('initial-animation');
                
                // Remover la clase después de que termine la animación
                setTimeout(() => {
                    whatsappButton.classList.remove('initial-animation');
                }, 2500); // 1.5s de animación + 1s de retraso
            }, 1000);
            
            // Agregar animación al hacer scroll
            let lastScrollTop = 0;
            let scrollTimeout;
            
            window.addEventListener('scroll', function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Solo activar la animación si el usuario está haciendo scroll hacia abajo
                if (scrollTop > lastScrollTop && scrollTop > 300) {
                    // Resetear el timeout anterior
                    clearTimeout(scrollTimeout);
                    
                    // Agregar clase de animación
                    whatsappButton.classList.add('scroll-animation');
                    
                    // Remover la clase después de que termine la animación
                    scrollTimeout = setTimeout(() => {
                        whatsappButton.classList.remove('scroll-animation');
                    }, 1000);
                }
                
                lastScrollTop = scrollTop;
            }, { passive: true });
        }
    }
    
    // Expose function globally in case it needs to be called manually
    window.initWhatsAppButton = initWhatsAppButton;
})();