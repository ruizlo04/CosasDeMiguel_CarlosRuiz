$(document).ready(function () {
    getPokemonListV2();

    $(document).on("click", "#btn-get-data", function () {
        getPokemonListV2();
    });

    $(document).on("input", ".search-bar input", function () {
        var searchQuery = $(this).val().toLowerCase();
        var searchQueryId = $(this).val().length > 0 ? parseInt(searchQuery) : 0;
        getPokemonListV2(searchQuery, searchQueryId);
    });

    function getPokemonListV2(searchQuery = "", searchQueryId = 0) {
        $(".pokemon-grid").html("<img src='loading.gif' class='mx-auto d-block' />");
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon?limit=50",
            method: "GET",
        }).done(function (resp) {
            setTimeout(function () {
                $(".pokemon-grid").html(""); 
                var listadoPomemon = resp.results;
                listadoPomemon = listadoPomemon.filter(function (pokemon) {
                    return pokemon.name.includes(searchQuery) || pokemon.url.split("/")[6].includes(searchQueryId);
                });
                listadoPomemon.forEach(function (pokemon) {
                    var pokemonId = pokemon.url.split("/")[6];
                    var template = `
                        <div class="col-md-4 mb-4">
                            <div class="card h-100 shadow-sm pokemon-card">
                                <a href="detail.html?pid=${pokemonId}">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemonId}.png" class="card-img-top" alt="${pokemon.name}" style="width: 100px; height: 100px; margin: auto;">
                                    <div class="card-body">
                                        <p class="card-text bg-dark text-white rounded-pill py-2">#${String(pokemonId).padStart(4, '0')} ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                                    </div>
                                </a>
                            </div>
                        </div>`;
                    $(".pokemon-grid").append(template); 
                });
            }, 1000);
        });
    }
});