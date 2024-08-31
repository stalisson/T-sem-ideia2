// Mapeamento de índice de posição atual para cada carrossel
const indexMap = {
    'books': 0,
    'movies': 0,
    'all': 0
};

// Função para mover o carrossel
function moveCarousel(id, direction) {
    const track = document.getElementById(${id}-track);
    const items = track.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Atualiza o índice com base na direção
    indexMap[id] += direction;

    // Se o índice for menor que 0, volta para o último item
    if (indexMap[id] < 0) {
        indexMap[id] = totalItems - 1;
    } 
    // Se o índice exceder o número de itens, volta para o primeiro item
    else if (indexMap[id] >= totalItems) {
        indexMap[id] = 0;
    }

    // Calcula a largura de um item e move o carrossel
    const itemWidth = items[0].offsetWidth + 30; // Inclui a margem
    track.scrollLeft = indexMap[id] * itemWidth;
}

// Função para alternar a exibição do menu hambúrguer
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Função para rolar suavemente para uma seção
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Adicionando eventos de clique para os links do menu
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Evita o comportamento padrão do link
        const targetSection = this.getAttribute('href').substring(1);  // Obtém o ID da seção
        scrollToSection(targetSection);  // Rola suavemente para a seção correspondente
        toggleMenu();  // Fecha o menu após o clique
    });
});