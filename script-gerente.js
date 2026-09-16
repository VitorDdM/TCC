// ===== DADOS DE EXEMPLO =====
const vagasData = [
    {
        id: 1,
        titulo: "Desenvolvedor Front-End Pleno",
        status: "ativa",
        area: "TI",
        tipo: "CLT",
        localizacao: "São Paulo - SP",
        candidatos: 45,
        entrevistas: 8,
        diasPublicada: 12
    },
    {
        id: 2,
        titulo: "Analista de Marketing Digital",
        status: "ativa",
        area: "Marketing",
        tipo: "CLT",
        localizacao: "Remoto",
        candidatos: 67,
        entrevistas: 12,
        diasPublicada: 8
    },
    {
        id: 3,
        titulo: "Designer UX/UI",
        status: "pausada",
        area: "Design",
        tipo: "PJ",
        localizacao: "Rio de Janeiro - RJ",
        candidatos: 34,
        entrevistas: 5,
        diasPublicada: 20
    },
    {
        id: 4,
        titulo: "Gerente de Projetos",
        status: "preenchida",
        area: "Gestão",
        tipo: "CLT",
        localizacao: "Belo Horizonte - MG",
        candidatos: 89,
        entrevistas: 15,
        diasPublicada: 35
    }
];

const candidatosData = [
    {
        id: 1,
        nome: "Ana Silva",
        vaga: "Desenvolvedor Front-End Pleno",
        habilidades: ["React", "TypeScript", "CSS"],
        match: 92
    },
    {
        id: 2,
        nome: "Carlos Santos",
        vaga: "Analista de Marketing Digital",
        habilidades: ["Google Ads", "SEO", "Analytics"],
        match: 87
    },
    {
        id: 3,
        nome: "Mariana Costa",
        vaga: "Designer UX/UI",
        habilidades: ["Figma", "Design System", "Pesquisa"],
        match: 85
    },
    {
        id: 4,
        nome: "Pedro Oliveira",
        vaga: "Desenvolvedor Front-End Pleno",
        habilidades: ["Vue.js", "JavaScript", "HTML"],
        match: 78
    }
];

// ===== RENDERIZAR VAGAS =====
function renderVagas() {
    const vagasGrid = document.getElementById('vagas-grid');
    
    vagasGrid.innerHTML = vagasData.map(vaga => `
        <div class="vaga-card">
            <div class="vaga-header">
                <h3>${vaga.titulo}</h3>
                <span class="status-badge ${vaga.status}">${vaga.status}</span>
            </div>
            <div class="vaga-meta">
                <span class="vaga-tag">${vaga.area}</span>
                <span class="vaga-tag">${vaga.tipo}</span>
                <span class="vaga-tag">📍 ${vaga.localizacao}</span>
            </div>
            <div class="vaga-stats">
                <div class="vaga-stat">
                    <strong>${vaga.candidatos}</strong>
                    <span>Candidatos</span>
                </div>
                <div class="vaga-stat">
                    <strong>${vaga.entrevistas}</strong>
                    <span>Entrevistas</span>
                </div>
                <div class="vaga-stat">
                    <strong>${vaga.diasPublicada}d</strong>
                    <span>Publicada</span>
                </div>
            </div>
            <div class="vaga-actions">
                <button class="btn-vaga btn-vaga-primary">Ver Candidatos</button>
                <button class="btn-vaga btn-vaga-secondary">Editar</button>
            </div>
        </div>
    `).join('');
}

// ===== RENDERIZAR CANDIDATOS =====
function renderCandidatos() {
    const candidatosList = document.getElementById('candidatos-list');
    
    candidatosList.innerHTML = candidatosData.map(candidato => `
        <div class="candidato-card">
            <div class="candidato-avatar">${candidato.nome.charAt(0)}</div>
            <div class="candidato-info">
                <h4>${candidato.nome}</h4>
                <p>Candidatou-se para: ${candidato.vaga}</p>
                <div class="candidato-tags">
                    ${candidato.habilidades.map(h => `<span class="candidato-tag">${h}</span>`).join('')}
                </div>
            </div>
            <div class="candidato-match">
                <div class="match-score">${candidato.match}%</div>
                <div class="match-label">Match</div>
            </div>
        </div>
    `).join('');
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar dados
    renderVagas();
    renderCandidatos();

    // Botões de ação rápida
    document.getElementById('btn-nova-vaga')?.addEventListener('click', () => {
        alert('Redirecionando para publicação de nova vaga...');
    });

    document.getElementById('btn-ver-candidatos')?.addEventListener('click', () => {
        alert('Redirecionando para lista de candidatos...');
    });

    // Cards de ações
    document.getElementById('acao-publicar')?.addEventListener('click', () => {
        alert('Publicar nova vaga');
    });

    document.getElementById('acao-revisar')?.addEventListener('click', () => {
        alert('Revisar candidatos');
    });

    document.getElementById('acao-agendar')?.addEventListener('click', () => {
        alert('Agendar entrevista');
    });

    document.getElementById('acao-relatorio')?.addEventListener('click', () => {
        alert('Gerar relatório');
    });

    // Botões das vagas
    document.querySelectorAll('.btn-vaga-primary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const vagaCard = e.target.closest('.vaga-card');
            const titulo = vagaCard.querySelector('h3').textContent;
            alert(`Ver candidatos da vaga: ${titulo}`);
        });
    });

    document.querySelectorAll('.btn-vaga-secondary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const vagaCard = e.target.closest('.vaga-card');
            const titulo = vagaCard.querySelector('h3').textContent;
            alert(`Editar vaga: ${titulo}`);
        });
    });

    console.log('Painel do Gerente carregado com sucesso!');
});