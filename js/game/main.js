import { initiate_ui_scale } from "./ui_scale.js";

export const levels = [
  {
    level: 1,
    experienceRequired: 0,
  },
  {
    level: 2,
    experienceRequired: 300,
  },
  {
    level: 3,
    experienceRequired: 450,
  },
  {
    level: 4,
    experienceRequired: 600,
  },
];

export const mainCharacter = {
  name: "Undrados",
  race: "Dwarf",
  class: "Warrior",
  level: 1,
  currentExperience: 0,
  attack: [15, 19],
  armor: 48,
  maxHealth: 120,
  currentHealth: 120,
  gold: 5,
};

export function populateHeroStats() {
  // Leta bland levels arrayen efter objektet där level är mainCharacter.level + 1
  const nextLevel = null;
  // Beräkna erfarenhet som behövs för nästa level
  const experienceNeededForNextLevel = null;

  // Populera UI med alla hero-stats
  document.getElementById("hero-name").innerText = mainCharacter.name;

  // Fortsätt att populera övriga stats...
}

function main() {
  initiate_ui_scale();
  populateHeroStats();
}

main();
