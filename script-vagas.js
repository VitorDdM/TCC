// ===== BANCO DE DADOS DE VAGAS =====
const vacanciesDatabase = [
    {
        id: 1,
        title: "Desenvolvedor Front-End Pleno",
        company: "Tech Solutions Ltda",
        location: "São Paulo - SP",
        area: "TI",
        type: "CLT",
        level: "Pleno",
        salary: 7500,
        match: 85,
        complexity: 70,
        stars: 5,
        posted: "2026-09-10",
        description: "Desenvolvimento de interfaces modernas utilizando React e TypeScript. Atuação em squad ágil com foco em experiência do usuário.",
        requirements: [
            "3+ anos de experiência com React",
            "Conhecimento em TypeScript",
            "Experiência com testes automatizados",
            "Inglês técnico"
        ],
        benefits: ["Vale refeição", "Plano de saúde", "Gympass", "Home office híbrido"]
    },
    {
        id: 2,
        title: "Analista de Sistemas Júnior",
        company: "DataCorp Brasil",
        location: "Rio de Janeiro - RJ",
        area: "TI",
        type: "CLT",
        level: "Júnior",
        salary: 3500,
        match: 72,
        complexity: 45,
        stars: 4,
        posted: "2026-09-12",
        description: "Suporte e desenvolvimento de sistemas internos. Oportunidade para quem está começando na área de tecnologia.",
        requirements: [
            "Formação em TI ou áreas correlatas",
            "Conhecimento em SQL",
            "Lógica de programação",
            "Boa comunicação"
        ],
        benefits: ["Vale transporte", "Plano de saúde", "Auxílio educação"]
    },
    {
        id: 3,
        title: "UX/UI Designer",
        company: "Creative Studio",
        location: "Remoto",
        area: "Design",
        type: "PJ",
        level: "Pleno",
        salary: 6000,
        match: 78,
        complexity: 65,
        stars: 5,
        posted: "2026-09-08",
        description: "Criação de interfaces digitais para produtos web e mobile. Colaboração próxima com times de produto e desenvolvimento.",
        requirements: [
            "Portfólio com projetos relevantes",
            "Domínio de Figma",
            "Conhecimento em Design System",
            "Experiência com pesquisa com usuários"
        ],
        benefits: ["Horário flexível", "100% remoto", "Auxílio home office"]
    },
    {
        id: 4,
        title: "Desenvolvedor Full Stack",
        company: "Innovation Tech",
        location: "Belo Horizonte - MG",
        area: "TI",
        type: "CLT",
        level: "Sênior",
        salary: 12000,
        match: 90,
        complexity: 85,
        stars: 5,
        posted: "2026-09-05",
        description: "Liderança técnica de squad, desenvolvimento de APIs e interfaces. Stack: Node.js, React, PostgreSQL.",
        requirements: [
            "5+ anos de experiência",
            "Node.js e React avançados",
            "Experiência com arquitetura de microserviços",
            "Liderança de equipe"
        ],
        benefits: ["PLR", "Plano odontológico", "Stock options", "Home office"]
    },
    {
        id: 5,
        title: "Tech Lead - React",
        company: "StartupXYZ",
        location: "São Paulo - SP",
        area: "TI",
        type: "CLT",
        level: "Especialista",
        salary: 18000,
        match: 88,
        complexity: 95,
        stars: 5,
        posted: "2026-08-28",
        description: "Liderança técnica do time de frontend, definição de arquitetura e mentoria de desenvolvedores.",
        requirements: [
            "7+ anos de experiência",
            "React e ecossistema avançados",
            "Experiência em liderança",
            "Inglês fluente"
        ],
        benefits: ["Stock options", "Plano de saúde premium", "Gympass", "Auxílio educação"]
    },
    {
        id: 6,
        title: "Desenvolvedor Back-End",
        company: "Enterprise Solutions",
        location: "Curitiba - PR",
        area: "TI",
        type: "CLT",
        level: "Pleno",
        salary: 8000,
        match: 65,
        complexity: 75,
        stars: 4,
        posted: "2026-08-25",
        description: "Desenvolvimento de APIs RESTful em Java/Spring Boot. Integração com sistemas legados.",
        requirements: [
            "Java e Spring Boot",
            "Banco de dados relacional",
            "Conhecimento em Docker",
            "Metodologias ágeis"
        ],
        benefits: ["Vale refeição", "Plano de saúde", "Previdência privada"]
    },
    {
        id: 7,
        title: "Jovem Aprendiz - Administrativo",
        company: "Empresa XYZ",
        location: "São Paulo - SP",
        area: "Administrativo",
        type: "Estágio",
        level: "Sem experiência",
        salary: 1500,
        match: 95,
        complexity: 20,
        stars: 4,
        posted: "2026-09-14",
        description: "Programa de aprendizagem com treinamento completo. Oportunidade para primeiro emprego.",
        requirements: [
            "Idade entre 16 e 24 anos",
            "Ensino médio completo ou cursando",
            "Boa comunicação",
            "Vontade de aprender"
        ],
        benefits: ["Vale transporte", "Vale refeição", "Curso profissionalizante"]
    },
    {
        id: 8,
        title: "Estagiário - Tecnologia",
        company: "Tech Solutions",
        location: "Remoto",
        area: "TI",
        type: "Estágio",
        level: "Sem experiência",
        salary: 1800,
        match: 82,
        complexity: 30,
        stars: 5,
        posted: "2026-09-13",
        description: "Estágio remunerado com possibilidade de efetivação. Mentoria de desenvolvedores seniores.",
        requirements: [
            "Cursando TI ou áreas correlatas",
            "Conhecimento básico em programação",
            "Inglês técnico",
            "Disponibilidade de 6h diárias"
        ],
        benefits: ["Bolsa auxílio", "Home office", "Mentoria", "Possibilidade de efetivação"]
    },
    {
        id: 9,
        title: "Analista de Marketing Digital",
        company: "Marketing Plus",
        location: "São Paulo - SP",
        area: "Marketing",
        type: "CLT",
        level: "Pleno",
        salary: 5500,
        match: 70,
        complexity: 55,
        stars: 4,
        posted: "2026-09-11",
        description: "Gestão de campanhas digitais, análise de métricas e otimização de performance.",
        requirements: [
            "Experiência com Google Ads e Meta Ads",
            "Conhecimento em Google Analytics",
            "Excel intermediário",
            "Formação em Marketing"
        ],
        benefits: ["Vale refeição", "Plano de saúde", "Day off no aniversário"]
    },
    {
        id: 10,
        title: "Designer Gráfico",
        company: "Agência Criativa",
        location: "Rio de Janeiro - RJ",
        area: "Design",
        type: "PJ",
        level: "Júnior",
        salary: 3000,
        match: 68,
        complexity: 40,
        stars: 4,
        posted: "2026-09-09",
        description: "Criação de peças gráficas para mídias digitais e impressas. Atendimento a clientes diversos.",
        requirements: [
            "Domínio de Adobe Creative Suite",
            "Portfólio atualizado",
            "Criatividade",
            "Boa comunicação"
        ],
        benefits: ["Horário flexível", "Projetos variados"]
    },
    {
        id: 11,
        title: "Vendedor Externo",
        company: "Comércio ABC",
        location: "Belo Horizonte - MG",
        area: "Vendas",
        type: "CLT",
        level: "Júnior",
        salary: 2500,
        match: 60,
        complexity: 35,
        stars: 3,
        posted: "2026-09-07",
        description: "Prospecção e atendimento de clientes na região metropolitana. Comissão sobre vendas.",
        requirements: [
            "CNH B",
            "Veículo próprio",
            "Experiência com vendas",
            "Boa comunicação"
        ],
        benefits: ["Comissão", "Vale combustível", "Celular corporativo"]
    },
    {
        id: 12,
        title: "Analista de RH",
        company: "People First",
        location: "São Paulo - SP",
        area: "RH",
        type: "CLT",
        level: "Pleno",
        salary: 5000,
        match: 75,
        complexity: 50,
        stars: 4,
        posted: "2026-09-06",
        description: "Recrutamento e seleção, desenvolvimento de pessoas e cultura organizacional.",
        requirements: [
            "Formação em Psicologia ou RH",
            "Experiência em R&S",
            "Conhecimento em legislação trabalhista",
            "Excel avançado"
        ],
        benefits: ["Plano de saúde", "Vale refeição", "Gympass"]
    },
    {
        id: 13,
        title: "Analista Financeiro",
        company: "Finance Corp",
        location: "Curitiba - PR",
        area: "Financeiro",
        type: "CLT",
        level: "Pleno",
        salary: 6500,
        match: 72,
        complexity: 60,
        stars: 4,
        posted: "2026-09-04",
        description: "Análise financeira, planejamento orçamentário e reporting para diretoria.",
        requirements: [
            "Formação em Administração, Contabilidade ou Economia",
            "Excel avançado",
            "Power BI",
            "Inglês intermediário"
        ],
        benefits: ["PLR", "Plano de saúde", "Previdência privada"]
    },
    {
        id: 14,
        title: "Desenvolvedor Freelance - WordPress",
        company: "Diversos clientes",
        location: "Remoto",
        area: "TI",
        type: "Freelance",
        level: "Pleno",
        salary: 4000,
        match: 65,
        complexity: 45,
        stars: 4,
        posted: "2026-09-03",
        description: "Desenvolvimento de sites em WordPress para clientes diversos. Projetos de curto prazo.",
        requirements: [
            "WordPress avançado",
            "HTML, CSS e JavaScript",
            "Portfólio de sites",
            "Autonomia"
        ],
        benefits: ["Horário flexível", "Escolha de projetos"]
    },
    {
        id: 15,
        title: "Assistente Administrativo",
        company: "Comércio ABC",
        location: "São Paulo - SP",
        area: "Administrativo",
        type: "CLT",
        level: "Júnior",
        salary: 2200,
        match: 78,
        complexity: 30,
        stars: 4,
        posted: "2026-09-02",
        description: "Suporte administrativo, atendimento telefônico e organização de documentos.",
        requirements: [
            "Ensino médio completo",
            "Pacote Office",
            "Boa comunicação",
            "Organização"
        ],
        benefits: ["Vale transporte", "Vale refeição", "Plano de saúde"]
    }
];

