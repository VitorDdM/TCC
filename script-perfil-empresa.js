// ===== DADOS DA EMPRESA =====
const companyData = {
    nome: "Tech Solutions Ltda",
    inicial: "T",
    tagline: "Inovação em tecnologia para transformar o futuro",
    localizacao: "São Paulo - SP",
    segmento: "Tecnologia da Informação",
    porte: "Média empresa (150-500 funcionários)",
    sobre: "A Tech Solutions Ltda é uma empresa líder em soluções tecnológicas, fundada em 2010 com a missão de transformar negócios através da inovação. Atuamos no desenvolvimento de software, consultoria em TI e transformação digital para empresas de diversos portes.\n\nNossa equipe é composta por profissionais apaixonados por tecnologia, comprometidos com a excelência e com um ambiente de trabalho colaborativo. Valorizamos a diversidade, a aprendizagem contínua e o equilíbrio entre vida pessoal e profissional.",
    endereco: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
    email: "contato@techsolutions.com.br",
    telefone: "(11) 3456-7890",
    website: "www.techsolutions.com.br",
    estatisticas: {
        vagas: 12,
        candidatos: 247,
        contratados: 18,
        avaliacao: 4.8
    }
};

// ===== BENEFÍCIOS =====
const benefits = [
    { icon: "💰", nome: "Vale Refeição" },
    { icon: "🏥", nome: "Plano de Saúde" },
    { icon: "🦷", nome: "Plano Odontológico" },
    { icon: "🏋️", nome: "Gympass" },
    { icon: "🏠", nome: "Home Office Híbrido" },
    { icon: "📚", nome: "Auxílio Educação" },
    { icon: "🎂", nome: "Day off no Aniversário" },
    { icon: "💼", nome: "PLR" },
    { icon: "🚗", nome: "Vale Transporte" },
    { icon: "📈", nome: "Previdência Privada" },
    { icon: "🎯", nome: "Stock Options" },
    { icon: "🧘", nome: "Apoio Mental" }
];

// ===== VAGAS ATIVAS =====
const vacancies = [
    {
        titulo: "Desenvolvedor Front-End Pleno",
        status: "ativa",
        area: "TI",
        tipo: "CLT",
        candidatos: 45,
        dias: 12
    },
    {
        titulo: "Analista de Marketing Digital",
        status: "ativa",
        area: "Marketing",
        tipo: "CLT",
        candidatos: 67,
        dias: 8
    },
    {
        titulo: "Designer UX/UI",
        status: "pausada",
        area: "Design",
        tipo: "PJ",
        candidatos: 34,
        dias: 20
    },
    {
        titulo: "Tech Lead - React",
        status: "ativa",
        area: "TI",
        tipo: "CLT",
        candidatos: 23,
        dias: 5
    },
    {
        titulo: "Estagiário de TI",
        status: "ativa",
        area: "TI",
        tipo: "Estágio",
        candidatos: 89,
        dias: 15
    },
    {
        titulo: "Analista de RH",
        status: "ativa",
        area: "RH",
        tipo: "CLT",
        candidatos: 56,
        dias: 10
    }
];

// ===== AVALIAÇÕES =====
const reviews = [
    {
        autor: "Ana Silva",
        inicial: "A",
        cargo: "Desenvolvedora Front-End",
        estrelas: 5,
        texto: "Excelente ambiente de trabalho! A empresa valoriza muito o desenvolvimento profissional e oferece ótimos benefícios. O clima é colaborativo e os líderes são acessíveis.",
        data: "15 Ago 2026"
    },
    {
        autor: "Carlos Santos",
        inicial: "C",
        cargo: "Analista de Marketing",
        estrelas: 5,
        texto: "Processo seletivo muito bem estruturado e transparente. Desde a primeira entrevista me senti acolhido. A empresa realmente se importa com as pessoas.",
        data: "02 Set 2026"
    },
    {
        autor: "Mariana Costa",
        inicial: "M",
        cargo: "Candidata",
        estrelas: 4,
        texto: "Ótima experiência no processo seletivo. Comunicação clara em todas as etapas. Recomendo para quem busca oportunidades na área de tecnologia.",
        data: "28 Ago 2026"
    },
    {
        autor: "Pedro Oliveira",
        inicial: "P",
        cargo: "Tech Lead",
        estrelas: 5,
        texto: "Ambiente desafiador e inovador. Tenho autonomia para tomar decisões e a empresa investe pesado em tecnologia de ponta. Salários competitivos.",
        data: "20 Ago 2026"
    }
];

