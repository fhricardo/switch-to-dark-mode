const Bg = document.getElementById('background');
const toggleSwitch = document.getElementById('switch');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

const toggleBg = () => {
    if (toggleSwitch.checked) {
        // Adicionar a classe de fundo secundária
        Bg.classList.remove('day');
        Bg.classList.add('night');
        header.classList.remove('light');
        header.classList.add('dark');
        footer.classList.remove('light');
        footer.classList.add('dark');
    } else {
        // Remover a classe de fundo secundária e adicionar a classe de fundo inicial
        Bg.classList.remove('night');
        Bg.classList.add('day');
        header.classList.remove('dark');
        header.classList.add('light');
        footer.classList.remove('dark');
        footer.classList.add('light');
    }
};

// Adicionar o evento de mudança ao checkbox
toggleSwitch.addEventListener('change', toggleBg);