// ===== ESTADO DA APLICAÇÃO =====
const state = {
    filters: {
        search: '',
        location: '',
        areas: [],
        types: [],
        levels: [],
        salaryRanges: [],
        minMatch: 0
    },
    sortBy: 'relevance',
    appliedVacancies: JSON.parse(localStorage.getItem('appliedVacancies') || '[]')
};

// ===== ELEMENTOS DO DOM =====
const elements = {
    mainSearchInput: document.getElementById('main-search-input'),
    locationInput: document.getElementById('location-input'),
    btnMainSearch: document.getElementById('btn-main-search'),
    filterArea: document.getElementById('filter-area'),
    filterType: document.getElementById('filter-type'),
    filterLevel: document.getElementById('filter-level'),
    filterSalary: document.getElementById('filter-salary'),
    matchSlider: document.getElementById('match-slider'),
    matchValue: document.getElementById('match-value'),
    sortSelect: document.getElementById('sort-select'),
    resultsGrid: document.getElementById('results-grid'),
    resultsCount: document.getElementById('results-count'),
    resultsSubtitle: document.getElementById('results-subtitle'),
    emptyState: document.getElementById('empty-state'),
    btnClearFilters: document.getElementById('btn-clear-filters'),
    btnClearAll: document.getElementById('btn-clear-all'),
    modalOverlay: document.getElementById('modal-overlay'),
    modalContent: document.getElementById('modal-content'),
    modalClose: document.getElementById('modal-close')
};

