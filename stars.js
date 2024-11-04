// Dados das constelações
// Dados das constelações
const constelacoes = [
    { 
        nome: "Orion", 
        descricao: "Orion é uma das constelações mais reconhecíveis no céu noturno, facilmente identificável pelo seu cinturão de três estrelas.", 
        estrelas: 9 
    },
    { 
        nome: "Escorpião", 
        descricao: "Escorpião é uma constelação no hemisfério celestial sul associada à figura de um escorpião.", 
        estrelas: 7 
    },    
    { 
        nome: "Ursa Maior", 
        descricao: "Ursa Maior é conhecida por seu grupo de sete estrelas que formam o Asterismo do Grande Carro.", 
        estrelas: 7 
    },
    { 
        nome: "Cassiopeia", 
        descricao: "Cassiopeia é facilmente reconhecida por sua forma de 'W' no céu, composta por cinco estrelas brilhantes.", 
        estrelas: 5 
    },
    { 
        nome: "Andrômeda", 
        descricao: "Andrômeda é uma constelação do hemisfério norte, conhecida pela Galáxia de Andrômeda, visível a olho nu.", 
        estrelas: 16 
    },
    { 
        nome: "Câncer", 
        descricao: "Câncer é uma constelação do zodíaco, com várias estrelas fracas, mas conhecida pelo aglomerado estelar 'Presépio'.", 
        estrelas: 5 
    },
    { 
        nome: "Leão", 
        descricao: "Leão é uma constelação do zodíaco representando um leão, com várias estrelas brilhantes, incluindo Régulo.", 
        estrelas: 10 
    },
    { 
        nome: "Touro", 
        descricao: "Touro, uma constelação do zodíaco, é famosa pelo aglomerado das Plêiades e pela estrela vermelha Aldebaran.", 
        estrelas: 9 
    },
    { 
        nome: "Gêmeos", 
        descricao: "Gêmeos é uma constelação do zodíaco que representa os irmãos Castor e Pólux, com duas estrelas principais de mesmo nome.", 
        estrelas: 8 
    },
    { 
        nome: "Virgem", 
        descricao: "Virgem é uma grande constelação do zodíaco, conhecida pela estrela Spica, uma das mais brilhantes do céu.", 
        estrelas: 15 
    },
    { 
        nome: "Sagitário", 
        descricao: "Sagitário é uma constelação do zodíaco, visível no hemisfério sul, conhecida por seu centro galáctico.", 
        estrelas: 12 
    },
    { 
        nome: "Peixes", 
        descricao: "Peixes é uma constelação do zodíaco que representa dois peixes, conhecida por suas estrelas fracas.", 
        estrelas: 5 
    },
    { 
        nome: "Capricórnio", 
        descricao: "Capricórnio é uma constelação do zodíaco, representada por uma cabra com cauda de peixe, visível no hemisfério sul.", 
        estrelas: 5 
    },
    { 
        nome: "Áquila", 
        descricao: "Áquila é uma constelação do hemisfério norte que contém Altair, uma das estrelas do Triângulo de Verão.", 
        estrelas: 10 
    },
    { 
        nome: "Lira", 
        descricao: "Lira é uma pequena constelação do hemisfério norte, lar da estrela Vega, uma das mais brilhantes do céu.", 
        estrelas: 6 
    },
    { 
        nome: "Cão Maior", 
        descricao: "Cão Maior é uma constelação do hemisfério sul, famosa por abrigar Sirius, a estrela mais brilhante do céu noturno.", 
        estrelas: 8 
    },
    { 
        nome: "Cão Menor", 
        descricao: "Cão Menor é uma pequena constelação do hemisfério norte, com a estrela brilhante Procyon.", 
        estrelas: 2 
    },
    { 
        nome: "Cruz do Sul", 
        descricao: "Cruz do Sul é a menor constelação do hemisfério sul, facilmente identificável por suas quatro estrelas que formam uma cruz.", 
        estrelas: 4 
    },
    { 
        nome: "Draco", 
        descricao: "Draco é uma constelação do hemisfério norte, conhecida por seu formato de dragão que serpenteia ao redor da Ursa Menor.", 
        estrelas: 14 
    },
    { 
        nome: "Hércules", 
        descricao: "Hércules é uma constelação do hemisfério norte, famosa pelo aglomerado globular M13, visível a olho nu em condições escuras.", 
        estrelas: 10 
    },
    // Mais 20 constelações adicionadas
    { 
        nome: "Centauro", 
        descricao: "Centauro é uma grande constelação do hemisfério sul, contendo Alpha Centauri, o sistema estelar mais próximo da Terra.", 
        estrelas: 11 
    },
    { 
        nome: "Pavo", 
        descricao: "Pavo é uma constelação do hemisfério sul que representa um pavão e é conhecida por suas estrelas relativamente brilhantes.", 
        estrelas: 8 
    },
    { 
        nome: "Fênix", 
        descricao: "Fênix é uma constelação do hemisfério sul que representa o pássaro mitológico, conhecida por suas estrelas de brilho moderado.", 
        estrelas: 6 
    },
    { 
        nome: "Peixe Austral", 
        descricao: "Peixe Austral é uma constelação pequena do hemisfério sul, famosa pela estrela Fomalhaut, uma das mais brilhantes.", 
        estrelas: 4 
    },
    { 
        nome: "Pégaso", 
        descricao: "Pégaso é uma constelação do hemisfério norte que representa o cavalo alado da mitologia grega.", 
        estrelas: 9 
    },
    { 
        nome: "Serpente", 
        descricao: "Serpente é uma constelação única, dividida em duas partes: Serpens Caput (a cabeça) e Serpens Cauda (a cauda).", 
        estrelas: 7 
    },
    { 
        nome: "Ophiuchus", 
        descricao: "Ophiuchus é uma grande constelação atravessada pela eclíptica, conhecida como o portador da serpente.", 
        estrelas: 10 
    },
    { 
        nome: "Triângulo", 
        descricao: "Triângulo é uma pequena constelação do hemisfério norte, conhecida por sua forma simples de triângulo.", 
        estrelas: 3 
    },
    { 
        nome: "Vela", 
        descricao: "Vela é uma constelação do hemisfério sul que faz parte da antiga constelação do Navio Argo.", 
        estrelas: 7 
    },
    { 
        nome: "Carina", 
        descricao: "Carina, uma constelação do hemisfério sul, contém Canopus, a segunda estrela mais brilhante do céu.", 
        estrelas: 6 
    },
    { 
        nome: "Coroa Boreal", 
        descricao: "Coroa Boreal é uma pequena constelação em forma de coroa localizada no hemisfério norte.", 
        estrelas: 5 
    },
    { 
        nome: "Coroa Austral", 
        descricao: "Coroa Austral é uma constelação pequena no hemisfério sul, representando uma coroa, com poucas estrelas brilhantes.", 
        estrelas: 4 
    },
    { 
        nome: "Lupus", 
        descricao: "Lupus, ou Lobo, é uma constelação do hemisfério sul, representando um lobo na mitologia antiga.", 
        estrelas: 9 
    },
    { 
        nome: "Grus", 
        descricao: "Grus, ou Grou, é uma constelação do hemisfério sul que representa um grou, conhecida por suas estrelas medianamente brilhantes.", 
        estrelas: 7 
    },
    { 
        nome: "Octante", 
        descricao: "Octante é uma constelação do hemisfério sul, famosa por conter o polo sul celeste, onde não há estrelas brilhantes.", 
        estrelas: 3 
    },
    { 
        nome: "Microscopium", 
        descricao: "Microscopium é uma pequena e obscura constelação do hemisfério sul, representando um microscópio.", 
        estrelas: 3 
    },
    { 
        nome: "Escultor", 
        descricao: "Escultor é uma constelação do hemisfério sul, nomeada em homenagem ao escultor, com estrelas de brilho moderado.", 
        estrelas: 4 
    },
    { 
        nome: "Tucana", 
        descricao: "Tucana é uma constelação do hemisfério sul, famosa por conter a Pequena Nuvem de Magalhães, uma galáxia anã próxima.", 
        estrelas: 4 
    },
    { 
        nome: "Phoenix", 
        descricao: "Phoenix é uma constelação que representa o pássaro mitológico, e está localizada no hemisfério sul.", 
        estrelas: 6 
    },
    { 
        nome: "Retículo", 
        descricao: "Retículo é uma pequena constelação do hemisfério sul, representando um retículo usado em instrumentos científicos.", 
        estrelas: 4 
    },
    { 
        nome: "Volans", 
        descricao: "Volans é uma pequena constelação do hemisfério sul que representa um peixe voador.", 
        estrelas: 6 
    }
];


