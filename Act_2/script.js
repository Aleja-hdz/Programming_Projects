let page = 1;
function ant(){
    page -= 1;
    loadCharacters(page);
}

function sig(){
    page += 1;
    loadCharacters(page);
}

function actual(info){
    const ant_btn = document.getElementById("btn-ant");
    ant_btn.disabled = info.prev ? false: true;

    const actualPage = document.getElementById("page-ant");
    actualPage.innerHTML = page;

    const sig_btn = document.getElementById("btn-sig");
    sig_btn.disabled = info.next ? false: true;
}

function targets (character){
    const newTarget = document.createElement("div");
    newTarget.setAttribute("class", "targets");

    newTarget.innerHTML =
    `<div>
        <img src="${character.image}">
    </div>
    <div class="info">
        <b><p>Nombre:</p></b>
        <p>${character.name}</p>
        <b><p>Estado y especie:</p></b>
        <p><span class="status status-${character.status.toLowerCase()}"></span>${character.status} - ${character.species}</p>
        <b><p>Ubicacion: </p></b>
        <p>${character.location.name}</p>
    </div>`;

    return newTarget; 
}   


function loadCharacters(goPage){
    fetch(`https://rickandmortyapi.com/api/character?page=${goPage}`)
    .then(response => response.json())
    .then((data) => {
        actual(data.info);
        
        document.getElementById('page-sig').innerHTML=data.info.pages;
        document.getElementById('numero-personajes').innerHTML=data.info.count;

        const targetsCharacters = document.getElementById("targetCharacter");
        targetsCharacters.innerHTML = "";

        data.results.forEach((character) => {
            targetsCharacters.appendChild(
                targets(character)
            );
        });
    })
    .catch((error) => {
        console.error(error);
    })
}

loadCharacters(page);