// ===== SISTEMA DE AJUDA GERENTE =====
document.addEventListener('DOMContentLoaded', () => {

    // ===== NAVEGAÇÃO ENTRE TABS =====
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tutorialSections = document.querySelectorAll('.tutorial-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // Remove active de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona active no botão clicado
            button.classList.add('active');

            // Esconde todas as seções
            tutorialSections.forEach(section => section.classList.remove('active'));

            // Mostra a seção correspondente
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');

                // Rola suavemente para a seção
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== FAQ ACCORDION =====
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Fecha todos os outros
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Abre o atual se não estava ativo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ===== BUSCA RÁPIDA =====
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();

            if (searchTerm.length < 3) return;

            // Busca em todas as seções de tutorial
            tutorialSections.forEach(section => {
                const text = section.textContent.toLowerCase();
                
                if (text.includes(searchTerm)) {
                    const sectionId = section.id;
                    
                    // Atualiza os tabs
                    tabButtons.forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.getAttribute('data-target') === sectionId) {
                            btn.classList.add('active');
                        }
                    });

                    // Mostra a seção
                    tutorialSections.forEach(sec => sec.classList.remove('active'));
                    section.classList.add('active');

                    // Rola para a seção
                    window.scrollTo({
                        top: section.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }



    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observa todos os step-cards, tip-cards e faq-items
    const animatedElements = document.querySelectorAll('.step-card, .tip-card, .faq-item');
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(element);
    });

    // ===== BOTÕES DO CTA DE SUPORTE =====
    const btnChat = document.getElementById('btn-chat');
    const btnEmail = document.getElementById('btn-email');

    if (btnChat) {
        btnChat.addEventListener('click', () => {
            alert('Iniciando chat com o suporte empresarial...\n\nEm um sistema real, aqui abriria o chat ao vivo dedicado a empresas.');
        });
    }

    if (btnEmail) {
        btnEmail.addEventListener('click', () => {
            window.location.href = 'mailto:empresas@conectavagas.com?subject=Dúvida sobre o painel do gerente';
        });
    }

    // ===== DESTACAR PRIMEIRA SEÇÃO AO CARREGAR =====
    const firstSection = document.getElementById('painel');
    if (firstSection) {
        firstSection.classList.add('active');
    }

    console.log('Central de Ajuda do Gerente carregada com sucesso!');
});