// ===== RENDERIZAR BENEFÍCIOS =====
function renderBenefits() {
    const benefitsGrid = document.getElementById('benefits-grid');
    if (!benefitsGrid) return;

    benefitsGrid.innerHTML = benefits.map(benefit => `
        <div class="benefit-card">
            <div class="benefit-icon">${benefit.icon}</div>
            <span>${benefit.nome}</span>
        </div>
    `).join('');
}

// ===== RENDERIZAR VAGAS =====
function renderVacancies() {
    const vacanciesGrid = document.getElementById('vacancies-grid');
    if (!vacanciesGrid) return;

    vacanciesGrid.innerHTML = vacancies.map(vacancy => `
        <div class="vacancy-card">
            <div class="vacancy-header">
                <h3>${vacancy.titulo}</h3>
                <span class="status-badge ${vacancy.status}">${vacancy.status}</span>
            </div>
            <div class="vacancy-tags">
                <span class="vacancy-tag">${vacancy.area}</span>
                <span class="vacancy-tag">${vacancy.tipo}</span>
            </div>
            <div class="vacancy-stats">
                <div class="vacancy-stat">
                    <strong>${vacancy.candidatos}</strong>
                    <span>Candidatos</span>
                </div>
                <div class="vacancy-stat">
                    <strong>${vacancy.dias}d</strong>
                    <span>Publicada</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== RENDERIZAR AVALIAÇÕES =====
function renderReviews() {
    const reviewsList = document.getElementById('reviews-list');
    if (!reviewsList) return;

    reviewsList.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-author">
                    <div class="review-avatar">${review.inicial}</div>
                    <div class="review-info">
                        <h4>${review.autor}</h4>
                        <span>${review.cargo}</span>
                    </div>
                </div>
                <div class="review-stars">${'★'.repeat(review.estrelas)}${'☆'.repeat(5 - review.estrelas)}</div>
            </div>
            <p class="review-text">"${review.texto}"</p>
            <div class="review-date">${review.data}</div>
        </div>
    `).join('');
}

// ===== PREENCHER DADOS DA EMPRESA =====
function populateCompanyData() {
    // Tentar carregar do localStorage
    const savedData = JSON.parse(localStorage.getItem('companyProfile') || 'null');
    const data = savedData || companyData;

    // Preencher elementos
    const elements = {
        'company-initial': data.inicial,
        'company-name': data.nome,
        'company-tagline': data.tagline,
        'company-location': data.localizacao,
        'company-segment': data.segmento,
        'company-size': data.porte,
        'company-about': data.sobre,
        'company-address': data.endereco,
        'company-email': data.email,
        'company-phone': data.telefone,
        'company-website': data.website,
        'stat-vagas': data.estatisticas?.vagas || 0,
        'stat-candidatos': data.estatisticas?.candidatos || 0,
        'stat-contratados': data.estatisticas?.contratados || 0,
        'stat-avaliacao': data.estatisticas?.avaliacao || 0,
        'rating-score': data.estatisticas?.avaliacao || 0
    };

    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element && elements[id]) {
            element.textContent = elements[id];
        }
    });
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    // Preencher dados
    populateCompanyData();

    // Renderizar seções
    renderBenefits();
    renderVacancies();
    renderReviews();

    // Botões de ação
    document.getElementById('btn-edit-profile')?.addEventListener('click', () => {
        alert('Redirecionando para edição do perfil da empresa...');
        // window.location.href = 'editar-empresa.html';
    });

    document.getElementById('btn-new-vacancy')?.addEventListener('click', () => {
        alert('Redirecionando para publicação de nova vaga...');
        // window.location.href = 'publicar-vaga.html';
    });

    console.log('Perfil da empresa carregado com sucesso!');
});