const questoes = [
{
    questao: "Qual desses materiais leva mais tempo para se decompor?",
    respostas: [
        { texto: "Papel", correct: false },
        { texto: "Plástico", correct: true },
        { texto: "Casca de fruta", correct: false },
        { texto: "Folhas", correct: false },
    ]
},
{
    questao: "Qual é uma fonte de energia renovável?",
    respostas: [
        { texto: "Carvão", correct: false },
        { texto: "Petróleo", correct: false },
        { texto: "Energia solar", correct: true },
        { texto: "Gás natural", correct: false },
    ]
},
{
    questao: "O que significa reciclar?",
    respostas: [
        { texto: "Jogar fora", correct: false },
        { texto: "Queimar lixo", correct: false },
        { texto: "Reutilizar materiais", correct: true },
        { texto: "Enterrar resíduos", correct: false },
    ]
},
{
    questao: "Qual desses é um exemplo de poluição do ar?",
    respostas: [
        { texto: "Água limpa", correct: false },
        { texto: "Árvores", correct: false },
        { texto: "Chuva", correct: false },
        { texto: "Fumaça de carros", correct: true },
    ]
},
{
    questao: "O desmatamento afeta principalmente:",
    respostas: [
        { texto: "A fauna e flora", correct: true },
        { texto: "Apenas os rios", correct: false },
        { texto: "Somente o clima", correct: false },
        { texto: "Nada", correct: false },
    ]
},
{
    questao: "Qual atitude ajuda a economizar água?",
    respostas: [
        { texto: "Tomar banhos longos", correct: false },
        { texto: "Fechar a torneira ao escovar os dentes", correct: true },
        { texto: "Lavar calçada com mangueira", correct: false },
        { texto: "Deixar torneira aberta", correct: false },
    ]
},
{
    questao: "O efeito estufa é:",
    respostas: [
        { texto: "Sempre ruim", correct: false },
        { texto: "Um fenômeno natural que pode ser intensificado", correct: true },
        { texto: "Uma tempestade", correct: false },
        { texto: "Um tipo de poluição sonora", correct: false },
    ]
},
{
    questao: "Qual desses NÃO é reciclável?",
    respostas: [
        { texto: "Vidro", correct: false },
        { texto: "Metal", correct: false },
        { texto: "Papel higiênico usado", correct: true },
        { texto: "Plástico", correct: false },
    ]
},
{
    questao: "Qual cor representa lixo reciclável geralmente?",
    respostas: [
        { texto: "Azul", correct: true },
        { texto: "Preto", correct: false },
        { texto: "Marrom", correct: false },
        { texto: "Cinza", correct: false },
    ]
},
{
    questao: "A coleta seletiva serve para:",
    respostas: [
        { texto: "Misturar lixo", correct: false },
        { texto: "Separar resíduos", correct: true },
        { texto: "Queimar lixo", correct: false },
        { texto: "Poluir menos rios", correct: false },
    ]
},

// 🔥 MAIS QUESTÕES

{
    questao: "O que é biodiversidade?",
    respostas: [
        { texto: "Poluição", correct: false },
        { texto: "Clima", correct: false },
        { texto: "Energia", correct: false },
        { texto: "Diversidade de vida", correct: true },
    ]
},
{
    questao: "Qual desses ajuda o meio ambiente?",
    respostas: [
        { texto: "Desperdiçar água", correct: false },
        { texto: "Jogar lixo no rio", correct: false },
        { texto: "Queimar plástico", correct: false },
        { texto: "Reciclar lixo", correct: true },
    ]
},
{
    questao: "O que é compostagem?",
    respostas: [
        { texto: "Queimar lixo", correct: false },
        { texto: "Transformar lixo orgânico em adubo", correct: true },
        { texto: "Jogar lixo fora", correct: false },
        { texto: "Enterrar plástico", correct: false },
    ]
},
{
    questao: "Qual desses é lixo orgânico?",
    respostas: [
        { texto: "Casca de banana", correct: true },
        { texto: "Garrafa PET", correct: false },
        { texto: "Lata", correct: false },
        { texto: "Vidro", correct: false },
    ]
},
{
    questao: "Qual desses é um problema ambiental?",
    respostas: [
        { texto: "Reciclagem", correct: false },
        { texto: "Poluição", correct: true },
        { texto: "Plantio de árvores", correct: false },
        { texto: "Energia limpa", correct: false },
    ]
},
{
    questao: "O que são energias limpas?",
    respostas: [
        { texto: "Poluentes", correct: false },
        { texto: "Renováveis e não poluentes", correct: true },
        { texto: "Carvão", correct: false },
        { texto: "Gasolina", correct: false },
    ]
},
{
    questao: "Qual desses reduz o lixo?",
    respostas: [
        { texto: "Reutilizar", correct: true },
        { texto: "Descartar tudo", correct: false },
        { texto: "Queimar lixo", correct: false },
        { texto: "Jogar no mar", correct: false },
    ]
},
{
    questao: "Qual é o principal gás do efeito estufa?",
    respostas: [
        { texto: "Oxigênio", correct: false },
        { texto: "Hidrogênio", correct: false },
        { texto: "Gás carbônico (CO2)", correct: true },
        { texto: "Nitrogênio", correct: false },
    ]
},
{
    questao: "O aquecimento global causa:",
    respostas: [
        { texto: "Resfriamento", correct: false },
        { texto: "Nada", correct: false },
        { texto: "Mais neve sempre", correct: false },
        { texto: "Aumento da temperatura", correct: true },
    ]
},
{
    questao: "Qual atitude ajuda a natureza?",
    respostas: [
        { texto: "Desmatar", correct: false },
        { texto: "Poluir rios", correct: false },
        { texto: "Queimar lixo", correct: false },
        { texto: "Plantar árvores", correct: true },
    ]
},
{
    questao: "Por que o plástico é considerado um problema ambiental mesmo sendo reciclável?",
    respostas: [
        { texto: "Porque grande parte não é reciclada e pode se fragmentar em microplásticos", correct: true },
        { texto: "Porque a reciclagem é perfeita e resolve tudo", correct: false },
        { texto: "Porque ele desaparece rápido na natureza", correct: false },
        { texto: "Porque não pode ser reutilizado", correct: false },
    ]
},
{
    questao: "Qual é o principal problema de substituir carros a combustão por carros elétricos sem mudar o modelo de transporte?",
    respostas: [
        { texto: "Continua havendo trânsito, consumo excessivo e impacto urbano", correct: true },
        { texto: "Nenhum problema", correct: false },
        { texto: "Carros elétricos não funcionam", correct: false },
        { texto: "Eles não poluem nada", correct: false },
    ]
},
{
    questao: "Por que o consumo de carne impacta o meio ambiente?",
    respostas: [
        { texto: "Não impacta", correct: false },
        { texto: "Porque exige grandes áreas, água e gera emissão de gases", correct: true },
        { texto: "Porque é reciclável", correct: false },
        { texto: "Porque é natural", correct: false },
    ]
},
{
    questao: "O que são microplásticos?",
    respostas: [
        { texto: "Plásticos biodegradáveis", correct: false },
        { texto: "Pequenas partículas de plástico que contaminam água, solo e organismos", correct: true },
        { texto: "Plásticos reciclados", correct: false },
        { texto: "Tipos de vidro", correct: false },
    ]
},
{
    questao: "Por que plantar árvores sozinho não resolve o aquecimento global?",
    respostas: [
        { texto: "Porque o problema envolve consumo, energia e emissões em larga escala", correct: true },
        { texto: "Porque árvores não ajudam", correct: false },
        { texto: "Porque árvores poluem", correct: false },
        { texto: "Porque não absorvem CO2", correct: false },
    ]
},
{
    questao: "Qual é o risco de soluções ambientais superficiais (greenwashing)?",
    respostas: [
        { texto: "Resolver o problema rápido", correct: false },
        { texto: "Reduzir consumo", correct: false },
        { texto: "Criar falsa sensação de sustentabilidade sem mudança real", correct: true },
        { texto: "Eliminar poluição", correct: false },
    ]
},
{
    questao: "Por que reciclar não é suficiente para resolver o problema do lixo?",
    respostas: [
        { texto: "Porque não funciona", correct: false },
        { texto: "Porque é caro", correct: false },
        { texto: "Porque ninguém recicla", correct: false },
        { texto: "Porque o volume de consumo é maior que a capacidade de reciclagem", correct: true },
    ]
},
{
    questao: "Qual é o impacto ambiental do fast fashion?",
    respostas: [
        { texto: "Nenhum", correct: false },
        { texto: "Ajuda o meio ambiente", correct: false },
        { texto: "Reduz lixo", correct: false },
        { texto: "Grande uso de recursos, poluição e descarte rápido de roupas", correct: true },
    ]
},
{
    questao: "Por que a água potável é considerada um recurso limitado?",
    respostas: [
        { texto: "Porque a maior parte da água não é acessível ou tratada para consumo", correct: true },
        { texto: "Porque existe pouca água no planeta", correct: false },
        { texto: "Porque evapora rápido", correct: false },
        { texto: "Porque não chove", correct: false },
    ]
},
{
    questao: "Qual é o principal problema do descarte incorreto de lixo eletrônico?",
    respostas: [
        { texto: "Ocupa espaço apenas", correct: false },
        { texto: "Desaparece sozinho", correct: false },
        { texto: "Libera metais tóxicos que contaminam solo e água", correct: true },
        { texto: "Não causa impacto", correct: false },
    ]
},

// 🔥 MAIS PROFUNDAS

{
    questao: "Por que reduzir consumo é mais eficaz que apenas reciclar?",
    respostas: [
        { texto: "Porque reciclar é inútil", correct: false },
        { texto: "Porque evita a geração de resíduos desde a origem", correct: true },
        { texto: "Porque é mais fácil", correct: false },
        { texto: "Porque não precisa de tecnologia", correct: false },
    ]
},
{
    questao: "O que significa desenvolvimento sustentável?",
    respostas: [
        { texto: "Crescer sem limites", correct: false },
        { texto: "Explorar recursos", correct: false },
        { texto: "Atender às necessidades atuais sem comprometer o futuro", correct: true },
        { texto: "Parar o crescimento", correct: false },
    ]
},
{
    questao: "Por que monoculturas agrícolas podem ser prejudiciais?",
    respostas: [
        { texto: "Porque reduzem biodiversidade e aumentam vulnerabilidade", correct: true },
        { texto: "Porque produzem pouco", correct: false },
        { texto: "Porque são naturais", correct: false },
        { texto: "Porque são sustentáveis", correct: false },
    ]
},
{
    questao: "Qual o impacto do desperdício de alimentos?",
    respostas: [
        { texto: "Desperdício de água, energia e aumento de emissões", correct: true },
        { texto: "Nenhum", correct: false },
        { texto: "Ajuda a economia", correct: false },
        { texto: "Reduz poluição", correct: false },
    ]
},
{
    questao: "Por que proteger florestas é essencial para o clima?",
    respostas: [
        { texto: "Porque ocupam espaço", correct: false },
        { texto: "Porque regulam o clima e armazenam carbono", correct: true },
        { texto: "Porque produzem plástico", correct: false },
        { texto: "Porque não têm função", correct: false },
    ]
},
{
    questao: "Qual é o problema do uso excessivo de combustíveis fósseis?",
    respostas: [
        { texto: "Nenhum", correct: false },
        { texto: "Produzem oxigênio", correct: false },
        { texto: "São renováveis", correct: false },
        { texto: "Emissão de gases que intensificam o aquecimento global", correct: true },
    ]
},
{
    questao: "O que caracteriza uma economia circular?",
    respostas: [
        { texto: "Descartar tudo", correct: false },
        { texto: "Consumir mais", correct: false },
        { texto: "Queimar resíduos", correct: false },
        { texto: "Reutilizar, reciclar e reduzir desperdício", correct: true },
    ]
},
{
    questao: "Por que áreas urbanas contribuem para ilhas de calor?",
    respostas: [
        { texto: "Porque têm árvores demais", correct: false },
        { texto: "Porque chove muito", correct: false },
        { texto: "Porque são frias", correct: false },
        { texto: "Porque concreto e asfalto retêm calor", correct: true },
    ]
},
{
    questao: "Qual é o impacto ambiental do uso excessivo de plástico descartável?",
    respostas: [
        { texto: "Nenhum", correct: false },
        { texto: "Acúmulo de resíduos e poluição de ecossistemas", correct: true },
        { texto: "Ajuda reciclagem", correct: false },
        { texto: "Desaparece rápido", correct: false },
    ]
},
{
    questao: "Por que a educação ambiental é importante?",
    respostas: [
        { texto: "Ajuda a mudar comportamentos e decisões conscientes", correct: true },
        { texto: "Não é importante", correct: false },
        { texto: "Serve só para escolas", correct: false },
        { texto: "Não tem impacto", correct: false },
    ]
}
];

