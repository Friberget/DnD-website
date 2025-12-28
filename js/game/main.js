const levels = [
  {
    level: 1,
    xpRequired: 0,
  },
  {
    level: 2,
    xpRequired: 150,
  },
  {
    level: 3,
    xpRequired: 220,
  },
  {
    level: 4,
    xpRequired: 310,
  },
];

const hero = {
  name: "Undrados",
  race: "Dwarf",
  class: "Warrior",
  level: 3,
  currentXpOnLevel: 30,
  attack: {
    min: 8,
    max: 11,
  },
  armor: 48,
  maxHealth: 120,
  currentHealth: 120,
  gold: 5,
};

function populateHeroStats() {
  // Hitta nuvarande level-objektet i levels arrayen
  const currentLevelObject = levels.find((level) => hero.level == level.level);
  // Hitta nästa level-objektet i levels arrayen
  const nextLevelObject = levels.find((level) => hero.level + 1 == level.level);

  // Populera UI med alla hero-stats
  document.getElementById("hero-name").innerText = hero.name;
  document.getElementById("hero-level").innerText = currentLevelObject.level;
  document.getElementById(
    "hero-xp"
  ).innerText = `${hero.currentXpOnLevel} / ${nextLevelObject.xpRequired}`;
  // Fortsätt att populera övriga stats...
}

function main() {
  populateHeroStats();
}

main();
