document.addEventListener('DOMContentLoaded', function() {
    // Configurações dos flocos de neve
    const snowflakeSymbols = ['・', '・', '・', '・', '・']; // Diferentes símbolos de flocos de neve
    const snowflakeCount = 20; // Quantidade de flocos de neve
    const animationDuration = 10; // Duração da animação em segundos

    // Função para criar um floco de neve
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];

        // Posiciona o floco de neve em uma posição aleatória na tela
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = animationDuration + Math.random() * 5 + 's'; // Tempo aleatório para cair

        // Adiciona um delay aleatório para a criação do floco de neve
        const delay = Math.random() * 5; // Delay entre 0 e 5 segundos
        snowflake.style.animationDelay = delay + 's';

        document.body.appendChild(snowflake);

        // Remove o floco de neve após a animação
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // Cria vários flocos de neve com um intervalo maior
    setInterval(createSnowflake, 5000); // Intervalo de 1 segundo entre as criações
});