const elementoDaQuestao = document.getElementById("questao");
const botaoResposta = document.getElementById("botao-resposta");
const proximoBtn = document.getElementById("proximo-btn");
const feedback = document.getElementById("feedback");

let questaoAtualIndex = 0;
let score = 0;

// ===================
// 💾 LOCAL STORAGE SEGURO
// ===================
function salvarProgresso() {
    localStorage.setItem("quizIndex", questaoAtualIndex);
    localStorage.setItem("quizScore", score);
}

function carregarProgresso() {
    const index = parseInt(localStorage.getItem("quizIndex"));
    const savedScore = parseInt(localStorage.getItem("quizScore"));

    // 🔥 validação pra não quebrar
    if (!isNaN(index) && index < questoes.length) {
        questaoAtualIndex = index;
    }

    if (!isNaN(savedScore)) {
        score = savedScore;
    }
}

function limparProgresso() {
    localStorage.removeItem("quizIndex");
    localStorage.removeItem("quizScore");
}

// ===================
// 🚀 QUIZ
// ===================
function startQuiz() {
    carregarProgresso();
    showQuestion();
}

function showQuestion() {
    resetState();

    let questaoAtual = questoes[questaoAtualIndex];

    if (!questaoAtual) {
        // 🔥 fallback se der bug
        questaoAtualIndex = 0;
        score = 0;
        limparProgresso();
        return showQuestion();
    }

    elementoDaQuestao.innerText = questaoAtual.questao;

    questaoAtual.respostas.forEach((resposta) => {
        const button = document.createElement("button");

        button.innerText = resposta.texto;
        button.classList.add("btn");

        button.setAttribute("tabindex", "0");

        if (resposta.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", escolherResposta);

        button.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                escolherResposta(e);
            }
        });

        botaoResposta.appendChild(button);
    });
}

