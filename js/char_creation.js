const characters = [];

function addCharacter() {
  const nameInput = document.getElementById("newcharacter_name");
  const name = nameInput.value;

  if (!name) {
    return;
  }

  const character = {
    name: name,
    race: "Dwarf",
    alignment: "Chaotic Neutral",
  };

  characters.push(character);

  nameInput.value = "";
  listCharacters();
}

function listCharacters() {
  const characterListDiv = document.getElementById("characterlist");
  characterListDiv.innerHTML = "";

  characters.forEach((char) => {
    const characterDiv = document.createElement("div");

    const nameElement = createTextElement("h3", char.name);
    characterDiv.appendChild(nameElement);

    const raceElement = createTextElement("span", char.race);
    characterDiv.appendChild(raceElement);

    const alignmentElement = createTextElement("span", char.alignment);
    characterDiv.appendChild(alignmentElement);

    characterListDiv.appendChild(characterDiv);
  });
}

function createTextElement(htmlElementType, text) {
  const newElement = document.createElement(htmlElementType);
  newElement.innerText = text;
  return newElement;
}

document
  .getElementById("add-new-character")
  .addEventListener("click", addCharacter);
