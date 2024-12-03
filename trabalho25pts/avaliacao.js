// Função para manipular o clique nas estrelas
function rate(event) {
    const stars = event.currentTarget;
    const rating = event.offsetX / stars.offsetWidth * 5; // Calcula a quantidade de estrelas com base no clique
    const roundedRating = Math.ceil(rating); // Arredonda para o número inteiro mais próximo

    // Atualiza o valor de `data-rating` e exibe as estrelas
    stars.dataset.rating = roundedRating;
    stars.textContent = "★".repeat(roundedRating) + "☆".repeat(5 - roundedRating);
}

// Função para enviar as avaliações
document.querySelector(".submit-button").addEventListener("click", () => {
    const buttons = document.querySelectorAll(".button");
    const avaliacoes = [];

    // Coleta as avaliações de cada refeição
    buttons.forEach((button) => {
        const refeicao = button.querySelector("button").textContent;
        const rating = button.querySelector(".stars").dataset.rating;
        avaliacoes.push(`${refeicao}: ${rating} estrelas`);
    });

    // Exibe o alert com todas as avaliações
    alert("A avaliação foi enviada!\n\n" + avaliacoes.join("\n"));
});

