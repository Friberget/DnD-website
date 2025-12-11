const characters = [];

function addCharacter() {
  const nameInput = document.getElementById("newcharacter_name");
  const name = nameInput.value;

  if (!name) {
    return;
  }

  const character = {
    name: name,
  };

  characters.push(character);

  nameInput.value = "";
  listCharacters();
}

function listCharacters() {
  const characterListWrapper = document.getElementById("characterlist");
  characterListWrapper.innerHTML = "";

  characters.forEach((char) => {
    const characterWrapper = document.createElement("div");
    const nameElement = document.createElement("h3");
    nameElement.innerText = char.name;

    characterWrapper.appendChild(nameElement);
    characterListWrapper.appendChild(characterWrapper);
  });
}

document
  .getElementById("add-new-character")
  .addEventListener("click", addCharacter);