// ===== FUNÇÕES UTILITÁRIAS =====
function formatSalary(value) {
    return 'R$ ' + value.toLocaleString('pt-BR');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

function getStarsHTML(count) {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
}

function getComplexityLabel(value) {
    if (value < 30) return 'Baixo';
    if (value < 60) return 'Médio';
    if (value < 85) return 'Alto';
    return 'Muito Alto';
}

// ===== FUNÇÕES DE FILTRO =====
function matchesSearch(vacancy, term) {
    if (!term) return true;
    const searchLower = term.toLowerCase();
    return (
        vacancy.title.toLowerCase().includes(searchLower) ||
        vacancy.company.toLowerCase().includes(searchLower) ||
        vacancy.description.toLowerCase().includes(searchLower) ||
        vacancy.area.toLowerCase().includes(searchLower)
    );
}

function matchesLocation(vacancy, location) {
    if (!location) return true;
    return vacancy.location.toLowerCase().includes(location.toLowerCase());
}

function matchesFilters(vacancy) {
    const { areas, types, levels, salaryRanges, minMatch } = state.filters;

    if (areas.length > 0 && !areas.includes(vacancy.area)) return false;
    if (types.length > 0 && !types.includes(vacancy.type)) return false;
    if (levels.length > 0 && !levels.includes(vacancy.level)) return false;
    if (minMatch > 0 && vacancy.match < minMatch) return false;

    if (salaryRanges.length > 0) {
        const matchesSalary = salaryRanges.some(range => {
            if (range === '0-2000') return vacancy.salary <= 2000;
            if (range === '2000-4000') return vacancy.salary > 2000 && vacancy.salary <= 4000;
            if (range === '4000-7000') return vacancy.salary > 4000 && vacancy.salary <= 7000;
            if (range === '7000-12000') return vacancy.salary > 7000 && vacancy.salary <= 12000;
            if (range === '12000+') return vacancy.salary > 12000;
            return false;
        });
        if (!matchesSalary) return false;
    }

    return true;
}

// ===== FUNÇÃO DE ORDENAÇÃO =====
function sortVacancies(vacancies) {
    const sorted = [...vacancies];
    
    switch (state.sortBy) {
        case 'match':
            return sorted.sort((a, b) => b.match - a.match);
        case 'salary-desc':
            return sorted.sort((a, b) => b.salary - a.salary);
        case 'salary-asc':
            return sorted.sort((a, b) => a.salary - b.salary);
        case 'recent':
            return sorted.sort((a, b) => new Date(b.posted) - new Date(a.posted));
        case 'relevance':
        default:
            // Relevância: match mais alto primeiro, depois mais recente
            return sorted.sort((a, b) => {
                if (b.match !== a.match) return b.match - a.match;
                return new Date(b.posted) - new Date(a.posted);
            });
    }
}

// ===== RENDERIZAÇÃO =====
function renderVacancyCard(vacancy) {
    const isApplied = state.appliedVacancies.includes(vacancy.id);
    
    return `
        <div class="vacancy-card" data-id="${vacancy.id}">
            <div class="vacancy-card-header">
                <h3>${vacancy.title}</h3>
                <span class="match-badge">${vacancy.match}% Match</span>
            </div>
            <div class="vacancy-company">${vacancy.company}</div>
            <div class="vacancy-tags">
                <span class="tag">${vacancy.area}</span>
                <span class="tag">${vacancy.type}</span>
                <span class="tag">${vacancy.level}</span>
                <span class="tag location">📍 ${vacancy.location}</span>
                <span class="tag salary">💰 ${formatSalary(vacancy.salary)}</span>
            </div>
            <p class="vacancy-description">${vacancy.description}</p>
            <div class="vacancy-footer">
                <div class="complexity">
                    <span>${getComplexityLabel(vacancy.complexity)}</span>
                    <div class="complexity-bar">
                        <div class="complexity-fill" style="width: ${vacancy.complexity}%"></div>
                    </div>
                </div>
                <div class="stars">${getStarsHTML(vacancy.stars)}</div>
            </div>
        </div>
    `;
}

function renderResults() {
    // Filtrar vagas
    let filtered = vacanciesDatabase.filter(vacancy => {
        return matchesSearch(vacancy, state.filters.search) &&
               matchesLocation(vacancy, state.filters.location) &&
               matchesFilters(vacancy);
    });

    // Ordenar
    filtered = sortVacancies(filtered);

    // Atualizar contador
    elements.resultsCount.textContent = `${filtered.length} vaga${filtered.length !== 1 ? 's' : ''} encontrada${filtered.length !== 1 ? 's' : ''}`;
    
    if (filtered.length > 0) {
        const firstMatch = filtered[0].match;
        elements.resultsSubtitle.textContent = `Melhor match: ${firstMatch}% • Ordenado por: ${getSortLabel()}`;
    } else {
        elements.resultsSubtitle.textContent = 'Ajuste os filtros para refinar sua busca';
    }

    // Renderizar grid ou estado vazio
    if (filtered.length === 0) {
        elements.resultsGrid.style.display = 'none';
        elements.emptyState.style.display = 'block';
    } else {
        elements.resultsGrid.style.display = 'grid';
        elements.emptyState.style.display = 'none';
        elements.resultsGrid.innerHTML = filtered.map(renderVacancyCard).join('');
        
        // Adicionar event listeners nos cards
        document.querySelectorAll('.vacancy-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                openModal(id);
            });
        });
    }
}

