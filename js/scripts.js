document.addEventListener("DOMContentLoaded", function () {
    // Funcionalidade do menu mobile
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Fecha o menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll("#mobile-menu a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });

    // Funcionalidade do Acordeão (permitindo apenas um aberto por vez)
    const accordionItems = document.querySelectorAll(".accordion-item");

    // Abre o primeiro por padrão
    if(accordionItems.length > 0) {
        accordionItems[0].classList.add("active");
    }

    accordionItems.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        header.addEventListener("click", () => {
            const wasActive = item.classList.contains("active");

            // Fecha todos os itens
            accordionItems.forEach((otherItem) => {
                otherItem.classList.remove("active");
            });

            // Abre o item clicado (se não estava ativo)
            if (!wasActive) {
                item.classList.add("active");
            }
        });
    });

    // Efeito sticky do Header (sombra e fundo opaco ao rolar)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-md', 'bg-white/95');
            header.classList.remove('bg-white/80', 'shadow-sm');
        } else {
            header.classList.remove('shadow-md', 'bg-white/95');
            header.classList.add('bg-white/80', 'shadow-sm');
        }
    });
});