function resetState() {
    proximoBtn.style.display = "none";
    while (botaoResposta.firstChild) {
        botaoResposta.removeChild(botaoResposta.firstChild);
    }
}

function escolherResposta(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correta");
        score++;
        feedback.innerText = "Resposta correta";
    } else {
        selectedBtn.classList.add("incorreta");
        feedback.innerText = "Resposta incorreta";
    }

    Array.from(botaoResposta.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correta");
        }
        button.disabled = true;
    });

    salvarProgresso();
    proximoBtn.style.display = "block";
}

proximoBtn.addEventListener("click", () => {
    questaoAtualIndex++;

    if (questaoAtualIndex < questoes.length) {
        salvarProgresso();
        showQuestion();
    } else {
        const novoRecord = salvarRecord();
const record = pegarRecord();

elementoDaQuestao.innerHTML = `
    Você acertou ${score} de ${questoes.length}!<br><br>
    🏆 Recorde: ${record}<br>
    ${novoRecord ? "🔥 Novo recorde!" : ""}
`;
        botaoResposta.innerHTML = "";

        limparProgresso();

        proximoBtn.innerText = "Reiniciar";
        proximoBtn.style.display = "block";

        proximoBtn.onclick = () => {
            questaoAtualIndex = 0;
            score = 0;
            startQuiz();
        };
    }
});

function salvarRecord() {
    const recordAtual = parseInt(localStorage.getItem("record")) || 0;

    if (score > recordAtual) {
        localStorage.setItem("record", score);
        return true; // bateu record
    }
    return false;
}

function pegarRecord() {
    return parseInt(localStorage.getItem("record")) || 0;
}

startQuiz();