function getSortLabel() {
    const labels = {
        'relevance': 'Relevância',
        'match': 'Maior Match',
        'salary-desc': 'Maior salário',
        'salary-asc': 'Menor salário',
        'recent': 'Mais recentes'
    };
    return labels[state.sortBy] || 'Relevância';
}

// ===== MODAL =====
function openModal(id) {
    const vacancy = vacanciesDatabase.find(v => v.id === id);
    if (!vacancy) return;

    const isApplied = state.appliedVacancies.includes(vacancy.id);

    elements.modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${vacancy.title}</h2>
            <div class="modal-company">${vacancy.company}</div>
            <div class="modal-meta">
                <span class="tag">${vacancy.area}</span>
                <span class="tag">${vacancy.type}</span>
                <span class="tag">${vacancy.level}</span>
                <span class="tag location">📍 ${vacancy.location}</span>
                <span class="tag salary">💰 ${formatSalary(vacancy.salary)}</span>
                <span class="match-badge">${vacancy.match}% Match</span>
            </div>
        </div>

        <div class="modal-section">
            <h4>📋 Sobre a vaga</h4>
            <p>${vacancy.description}</p>
        </div>

        <div class="modal-section">
            <h4>✅ Requisitos</h4>
            <ul>
                ${vacancy.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h4>🎁 Benefícios</h4>
            <ul>
                ${vacancy.benefits.map(ben => `<li>${ben}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h4>📊 Detalhes</h4>
            <p><strong>Publicada em:</strong> ${formatDate(vacancy.posted)}</p>
            <p><strong>Nível de complexidade:</strong> ${getComplexityLabel(vacancy.complexity)} (${vacancy.complexity}%)</p>
            <p><strong>Avaliação:</strong> ${getStarsHTML(vacancy.stars)} (${vacancy.stars}/5)</p>
        </div>

        <div class="modal-footer">
            <button class="btn-apply" id="btn-apply-modal" ${isApplied ? 'disabled' : ''}>
                ${isApplied ? '✓ Candidatura enviada' : 'Candidatar-se agora'}
            </button>
            <button class="btn-save" id="btn-save-modal">
                ${isApplied ? 'Remover candidatura' : 'Salvar para depois'}
            </button>
        </div>
    `;

    elements.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Event listeners do modal
    document.getElementById('btn-apply-modal').addEventListener('click', () => {
        applyToVacancy(id);
    });

    document.getElementById('btn-save-modal').addEventListener('click', () => {
        toggleSaveVacancy(id);
    });
}

function closeModal() {
    elements.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function applyToVacancy(id) {
    if (!state.appliedVacancies.includes(id)) {
        state.appliedVacancies.push(id);
        localStorage.setItem('appliedVacancies', JSON.stringify(state.appliedVacancies));
        
        const vacancy = vacanciesDatabase.find(v => v.id === id);
        alert(`✅ Candidatura enviada com sucesso!\n\nVaga: ${vacancy.title}\nEmpresa: ${vacancy.company}\n\nAcompanhe o status no seu Histórico.`);
        
        closeModal();
        renderResults();
    }
}

function toggleSaveVacancy(id) {
    const index = state.appliedVacancies.indexOf(id);
    if (index > -1) {
        state.appliedVacancies.splice(index, 1);
        alert('Candidatura removida.');
    } else {
        state.appliedVacancies.push(id);
        alert('Vaga salva com sucesso!');
    }
    localStorage.setItem('appliedVacancies', JSON.stringify(state.appliedVacancies));
    closeModal();
    renderResults();
}

// ===== COLETA DE FILTROS =====
function getCheckedValues(container) {
    return Array.from(container.querySelectorAll('input[type="checkbox"]:checked'))
                .map(cb => cb.value);
}

function updateFilters() {
    state.filters.areas = getCheckedValues(elements.filterArea);
    state.filters.types = getCheckedValues(elements.filterType);
    state.filters.levels = getCheckedValues(elements.filterLevel);
    state.filters.salaryRanges = getCheckedValues(elements.filterSalary);
    renderResults();
}

function clearAllFilters() {
    state.filters = {
        search: '',
        location: '',
        areas: [],
        types: [],
        levels: [],
        salaryRanges: [],
        minMatch: 0
    };

    elements.mainSearchInput.value = '';
    elements.locationInput.value = '';
    elements.matchSlider.value = 0;
    elements.matchValue.textContent = '0%';

    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });

    renderResults();
}

// ===== EVENT LISTENERS =====
elements.btnMainSearch.addEventListener('click', () => {
    state.filters.search = elements.mainSearchInput.value.trim();
    state.filters.location = elements.locationInput.value.trim();
    renderResults();
});

elements.mainSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        state.filters.search = elements.mainSearchInput.value.trim();
        renderResults();
    }
});

elements.locationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        state.filters.location = elements.locationInput.value.trim();
        renderResults();
    }
});

// Filtros de checkbox
[elements.filterArea, elements.filterType, elements.filterLevel, elements.filterSalary].forEach(container => {
    container.addEventListener('change', updateFilters);
});

// Slider de match
elements.matchSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    elements.matchValue.textContent = value + '%';
    state.filters.minMatch = parseInt(value);
    renderResults();
});

// Ordenação
elements.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderResults();
});

// Limpar filtros
elements.btnClearFilters.addEventListener('click', clearAllFilters);
elements.btnClearAll.addEventListener('click', clearAllFilters);

// Modal
elements.modalClose.addEventListener('click', closeModal);
elements.modalOverlay.addEventListener('click', (e) => {
    if (e.target === elements.modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// ===== INICIALIZAÇÃO =====
renderResults();

console.log('Sistema de pesquisa de vagas inicializado com', vacanciesDatabase.length, 'vagas.');