// Função para buscar constelações
function buscarConstelacao() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const constelacaoInfo = document.getElementById("constelacaoInfo");
    const constelacao = constelacoes.find(c => c.nome.toLowerCase() === input);

    if (constelacao) {
        constelacaoInfo.innerHTML = `<h2>${constelacao.nome}</h2><p>${constelacao.descricao}</p><p>Estrelas: ${constelacao.estrelas}</p>`;
    } else {
        constelacaoInfo.innerHTML = "<p>Constelação não encontrada.</p>";
    }
}

// Função para desenhar estrelas no canvas
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrelas = [];

function gerarEstrelas() {
    const numEstrelas = 200;
    estrelas = [];
    for (let i = 0; i < numEstrelas; i++) {
        estrelas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            tamanho: Math.random() * 2,
            opacidade: Math.random(),
            variacao: Math.random() * 0.02 + 0.01 // velocidade da variação de brilho
        });
    }
}

function desenharEstrelas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    estrelas.forEach(estrela => {
        ctx.beginPath();
        ctx.arc(estrela.x, estrela.y, estrela.tamanho, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${estrela.opacidade})`; // Define a opacidade
        ctx.fill();
        
        // Atualiza a opacidade para simular piscada
        estrela.opacidade += estrela.variacao;
        
        // Inverte a direção da variação de brilho se alcançar os limites
        if (estrela.opacidade >= 1 || estrela.opacidade <= 0) {
            estrela.variacao *= -1;
        }
    });

    requestAnimationFrame(desenharEstrelas); // Animação contínua
}

// Função para atualizar o canvas quando a janela é redimensionada
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gerarEstrelas();
});

// Gera as estrelas ao carregar a página
gerarEstrelas();
desenharEstrelas();


// Desenha as estrelas ao carregar a página
desenharEstrelas();//