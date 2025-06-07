function buscarPokemon() {
    const nome = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            const resultado = document.getElementById('resultado');

            if (this.status === 200) {
                const data = JSON.parse(this.responseText);

                const tipos = data.types.map(t => t.type.name).join(', ');

                resultado.innerHTML = `
                    <h2>${data.name.toUpperCase()}</h2>
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                    <p>🆔 <strong>ID:</strong> ${data.id}</p>
                    <p>📏 <strong>Altura:</strong> ${data.height}</p>
                    <p>⚖️ <strong>Peso:</strong> ${data.weight}</p>
                    <p>🔰 <strong>Tipos:</strong> ${tipos}</p>
                `;
            } else {
                resultado.innerHTML = `<p style="color:red;">❌ Pokémon não encontrado! Verifique o nome ou ID.</p>`;
            }
        }
    };

    xhttp.open('GET', url, true);
    xhttp.send();
}
