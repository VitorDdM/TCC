// ===== SISTEMA DE AJUDA - JAVASCRIPT =====
document.addEventListener('DOMContentLoaded', function() {

    // ===== NAVEGAÇÃO ENTRE TABS =====
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tutorialSections = document.querySelectorAll('.tutorial-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');

            // Remove active de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona active no botão clicado
            this.classList.add('active');

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

        question.addEventListener('click', function() {
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
    const searchInput = document.querySelector('.quick-search input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            if (searchTerm.length < 3) return;

            // Busca em todas as seções de tutorial
            tutorialSections.forEach(section => {
                const text = section.textContent.toLowerCase();
                
                if (text.includes(searchTerm)) {
                    // Mostra a seção que contém o termo
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

    // ===== BOTÕES DO CTA DE SUPORTE =====
    const btnChat = document.querySelector('.btn-primary');
    const btnEmail = document.querySelector('.btn-secondary');

    if (btnChat) {
        btnChat.addEventListener('click', function() {
            alert('Iniciando chat com o suporte...\n\nEm um sistema real, aqui abriria o chat ao vivo.');
        });
    }

    if (btnEmail) {
        btnEmail.addEventListener('click', function() {
            window.location.href = 'mailto:suporte@sistemavagas.com?subject=Dúvida sobre o sistema';
        });
    }

    // ===== NOTIFICAÇÕES (CHECKBOXES) =====
    const notificationCheckboxes = document.querySelectorAll('.notification-item input[type="checkbox"]');

    notificationCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const notificationType = this.nextElementSibling.textContent;
            const status = this.checked ? 'ativada' : 'desativada';
            
            console.log(`Notificação "${notificationType}" ${status}`);
            
            // Em um sistema real, aqui salvaria a preferência no backend
        });
    });

    // ===== DESTACAR PRIMEIRA SEÇÃO AO CARREGAR =====
    const firstSection = document.getElementById('recomendacoes');
    if (firstSection) {
        firstSection.classList.add('active');
    }

    console.log('Sistema de Ajuda carregado com sucesso!');
});
