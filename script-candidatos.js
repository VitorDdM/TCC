// ===== BANCO DE DADOS DE CANDIDATOS =====
const candidatesDatabase = [
    {
        id: 1,
        nome: "Ana Silva",
        idade: 24,
        cidade: "São Paulo",
        estado: "SP",
        email: "ana.silva@email.com",
        telefone: "(11) 98765-4321",
        formacao: "Superior Completo",
        area: "TI",
        experiencia: "1-3 anos",
        disponibilidade: "Integral",
        pretensao: 5500,
        match: 92,
        bio: "Desenvolvedora front-end apaixonada por criar interfaces acessíveis e performáticas. Experiência com React e TypeScript.",
        habilidadesTecnicas: ["React", "TypeScript", "JavaScript", "CSS", "Git", "HTML"],
        softSkills: ["Comunicação", "Trabalho em Equipe", "Resolução de Problemas"],
        projetos: "Contribuidora em projetos open source, portfólio com 15+ projetos pessoais.",
        idiomas: "Português (nativo), Inglês (avançado)",
        registered: "2026-09-10"
    },
    {
        id: 2,
        nome: "Carlos Santos",
        idade: 28,
        cidade: "Rio de Janeiro",
        estado: "RJ",
        email: "carlos.santos@email.com",
        telefone: "(21) 97654-3210",
        formacao: "Pós-graduação",
        area: "Marketing",
        experiencia: "3-5 anos",
        disponibilidade: "Integral",
        pretensao: 7000,
        match: 87,
        bio: "Analista de marketing digital com foco em performance e growth. Especialista em Google Ads e Meta Ads.",
        habilidadesTecnicas: ["Google Ads", "Meta Ads", "SEO", "Google Analytics", "Excel", "Power BI"],
        softSkills: ["Criatividade", "Análise de Dados", "Liderança"],
        projetos: "Gerenciou campanhas com budget de R$ 500k+, aumentando ROI em 40%.",
        idiomas: "Português (nativo), Inglês (fluente), Espanhol (intermediário)",
        registered: "2026-09-12"
    },
    {
        id: 3,
        nome: "Mariana Costa",
        idade: 22,
        cidade: "Belo Horizonte",
        estado: "MG",
        email: "mariana.costa@email.com",
        telefone: "(31) 96543-2109",
        formacao: "Superior Incompleto",
        area: "Design",
        experiencia: "Até 1 ano",
        disponibilidade: "Estágio",
        pretensao: 2000,
        match: 85,
        bio: "Estudante de Design Gráfico com paixão por UX/UI. Busco primeira oportunidade para aplicar meus conhecimentos.",
        habilidadesTecnicas: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
        softSkills: ["Criatividade", "Empatia", "Organização"],
        projetos: "Redesign de app universitário premiado em competição interna.",
        idiomas: "Português (nativo), Inglês (intermediário)",
        registered: "2026-09-08"
    },
    {
        id: 4,
        nome: "Pedro Oliveira",
        idade: 35,
        cidade: "Curitiba",
        estado: "PR",
        email: "pedro.oliveira@email.com",
        telefone: "(41) 95432-1098",
        formacao: "Superior Completo",
        area: "TI",
        experiencia: "5+ anos",
        disponibilidade: "Integral",
        pretensao: 12000,
        match: 90,
        bio: "Tech Lead com experiência em arquitetura de microserviços e liderança de squads ágeis.",
        habilidadesTecnicas: ["Node.js", "React", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
        softSkills: ["Liderança", "Mentoria", "Comunicação"],
        projetos: "Liderou migração de monolito para microserviços em empresa de e-commerce.",
        idiomas: "Português (nativo), Inglês (fluente)",
        registered: "2026-09-05"
    },
    {
        id: 5,
        nome: "Juliana Ferreira",
        idade: 26,
        cidade: "Porto Alegre",
        estado: "RS",
        email: "juliana.ferreira@email.com",
        telefone: "(51) 94321-0987",
        formacao: "Superior Completo",
        area: "RH",
        experiencia: "1-3 anos",
        disponibilidade: "Integral",
        pretensao: 5000,
        match: 78,
        bio: "Profissional de RH focada em recrutamento e seleção, com experiência em empresas de tecnologia.",
        habilidadesTecnicas: ["LinkedIn Recruiter", "Gupy", "Excel", "PowerPoint"],
        softSkills: ["Empatia", "Comunicação", "Negociação"],
        projetos: "Implementou processo seletivo que reduziu tempo de contratação em 30%.",
        idiomas: "Português (nativo), Inglês (avançado)",
        registered: "2026-09-11"
    },
    {
        id: 6,
        nome: "Lucas Mendes",
        idade: 19,
        cidade: "São Paulo",
        estado: "SP",
        email: "lucas.mendes@email.com",
        telefone: "(11) 93210-9876",
        formacao: "Ensino Médio",
        area: "Administrativo",
        experiencia: "Sem experiência",
        disponibilidade: "Estágio",
        pretensao: 1500,
        match: 95,
        bio: "Jovem aprendiz em busca da primeira oportunidade. Organizado, proativo e com vontade de aprender.",
        habilidadesTecnicas: ["Pacote Office", "Redes Sociais", "Informática Básica"],
        softSkills: ["Proatividade", "Organização", "Trabalho em Equipe"],
        projetos: "Voluntário em projeto social de alfabetização digital para idosos.",
        idiomas: "Português (nativo)",
        registered: "2026-09-14"
    },
    {
        id: 7,
        nome: "Fernanda Lima",
        idade: 31,
        cidade: "Florianópolis",
        estado: "SC",
        email: "fernanda.lima@email.com",
        telefone: "(48) 92109-8765",
        formacao: "Pós-graduação",
        area: "Financeiro",
        experiencia: "3-5 anos",
        disponibilidade: "Integral",
        pretensao: 8000,
        match: 82,
        bio: "Analista financeira com experiência em planejamento orçamentário e reporting executivo.",
        habilidadesTecnicas: ["Excel Avançado", "Power BI", "SAP", "SQL"],
        softSkills: ["Análise Crítica", "Atenção a Detalhes", "Comunicação"],
        projetos: "Desenvolveu dashboard financeiro que automatizou 80% dos relatórios mensais.",
        idiomas: "Português (nativo), Inglês (avançado)",
        registered: "2026-09-06"
    },
    {
        id: 8,
        nome: "Ricardo Alves",
        idade: 27,
        cidade: "Remoto",
        estado: "BR",
        email: "ricardo.alves@email.com",
        telefone: "(61) 91098-7654",
        formacao: "Técnico",
        area: "Vendas",
        experiencia: "1-3 anos",
        disponibilidade: "Freelance",
        pretensao: 4000,
        match: 72,
        bio: "Vendedor consultivo com experiência em B2B e SaaS. Foco em relacionamento de longo prazo.",
        habilidadesTecnicas: ["CRM", "Salesforce", "Excel", "Apresentações"],
        softSkills: ["Negociação", "Persuasão", "Resiliência"],
        projetos: "Bateu 120% da meta por 3 trimestres consecutivos.",
        idiomas: "Português (nativo), Inglês (intermediário)",
        registered: "2026-09-09"
    },
    {
        id: 9,
        nome: "Beatriz Souza",
        idade: 23,
        cidade: "Salvador",
        estado: "BA",
        email: "beatriz.souza@email.com",
        telefone: "(71) 90987-6543",
        formacao: "Superior Incompleto",
        area: "Design",
        experiencia: "Até 1 ano",
        disponibilidade: "Meio Período",
        pretensao: 2500,
        match: 80,
        bio: "Designer gráfica em formação, com foco em identidade visual e branding.",
        habilidadesTecnicas: ["Photoshop", "Illustrator", "InDesign", "Canva"],
        softSkills: ["Criatividade", "Atenção a Detalhes", "Pontualidade"],
        projetos: "Criou identidade visual para 5 startups locais.",
        idiomas: "Português (nativo), Inglês (básico)",
        registered: "2026-09-13"
    },
    {
        id: 10,
        nome: "Gabriel Rocha",
        idade: 29,
        cidade: "Brasília",
        estado: "DF",
        email: "gabriel.rocha@email.com",
        telefone: "(61) 89876-5432",
        formacao: "Superior Completo",
        area: "TI",
        experiencia: "3-5 anos",
        disponibilidade: "Integral",
        pretensao: 9000,
        match: 88,
        bio: "Desenvolvedor back-end especializado em Python e Django. Experiência com APIs RESTful.",
        habilidadesTecnicas: ["Python", "Django", "PostgreSQL", "Redis", "Docker"],
        softSkills: ["Resolução de Problemas", "Autonomia", "Comunicação"],
        projetos: "Desenvolveu API que processa 1M+ requisições diárias.",
        idiomas: "Português (nativo), Inglês (avançado)",
        registered: "2026-09-07"
    },
    {
        id: 11,
        nome: "Camila Pereira",
        idade: 25,
        cidade: "Recife",
        estado: "PE",
        email: "camila.pereira@email.com",
        telefone: "(81) 88765-4321",
        formacao: "Superior Completo",
        area: "Marketing",
        experiencia: "1-3 anos",
        disponibilidade: "Integral",
        pretensao: 4500,
        match: 75,
        bio: "Social media manager com experiência em criação de conteúdo e gestão de comunidades.",
        habilidadesTecnicas: ["Instagram", "TikTok", "Canva", "Meta Business"],
        softSkills: ["Criatividade", "Comunicação", "Adaptabilidade"],
        projetos: "Aumentou engajamento em 300% em conta de e-commerce.",
        idiomas: "Português (nativo), Inglês (intermediário)",
        registered: "2026-09-04"
    },
    {
        id: 12,
        nome: "Thiago Barbosa",
        idade: 33,
        cidade: "Goiânia",
        estado: "GO",
        email: "thiago.barbosa@email.com",
        telefone: "(62) 87654-3210",
        formacao: "Pós-graduação",
        area: "TI",
        experiencia: "5+ anos",
        disponibilidade: "Integral",
        pretensao: 15000,
        match: 93,
        bio: "Arquiteto de soluções cloud com certificações AWS e Azure. Experiência em grandes projetos.",
        habilidadesTecnicas: ["AWS", "Azure", "Terraform", "Python", "Kubernetes"],
        softSkills: ["Liderança", "Visão Estratégica", "Mentoria"],
        projetos: "Liderou migração de infraestrutura para cloud com economia de 40%.",
        idiomas: "Português (nativo), Inglês (fluente)",
        registered: "2026-09-03"
    }
];

// ===== ESTADO DA APLICAÇÃO =====
const state = {
    filters: {
        search: '',
        location: '',
        educations: [],
        areas: [],
        availabilities: [],
        levels: [],
        salaryRanges: [],
        minMatch: 0
    },
    sortBy: 'relevance',
    savedCandidates: JSON.parse(localStorage.getItem('savedCandidates') || '[]')
};

// ===== ELEMENTOS DO DOM =====
const elements = {
    mainSearchInput: document.getElementById('main-search-input'),
    locationInput: document.getElementById('location-input'),
    btnMainSearch: document.getElementById('btn-main-search'),
    filterEducation: document.getElementById('filter-education'),
    filterArea: document.getElementById('filter-area'),
    filterAvailability: document.getElementById('filter-availability'),
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

function getInitials(name) {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
}

function getSoftSkillsLevel(count) {
    const level = Math.min(5, Math.max(1, Math.ceil(count / 2)));
    return level;
}

// ===== FUNÇÕES DE FILTRO =====
function matchesSearch(candidate, term) {
    if (!term) return true;
    const searchLower = term.toLowerCase();
    return (
        candidate.nome.toLowerCase().includes(searchLower) ||
        candidate.bio.toLowerCase().includes(searchLower) ||
        candidate.area.toLowerCase().includes(searchLower) ||
        candidate.habilidadesTecnicas.some(h => h.toLowerCase().includes(searchLower)) ||
        candidate.softSkills.some(s => s.toLowerCase().includes(searchLower))
    );
}

function matchesLocation(candidate, location) {
    if (!location) return true;
    const locLower = location.toLowerCase();
    return (
        candidate.cidade.toLowerCase().includes(locLower) ||
        candidate.estado.toLowerCase().includes(locLower) ||
        candidate.cidade.toLowerCase() === 'remoto'
    );
}

function matchesFilters(candidate) {
    const { educations, areas, availabilities, levels, salaryRanges, minMatch } = state.filters;

    if (educations.length > 0 && !educations.includes(candidate.formacao)) return false;
    if (areas.length > 0 && !areas.includes(candidate.area)) return false;
    if (availabilities.length > 0 && !availabilities.includes(candidate.disponibilidade)) return false;
    if (levels.length > 0 && !levels.includes(candidate.experiencia)) return false;
    if (minMatch > 0 && candidate.match < minMatch) return false;

    if (salaryRanges.length > 0) {
        const matchesSalary = salaryRanges.some(range => {
            if (range === '0-2000') return candidate.pretensao <= 2000;
            if (range === '2000-4000') return candidate.pretensao > 2000 && candidate.pretensao <= 4000;
            if (range === '4000-7000') return candidate.pretensao > 4000 && candidate.pretensao <= 7000;
            if (range === '7000-12000') return candidate.pretensao > 7000 && candidate.pretensao <= 12000;
            if (range === '12000+') return candidate.pretensao > 12000;
            return false;
        });
        if (!matchesSalary) return false;
    }

    return true;
}

// ===== FUNÇÃO DE ORDENAÇÃO =====
function sortCandidates(candidates) {
    const sorted = [...candidates];
    
    switch (state.sortBy) {
        case 'match':
            return sorted.sort((a, b) => b.match - a.match);
        case 'salary-asc':
            return sorted.sort((a, b) => a.pretensao - b.pretensao);
        case 'salary-desc':
            return sorted.sort((a, b) => b.pretensao - a.pretensao);
        case 'recent':
            return sorted.sort((a, b) => new Date(b.registered) - new Date(a.registered));
        case 'relevance':
        default:
            return sorted.sort((a, b) => {
                if (b.match !== a.match) return b.match - a.match;
                return new Date(b.registered) - new Date(a.registered);
            });
    }
}

// ===== RENDERIZAÇÃO =====
function renderCandidateCard(candidate) {
    const isSaved = state.savedCandidates.includes(candidate.id);
    const softSkillsLevel = getSoftSkillsLevel(candidate.softSkills.length);
    
    return `
        <div class="candidate-card" data-id="${candidate.id}">
            <div class="candidate-header">
                <div class="candidate-avatar">${getInitials(candidate.nome)}</div>
                <div class="candidate-basic">
                    <h3>${candidate.nome}</h3>
                    <div class="candidate-location">📍 ${candidate.cidade} - ${candidate.estado}</div>
                </div>
                <span class="match-badge">${candidate.match}% Match</span>
            </div>
            <p class="candidate-bio">${candidate.bio}</p>
            <div class="candidate-tags">
                <span class="tag">${candidate.area}</span>
                <span class="tag education">${candidate.formacao}</span>
                <span class="tag availability">${candidate.disponibilidade}</span>
                <span class="tag salary">💰 ${formatSalary(candidate.pretensao)}</span>
            </div>
            <div class="candidate-footer">
                <div class="candidate-meta">
                    <span>Experiência</span>
                    <strong>${candidate.experiencia}</strong>
                </div>
                <div class="soft-skills-preview">
                    ${Array.from({length: 5}).map((_, i) => 
                        `<div class="skill-dot ${i < softSkillsLevel ? '' : 'empty'}"></div>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderResults() {
    // Filtrar candidatos
    let filtered = candidatesDatabase.filter(candidate => {
        return matchesSearch(candidate, state.filters.search) &&
               matchesLocation(candidate, state.filters.location) &&
               matchesFilters(candidate);
    });

    // Ordenar
    filtered = sortCandidates(filtered);

    // Atualizar contador
    elements.resultsCount.textContent = `${filtered.length} candidato${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;
    
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
        elements.resultsGrid.innerHTML = filtered.map(renderCandidateCard).join('');
        
        // Adicionar event listeners nos cards
        document.querySelectorAll('.candidate-card').forEach(card => {
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
        'salary-asc': 'Menor pretensão',
        'salary-desc': 'Maior pretensão',
        'recent': 'Mais recentes'
    };
    return labels[state.sortBy] || 'Relevância';
}

// ===== MODAL =====
function openModal(id) {
    const candidate = candidatesDatabase.find(c => c.id === id);
    if (!candidate) return;

    const isSaved = state.savedCandidates.includes(candidate.id);

    elements.modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-avatar">${getInitials(candidate.nome)}</div>
            <div class="modal-header-info">
                <h2>${candidate.nome}</h2>
                <div class="modal-location">📍 ${candidate.cidade} - ${candidate.estado} • ${candidate.idade} anos</div>
                <div class="modal-meta">
                    <span class="tag">${candidate.area}</span>
                    <span class="tag education">${candidate.formacao}</span>
                    <span class="tag availability">${candidate.disponibilidade}</span>
                    <span class="tag salary">💰 ${formatSalary(candidate.pretensao)}</span>
                    <span class="match-badge">${candidate.match}% Match</span>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h4>📋 Sobre o candidato</h4>
            <p>${candidate.bio}</p>
        </div>

        <div class="modal-section">
            <h4>💻 Habilidades Técnicas</h4>
            <div class="skills-grid">
                ${candidate.habilidadesTecnicas.map(h => `<span class="skill-tag">${h}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h4>🌟 Soft Skills</h4>
            <div class="soft-skills-list">
                ${candidate.softSkills.map(s => `<span class="soft-skill-tag">${s}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h4>🚀 Projetos e Experiência</h4>
            <p>${candidate.projetos}</p>
        </div>

        <div class="modal-section">
            <h4>📊 Informações Adicionais</h4>
            <div class="info-grid">
                <div class="info-item">
                    <span>Experiência</span>
                    <strong>${candidate.experiencia}</strong>
                </div>
                <div class="info-item">
                    <span>Idiomas</span>
                    <strong>${candidate.idiomas}</strong>
                </div>
                <div class="info-item">
                    <span>E-mail</span>
                    <strong>${candidate.email}</strong>
                </div>
                <div class="info-item">
                    <span>Telefone</span>
                    <strong>${candidate.telefone}</strong>
                </div>
                <div class="info-item">
                    <span>Cadastrado em</span>
                    <strong>${formatDate(candidate.registered)}</strong>
                </div>
                <div class="info-item">
                    <span>Match com suas vagas</span>
                    <strong>${candidate.match}%</strong>
                </div>
            </div>
        </div>

        <div class="modal-footer">
            <button class="btn-contact" id="btn-contact-modal">
                ${isSaved ? '✓ Candidato salvo' : 'Entrar em contato'}
            </button>
            <button class="btn-save" id="btn-save-modal">
                ${isSaved ? 'Remover dos salvos' : 'Salvar candidato'}
            </button>
        </div>
    `;

    elements.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Event listeners do modal
    document.getElementById('btn-contact-modal').addEventListener('click', () => {
        contactCandidate(id);
    });

    document.getElementById('btn-save-modal').addEventListener('click', () => {
        toggleSaveCandidate(id);
    });
}

function closeModal() {
    elements.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function contactCandidate(id) {
    const candidate = candidatesDatabase.find(c => c.id === id);
    alert(`📧 E-mail de contato copiado!\n\nCandidato: ${candidate.nome}\nE-mail: ${candidate.email}\n\nEm um sistema real, aqui abriria o cliente de e-mail ou chat.`);
}

function toggleSaveCandidate(id) {
    const index = state.savedCandidates.indexOf(id);
    if (index > -1) {
        state.savedCandidates.splice(index, 1);
        alert('Candidato removido dos salvos.');
    } else {
        state.savedCandidates.push(id);
        alert(`✅ ${candidatesDatabase.find(c => c.id === id).nome} salvo com sucesso!`);
    }
    localStorage.setItem('savedCandidates', JSON.stringify(state.savedCandidates));
    closeModal();
    renderResults();
}

// ===== COLETA DE FILTROS =====
function getCheckedValues(container) {
    return Array.from(container.querySelectorAll('input[type="checkbox"]:checked'))
                .map(cb => cb.value);
}

function updateFilters() {
    state.filters.educations = getCheckedValues(elements.filterEducation);
    state.filters.areas = getCheckedValues(elements.filterArea);
    state.filters.availabilities = getCheckedValues(elements.filterAvailability);
    state.filters.levels = getCheckedValues(elements.filterLevel);
    state.filters.salaryRanges = getCheckedValues(elements.filterSalary);
    renderResults();
}

function clearAllFilters() {
    state.filters = {
        search: '',
        location: '',
        educations: [],
        areas: [],
        availabilities: [],
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
[elements.filterEducation, elements.filterArea, elements.filterAvailability, elements.filterLevel, elements.filterSalary].forEach(container => {
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

console.log('Sistema de busca de candidatos inicializado com', candidatesDatabase.length, 'candidatos.');