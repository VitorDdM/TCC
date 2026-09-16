// ===== SISTEMA DE GERENCIAMENTO DE VAGAS =====
document.addEventListener('DOMContentLoaded', () => {

    // ===== ESTADO =====
    let vacancies = [];
    let currentFilter = 'todas';
    let currentSort = 'recent';
    let searchTerm = '';
    let pendingAction = null;

    // ===== ELEMENTOS =====
    const elements = {
        vacanciesGrid: document.getElementById('vacancies-grid'),
        emptyState: document.getElementById('empty-state'),
        emptyTitle: document.getElementById('empty-title'),
        emptyText: document.getElementById('empty-text'),
        vacanciesTitle: document.getElementById('vacancies-title'),
        searchInput: document.getElementById('search-input'),
        sortSelect: document.getElementById('sort-select'),
        filterTabs: document.querySelectorAll('.filter-tab'),
        modalOverlay: document.getElementById('modal-overlay'),
        modalContent: document.getElementById('modal-content'),
        modalClose: document.getElementById('modal-close'),
        confirmOverlay: document.getElementById('confirm-overlay'),
        confirmTitle: document.getElementById('confirm-title'),
        confirmMessage: document.getElementById('confirm-message'),
        btnConfirm: document.getElementById('btn-confirm'),
        btnCancel: document.getElementById('btn-cancel'),
        // Stats
        statTotal: document.getElementById('stat-total'),
        statAtivas: document.getElementById('stat-ativas'),
        statCandidatos: document.getElementById('stat-candidatos'),
        statRascunhos: document.getElementById('stat-rascunhos')
    };

    // ===== CARREGAR VAGAS =====
    function loadVacancies() {
        const saved = localStorage.getItem('companyVacancies');
        vacancies = saved ? JSON.parse(saved) : [];

        // Se não houver vagas salvas, usar dados de exemplo
        if (vacancies.length === 0) {
            vacancies = getSampleVacancies();
            saveVacancies();
        }

        updateStats();
        renderVacancies();
    }

    function getSampleVacancies() {
        const now = Date.now();
        return [
            {
                id: now - 1000000,
                titulo: "Desenvolvedor Front-End Pleno",
                area: "TI",
                departamento: "Engenharia de Software",
                tipo: "CLT",
                nivel: "Pleno",
                numVagas: 2,
                modalidade: "Híbrido",
                cidade: "São Paulo",
                estado: "SP",
                salarioMin: 7000,
                salarioMax: 9000,
                prazo: new Date(now + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                descricao: "Desenvolvimento de interfaces modernas utilizando React e TypeScript. Atuação em squad ágil com foco em experiência do usuário.",
                requisitos: ["3+ anos de experiência com React", "Conhecimento em TypeScript", "Experiência com testes automatizados", "Inglês técnico"],
                diferenciais: ["Experiência com Next.js", "Contribuições open source"],
                status: "ativa",
                candidatos: 45,
                entrevistas: 8,
                diasPublicada: 12,
                dataCriacao: new Date(now - 12 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: now - 2000000,
                titulo: "Analista de Marketing Digital",
                area: "Marketing",
                departamento: "Marketing",
                tipo: "CLT",
                nivel: "Pleno",
                numVagas: 1,
                modalidade: "Remoto",
                cidade: "",
                estado: "",
                salarioMin: 5000,
                salarioMax: 7000,
                prazo: new Date(now + 20 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                descricao: "Gestão de campanhas digitais, análise de métricas e otimização de performance em Google Ads e Meta Ads.",
                requisitos: ["Experiência com Google Ads e Meta Ads", "Conhecimento em Google Analytics", "Excel intermediário", "Formação em Marketing"],
                diferenciais: ["Certificação Google Ads", "Experiência com SEO"],
                status: "ativa",
                candidatos: 67,
                entrevistas: 12,
                diasPublicada: 8,
                dataCriacao: new Date(now - 8 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: now - 3000000,
                titulo: "Designer UX/UI",
                area: "Design",
                departamento: "Design",
                tipo: "PJ",
                nivel: "Pleno",
                numVagas: 1,
                modalidade: "Remoto",
                cidade: "",
                estado: "",
                salarioMin: 6000,
                salarioMax: 8000,
                prazo: new Date(now + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                descricao: "Criação de interfaces digitais para produtos web e mobile. Colaboração próxima com times de produto e desenvolvimento.",
                requisitos: ["Portfólio com projetos relevantes", "Domínio de Figma", "Conhecimento em Design System", "Experiência com pesquisa com usuários"],
                diferenciais: ["Experiência com prototipagem", "Conhecimento em motion design"],
                status: "pausada",
                candidatos: 34,
                entrevistas: 5,
                diasPublicada: 20,
                dataCriacao: new Date(now - 20 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: now - 500000,
                titulo: "Estagiário de TI",
                area: "TI",
                departamento: "Engenharia de Software",
                tipo: "Estágio",
                nivel: "Sem experiência",
                numVagas: 3,
                modalidade: "Híbrido",
                cidade: "São Paulo",
                estado: "SP",
                salarioMin: 1500,
                salarioMax: 2000,
                prazo: new Date(now + 25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                descricao: "Estágio remunerado com possibilidade de efetivação. Mentoria de desenvolvedores seniores.",
                requisitos: ["Cursando TI ou áreas correlatas", "Conhecimento básico em programação", "Inglês técnico", "Disponibilidade de 6h diárias"],
                diferenciais: ["Projetos pessoais", "Participação em hackathons"],
                status: "ativa",
                candidatos: 89,
                entrevistas: 0,
                diasPublicada: 15,
                dataCriacao: new Date(now - 15 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: now - 100000,
                titulo: "Analista de RH",
                area: "RH",
                departamento: "Recursos Humanos",
                tipo: "CLT",
                nivel: "Pleno",
                numVagas: 1,
                modalidade: "Presencial",
                cidade: "São Paulo",
                estado: "SP",
                salarioMin: 5000,
                salarioMax: 6500,
                prazo: "",
                descricao: "Recrutamento e seleção, desenvolvimento de pessoas e cultura organizacional.",
                requisitos: ["Formação em Psicologia ou RH", "Experiência em R&S", "Conhecimento em legislação trabalhista", "Excel avançado"],
                diferenciais: ["Certificação em gestão de pessoas", "Experiência com employer branding"],
                status: "rascunho",
                candidatos: 0,
                entrevistas: 0,
                diasPublicada: 0,
                dataCriacao: new Date(now).toISOString()
            }
        ];
    }

    function saveVacancies() {
        localStorage.setItem('companyVacancies', JSON.stringify(vacancies));
    }

    // ===== ATUALIZAR ESTATÍSTICAS =====
    function updateStats() {
        const total = vacancies.length;
        const ativas = vacancies.filter(v => v.status === 'ativa').length;
        const rascunhos = vacancies.filter(v => v.status === 'rascunho').length;
        const totalCandidatos = vacancies.reduce((sum, v) => sum + (v.candidatos || 0), 0);

        elements.statTotal.textContent = total;
        elements.statAtivas.textContent = ativas;
        elements.statCandidatos.textContent = totalCandidatos;
        elements.statRascunhos.textContent = rascunhos;
    }

    // ===== FILTRAR E ORDENAR =====
    function getFilteredVacancies() {
        let filtered = [...vacancies];

        // Filtro por status
        if (currentFilter !== 'todas') {
            filtered = filtered.filter(v => v.status === currentFilter);
        }

        // Filtro por busca
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(v =>
                v.titulo.toLowerCase().includes(term) ||
                v.area.toLowerCase().includes(term) ||
                v.departamento?.toLowerCase().includes(term) ||
                v.tipo.toLowerCase().includes(term) ||
                v.nivel.toLowerCase().includes(term)
            );
        }

        // Ordenação
        switch (currentSort) {
            case 'recent':
                filtered.sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));
                break;
            case 'oldest':
                filtered.sort((a, b) => new Date(a.dataCriacao) - new Date(b.dataCriacao));
                break;
            case 'candidates':
                filtered.sort((a, b) => (b.candidatos || 0) - (a.candidatos || 0));
                break;
            case 'title':
                filtered.sort((a, b) => a.titulo.localeCompare(b.titulo));
                break;
        }

        return filtered;
    }

    // ===== RENDERIZAR VAGAS =====
    function renderVacancies() {
        const filtered = getFilteredVacancies();

        // Atualizar título
        const filterLabels = {
            'todas': 'Todas as vagas',
            'ativa': 'Vagas ativas',
            'pausada': 'Vagas pausadas',
            'rascunho': 'Rascunhos',
            'preenchida': 'Vagas preenchidas'
        };
        elements.vacanciesTitle.textContent = `${filterLabels[currentFilter]} (${filtered.length})`;

        if (filtered.length === 0) {
            elements.vacanciesGrid.style.display = 'none';
            elements.emptyState.style.display = 'block';

            if (searchTerm) {
                elements.emptyTitle.textContent = 'Nenhuma vaga encontrada';
                elements.emptyText.textContent = `Não encontramos vagas com o termo "${searchTerm}".`;
            } else if (currentFilter !== 'todas') {
                elements.emptyTitle.textContent = `Nenhuma vaga ${currentFilter}`;
                elements.emptyText.textContent = 'Não há vagas com este status no momento.';
            } else {
                elements.emptyTitle.textContent = 'Nenhuma vaga criada';
                elements.emptyText.textContent = 'Crie sua primeira vaga para começar a receber candidatos.';
            }
            return;
        }

        elements.vacanciesGrid.style.display = 'grid';
        elements.emptyState.style.display = 'none';

        elements.vacanciesGrid.innerHTML = filtered.map(vacancy => renderVacancyCard(vacancy)).join('');

        // Adicionar event listeners
        document.querySelectorAll('.btn-view').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(parseInt(btn.dataset.id));
            });
        });

        document.querySelectorAll('.btn-toggle-status').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleVacancyStatus(parseInt(btn.dataset.id));
            });
        });

        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                confirmDelete(parseInt(btn.dataset.id));
            });
        });
    }

    function renderVacancyCard(vacancy) {
        const location = vacancy.modalidade === 'Remoto' ? 'Remoto' :
                        (vacancy.cidade && vacancy.estado ? `${vacancy.cidade} - ${vacancy.estado}` : 'Não informado');

        const salario = vacancy.salarioMin && vacancy.salarioMax ?
                       `R$ ${vacancy.salarioMin.toLocaleString('pt-BR')} - R$ ${vacancy.salarioMax.toLocaleString('pt-BR')}` :
                       'A combinar';

        const statusLabels = {
            'ativa': 'Ativa',
            'pausada': 'Pausada',
            'rascunho': 'Rascunho',
            'preenchida': 'Preenchida'
        };

        const toggleLabel = vacancy.status === 'ativa' ? 'Pausar' :
                           vacancy.status === 'pausada' ? 'Ativar' : 'Publicar';

        return `
            <div class="vacancy-card">
                <div class="vacancy-card-header">
                    <h3>${vacancy.titulo}</h3>
                    <span class="status-badge ${vacancy.status}">${statusLabels[vacancy.status]}</span>
                </div>
                <div class="vacancy-company">Tech Solutions Ltda</div>
                <div class="vacancy-tags">
                    <span class="tag">${vacancy.area}</span>
                    <span class="tag">${vacancy.tipo}</span>
                    <span class="tag">${vacancy.nivel}</span>
                    <span class="tag location">📍 ${location}</span>
                </div>
                <p class="vacancy-description">${vacancy.descricao || 'Sem descrição'}</p>
                <div class="vacancy-stats">
                    <div class="vacancy-stat">
                        <strong>${vacancy.candidatos || 0}</strong>
                        <span>Candidatos</span>
                    </div>
                    <div class="vacancy-stat">
                        <strong>${vacancy.entrevistas || 0}</strong>
                        <span>Entrevistas</span>
                    </div>
                    <div class="vacancy-stat">
                        <strong>${vacancy.diasPublicada || 0}d</strong>
                        <span>Publicada</span>
                    </div>
                </div>
                <div class="vacancy-actions">
                    <button class="btn-vaga btn-vaga-primary btn-view" data-id="${vacancy.id}">Ver Detalhes</button>
                    <button class="btn-vaga btn-vaga-secondary btn-toggle-status" data-id="${vacancy.id}">${toggleLabel}</button>
                    <button class="btn-vaga btn-vaga-danger btn-delete" data-id="${vacancy.id}">Excluir</button>
                </div>
            </div>
        `;
    }

    // ===== MODAL DE DETALHES =====
    function openModal(id) {
        const vacancy = vacancies.find(v => v.id === id);
        if (!vacancy) return;

        const location = vacancy.modalidade === 'Remoto' ? 'Remoto' :
                        (vacancy.cidade && vacancy.estado ? `${vacancy.cidade} - ${vacancy.estado}` : 'Não informado');

        const salario = vacancy.salarioMin && vacancy.salarioMax ?
                       `R$ ${vacancy.salarioMin.toLocaleString('pt-BR')} - R$ ${vacancy.salarioMax.toLocaleString('pt-BR')}` :
                       'A combinar';

        const statusLabels = {
            'ativa': 'Ativa',
            'pausada': 'Pausada',
            'rascunho': 'Rascunho',
            'preenchida': 'Preenchida'
        };

        const dataCriacao = new Date(vacancy.dataCriacao).toLocaleDateString('pt-BR');
        const prazo = vacancy.prazo ? new Date(vacancy.prazo + 'T00:00:00').toLocaleDateString('pt-BR') : 'Não definido';

        elements.modalContent.innerHTML = `
            <div class="modal-header">
                <h2>${vacancy.titulo}</h2>
                <div class="modal-company">Tech Solutions Ltda</div>
                <div class="modal-meta">
                    <span class="tag">${vacancy.area}</span>
                    <span class="tag">${vacancy.tipo}</span>
                    <span class="tag">${vacancy.nivel}</span>
                    <span class="tag location">📍 ${location}</span>
                    <span class="status-badge ${vacancy.status}">${statusLabels[vacancy.status]}</span>
                </div>
            </div>

            <div class="modal-section">
                <h4>📋 Descrição</h4>
                <p>${vacancy.descricao || 'Sem descrição'}</p>
            </div>

            ${vacancy.requisitos && vacancy.requisitos.length > 0 ? `
                <div class="modal-section">
                    <h4>✅ Requisitos</h4>
                    <ul>
                        ${vacancy.requisitos.map(req => `<li>${req}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${vacancy.diferenciais && vacancy.diferenciais.length > 0 ? `
                <div class="modal-section">
                    <h4>🌟 Diferenciais</h4>
                    <ul>
                        ${vacancy.diferenciais.map(diff => `<li>${diff}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            <div class="modal-section">
                <h4>📊 Informações</h4>
                <div class="modal-info-grid">
                    <div class="modal-info-item">
                        <span>Modalidade</span>
                        <strong>${vacancy.modalidade || '-'}</strong>
                    </div>
                    <div class="modal-info-item">
                        <span>Salário</span>
                        <strong>${salario}</strong>
                    </div>
                    <div class="modal-info-item">
                        <span>Número de vagas</span>
                        <strong>${vacancy.numVagas || 1}</strong>
                    </div>
                    <div class="modal-info-item">
                        <span>Prazo</span>
                        <strong>${prazo}</strong>
                    </div>
                    <div class="modal-info-item">
                        <span>Criada em</span>
                        <strong>${dataCriacao}</strong>
                    </div>
                    <div class="modal-info-item">
                        <span>Departamento</span>
                        <strong>${vacancy.departamento || '-'}</strong>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button class="btn-modal btn-modal-primary" onclick="alert('Redirecionando para lista de candidatos...')">Ver Candidatos</button>
                <button class="btn-modal btn-modal-secondary" onclick="alert('Editando vaga...')">Editar</button>
                <button class="btn-modal btn-modal-danger" id="btn-modal-delete" data-id="${vacancy.id}">Excluir</button>
            </div>
        `;

        elements.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        document.getElementById('btn-modal-delete')?.addEventListener('click', () => {
            closeModal();
            confirmDelete(vacancy.id);
        });
    }

    function closeModal() {
        elements.modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ===== AÇÕES =====
    function toggleVacancyStatus(id) {
        const vacancy = vacancies.find(v => v.id === id);
        if (!vacancy) return;

        if (vacancy.status === 'ativa') {
            vacancy.status = 'pausada';
            alert(`Vaga "${vacancy.titulo}" pausada com sucesso.`);
        } else if (vacancy.status === 'pausada') {
            vacancy.status = 'ativa';
            alert(`Vaga "${vacancy.titulo}" ativada com sucesso.`);
        } else if (vacancy.status === 'rascunho') {
            vacancy.status = 'ativa';
            vacancy.diasPublicada = 0;
            alert(`Vaga "${vacancy.titulo}" publicada com sucesso!`);
        }

        saveVacancies();
        updateStats();
        renderVacancies();
    }

    function confirmDelete(id) {
        const vacancy = vacancies.find(v => v.id === id);
        if (!vacancy) return;

        pendingAction = () => deleteVacancy(id);

        elements.confirmTitle.textContent = 'Excluir vaga';
        elements.confirmMessage.textContent = `Tem certeza que deseja excluir a vaga "${vacancy.titulo}"? Esta ação não pode ser desfeita.`;
        elements.confirmOverlay.classList.add('active');
    }

    function deleteVacancy(id) {
        vacancies = vacancies.filter(v => v.id !== id);
        saveVacancies();
        updateStats();
        renderVacancies();
        alert('Vaga excluída com sucesso.');
    }

    function closeConfirm() {
        elements.confirmOverlay.classList.remove('active');
        pendingAction = null;
    }

    // ===== EVENT LISTENERS =====
    elements.filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            elements.filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            renderVacancies();
        });
    });

    elements.searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderVacancies();
    });

    elements.sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderVacancies();
    });

    elements.modalClose.addEventListener('click', closeModal);
    elements.modalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.modalOverlay) closeModal();
    });

    elements.btnCancel.addEventListener('click', closeConfirm);
    elements.btnConfirm.addEventListener('click', () => {
        if (pendingAction) pendingAction();
        closeConfirm();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (elements.confirmOverlay.classList.contains('active')) {
                closeConfirm();
            } else if (elements.modalOverlay.classList.contains('active')) {
                closeModal();
            }
        }
    });

    // ===== INICIALIZAÇÃO =====
    loadVacancies();

    console.log('Sistema de gerenciamento de vagas inicializado.');
});