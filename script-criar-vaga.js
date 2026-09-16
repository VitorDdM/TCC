// ===== SISTEMA DE CRIAÇÃO DE VAGAS =====
document.addEventListener('DOMContentLoaded', () => {

    // ===== ESTADO =====
    let currentStep = 1;
    const totalSteps = 4;

    // ===== ELEMENTOS =====
    const form = document.getElementById('vacancy-form');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const stepIndicators = document.querySelectorAll('.step-indicator');

    // ===== NAVEGAÇÃO ENTRE ETAPAS =====
    function goToStep(step) {
        if (step < 1 || step > totalSteps) return;

        // Valida a etapa atual antes de avançar
        if (step > currentStep && !validateStep(currentStep)) {
            return;
        }

        // Esconde etapa atual
        document.getElementById(`step-${currentStep}`).classList.remove('active');

        // Atualiza etapa
        currentStep = step;

        // Mostra nova etapa
        document.getElementById(`step-${currentStep}`).classList.add('active');

        // Atualiza progresso
        updateProgress();

        // Se for etapa de revisão, atualiza preview
        if (currentStep === 4) {
            updatePreview();
        }

        // Rola para o topo do formulário
        window.scrollTo({
            top: document.querySelector('.form-section').offsetTop - 100,
            behavior: 'smooth'
        });
    }

    function updateProgress() {
        const percentage = (currentStep / totalSteps) * 100;
        progressFill.style.width = percentage + '%';
        progressText.textContent = `Etapa ${currentStep} de ${totalSteps}`;

        // Atualiza indicadores
        stepIndicators.forEach((indicator, index) => {
            const stepNum = index + 1;
            indicator.classList.remove('active', 'completed');

            if (stepNum === currentStep) {
                indicator.classList.add('active');
            } else if (stepNum < currentStep) {
                indicator.classList.add('completed');
            }
        });
    }

    // ===== VALIDAÇÃO =====
    function validateStep(step) {
        const stepElement = document.getElementById(`step-${step}`);
        const requiredFields = stepElement.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            field.style.borderColor = '';

            if (field.type === 'radio') {
                const radioGroup = stepElement.querySelectorAll(`input[name="${field.name}"]`);
                let isChecked = false;
                radioGroup.forEach(radio => {
                    if (radio.checked) isChecked = true;
                });

                if (!isChecked) {
                    isValid = false;
                    showError('Por favor, selecione uma opção.');
                }
            } else if (field.type === 'checkbox') {
                if (!field.checked) {
                    isValid = false;
                    showError('Você deve aceitar os termos.');
                }
            } else {
                if (field.value.trim() === '') {
                    isValid = false;
                    field.style.borderColor = 'var(--color-danger)';
                    field.focus();
                }
            }
        });

        return isValid;
    }

    function showError(message) {
        // Remove erro anterior
        const existingError = document.querySelector('.form-error');
        if (existingError) existingError.remove();

        const error = document.createElement('div');
        error.className = 'form-error';
        error.textContent = message;
        error.style.cssText = `
            background: rgba(234, 67, 53, 0.1);
            border: 1px solid var(--color-danger);
            color: var(--color-danger-light);
            padding: 12px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 14px;
            font-weight: 600;
        `;

        const activeStep = document.querySelector('.form-step.active');
        activeStep.insertBefore(error, activeStep.firstChild);

        setTimeout(() => {
            if (error.parentNode) error.remove();
        }, 4000);
    }

    // ===== LISTAS DINÂMICAS (Requisitos/Diferenciais) =====
    function setupDynamicList(listId, btnAddId) {
        const list = document.getElementById(listId);
        const btnAdd = document.getElementById(btnAddId);

        btnAdd.addEventListener('click', () => {
            const item = document.createElement('div');
            item.className = 'dynamic-item';
            item.innerHTML = `
                <input type="text" placeholder="Digite aqui..." class="dynamic-input">
                <button type="button" class="btn-remove" aria-label="Remover">
                    <svg viewBox="0 0 24 24" fill="#fff"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            `;

            item.querySelector('.btn-remove').addEventListener('click', () => {
                if (list.children.length > 1) {
                    item.remove();
                }
            });

            list.appendChild(item);
            item.querySelector('.dynamic-input').focus();
        });

        // Setup remove nos itens iniciais
        list.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                if (list.children.length > 1) {
                    btn.closest('.dynamic-item').remove();
                }
            });
        });
    }

    setupDynamicList('requisitos-list', 'btn-add-requisito');
    setupDynamicList('diferenciais-list', 'btn-add-diferencial');

    // ===== ATUALIZAR PREVIEW =====
    function updatePreview() {
        const titulo = document.getElementById('titulo').value || 'Título da Vaga';
        const area = document.getElementById('area').value;
        const tipo = document.getElementById('tipo').value;
        const nivel = document.getElementById('nivel').value;
        const modalidade = document.querySelector('input[name="modalidade"]:checked')?.value;
        const cidade = document.getElementById('cidade').value;
        const estado = document.getElementById('estado').value;
        const salarioMin = document.getElementById('salario-min').value;
        const salarioMax = document.getElementById('salario-max').value;
        const prazo = document.getElementById('prazo').value;
        const numVagas = document.getElementById('num-vagas').value;
        const descricao = document.getElementById('descricao').value;

        // Título
        document.getElementById('preview-titulo').textContent = titulo;

        // Tags
        const tagsContainer = document.getElementById('preview-tags');
        const tags = [area, tipo, nivel, modalidade].filter(Boolean);
        if (cidade && estado) tags.push(`📍 ${cidade} - ${estado}`);
        tagsContainer.innerHTML = tags.map(tag => `<span class="preview-tag">${tag}</span>`).join('');

        // Descrição
        document.getElementById('preview-descricao').textContent = descricao || 'A descrição da vaga aparecerá aqui...';

        // Requisitos
        const requisitosList = document.getElementById('preview-requisitos');
        const requisitos = Array.from(document.querySelectorAll('#requisitos-list .dynamic-input'))
            .map(input => input.value.trim())
            .filter(value => value !== '');

        if (requisitos.length > 0) {
            requisitosList.innerHTML = requisitos.map(req => `<li>${req}</li>`).join('');
        } else {
            requisitosList.innerHTML = '<li>Nenhum requisito adicionado</li>';
        }

        // Diferenciais
        const diferenciaisList = document.getElementById('preview-diferenciais');
        const diferenciais = Array.from(document.querySelectorAll('#diferenciais-list .dynamic-input'))
            .map(input => input.value.trim())
            .filter(value => value !== '');

        if (diferenciais.length > 0) {
            diferenciaisList.innerHTML = diferenciais.map(diff => `<li>${diff}</li>`).join('');
        } else {
            diferenciaisList.innerHTML = '<li>Nenhum diferencial adicionado</li>';
        }

        // Info grid
        const localizacao = modalidade === 'Remoto' ? 'Remoto' : 
                           (cidade && estado ? `${cidade} - ${estado}` : 'Não informado');
        document.getElementById('preview-localizacao').textContent = localizacao;

        const salario = salarioMin && salarioMax ? 
                       `R$ ${parseInt(salarioMin).toLocaleString('pt-BR')} - R$ ${parseInt(salarioMax).toLocaleString('pt-BR')}` :
                       salarioMin ? `A partir de R$ ${parseInt(salarioMin).toLocaleString('pt-BR')}` : 'A combinar';
        document.getElementById('preview-salario').textContent = salario;

        if (prazo) {
            const date = new Date(prazo + 'T00:00:00');
            document.getElementById('preview-prazo').textContent = date.toLocaleDateString('pt-BR');
        } else {
            document.getElementById('preview-prazo').textContent = 'Não definido';
        }

        document.getElementById('preview-num-vagas').textContent = numVagas || '1';
    }

    // ===== COLETAR DADOS DO FORMULÁRIO =====
    function collectFormData() {
        const requisitos = Array.from(document.querySelectorAll('#requisitos-list .dynamic-input'))
            .map(input => input.value.trim())
            .filter(value => value !== '');

        const diferenciais = Array.from(document.querySelectorAll('#diferenciais-list .dynamic-input'))
            .map(input => input.value.trim())
            .filter(value => value !== '');

        return {
            id: Date.now(),
            titulo: document.getElementById('titulo').value,
            area: document.getElementById('area').value,
            departamento: document.getElementById('departamento').value,
            tipo: document.getElementById('tipo').value,
            nivel: document.getElementById('nivel').value,
            numVagas: parseInt(document.getElementById('num-vagas').value) || 1,
            modalidade: document.querySelector('input[name="modalidade"]:checked')?.value,
            cidade: document.getElementById('cidade').value,
            estado: document.getElementById('estado').value,
            salarioMin: parseInt(document.getElementById('salario-min').value) || 0,
            salarioMax: parseInt(document.getElementById('salario-max').value) || 0,
            prazo: document.getElementById('prazo').value,
            descricao: document.getElementById('descricao').value,
            requisitos: requisitos,
            diferenciais: diferenciais,
            status: 'ativa',
            candidatos: 0,
            entrevistas: 0,
            diasPublicada: 0,
            dataCriacao: new Date().toISOString()
        };
    }

    // ===== SALVAR VAGA =====
    function saveVacancy(isDraft = false) {
        const vacancy = collectFormData();
        vacancy.rascunho = isDraft;

        // Carrega vagas existentes
        const savedVacancies = JSON.parse(localStorage.getItem('companyVacancies') || '[]');
        savedVacancies.push(vacancy);
        localStorage.setItem('companyVacancies', JSON.stringify(savedVacancies));

        return vacancy;
    }

    // ===== EVENT LISTENERS: NAVEGAÇÃO =====
    document.getElementById('btn-next-1').addEventListener('click', () => goToStep(2));
    document.getElementById('btn-next-2').addEventListener('click', () => goToStep(3));
    document.getElementById('btn-next-3').addEventListener('click', () => goToStep(4));

    document.getElementById('btn-back-2').addEventListener('click', () => goToStep(1));
    document.getElementById('btn-back-3').addEventListener('click', () => goToStep(2));
    document.getElementById('btn-back-4').addEventListener('click', () => goToStep(3));

    // ===== SALVAR RASCUNHO =====
    document.getElementById('btn-save-draft').addEventListener('click', () => {
        const vacancy = saveVacancy(true);
        alert(`✅ Rascunho salvo com sucesso!\n\nVaga: "${vacancy.titulo}"\n\nVocê pode continuar editando depois.`);
    });

    // ===== SUBMIT DO FORMULÁRIO =====
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateStep(4)) return;

        const vacancy = saveVacancy(false);

        alert(`🎉 Vaga publicada com sucesso!\n\nTítulo: ${vacancy.titulo}\nÁrea: ${vacancy.area}\nNível: ${vacancy.nivel}\n\nA vaga já está visível para os candidatos.`);

        // Redireciona para minhas vagas
        window.location.href = 'vagas-gerente.html';
    });

    // ===== INICIALIZAÇÃO =====
    updateProgress();

    // Define data mínima do prazo como hoje
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('prazo').setAttribute('min', today);

    console.log('Sistema de criação de vagas inicializado.');
});