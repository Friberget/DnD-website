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
  // Beräkna erfarenhet som behövs för nästa level
  // Leta bland levels arrayen efter objektet där level är mainCharacter.level + 1
  const nextLevel = levels.find((lvl) => lvl.level === mainCharacter.level + 1);
  const experienceNeededForNextLevel = nextLevel.experienceRequired;

  // Populera UI med hero-stats
  document.getElementById("hero-name").innerText = mainCharacter.name;

  document.getElementById("hero-level").innerText = mainCharacter.level;

  document.getElementById(
    "hero-health"
  ).innerText = `${mainCharacter.currentHealth} / ${mainCharacter.maxHealth}`;

  document.getElementById(
    "hero-attack"
  ).innerText = `${mainCharacter.attack[0]} - ${mainCharacter.attack[1]}`;

  document.getElementById("hero-armor").innerText = mainCharacter.armor;

  document.getElementById(
    "hero-experience"
  ).innerText = `${mainCharacter.currentExperience} / ${experienceNeededForNextLevel}`;

  document.getElementById("hero-gold").innerText = mainCharacter.gold;
}

function main() {
  initiate_ui_scale();
  populateHeroStats();
}

main();
