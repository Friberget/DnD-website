const levels = [
  { level: 1, xpRequired: 0 },
  { level: 2, xpRequired: 200 },
  { level: 3, xpRequired: 430 },
  { level: 4, xpRequired: 695 },
  { level: 5, xpRequired: 1000 },
  { level: 6, xpRequired: 1351 },
  { level: 7, xpRequired: 1755 },
  { level: 8, xpRequired: 2220 },
  { level: 9, xpRequired: 2755 },
  { level: 10, xpRequired: 3370 },
];

const hero = {
  name: "Undrados",
  race: "Dwarf",
  class: "Warrior",
  level: 1,
  xp: 0,
  attack: {
    min: 8,
    max: 11,
  },
  armor: 48,
  maxHealth: 120,
  currentHealth: 120,
  gold: 5,
};

function addExperience(amount) {
  hero.xp += amount;
  recalculateLevel();
  updateHeroStats();
}

function recalculateLevel() {
  let currentLevel = 1;

  for (const lvl of levels) {
    if (hero.xp >= lvl.xpRequired) {
      currentLevel = lvl.level;
    }
  }

  if (currentLevel > hero.level) {
    hero.level++;
  }
}

function getLevelObject(level) {
  return levels.find((l) => l.level === level);
}

function updateHeroStats() {
  const nextLevel = getLevelObject(hero.level + 1);

  // Populera UI med alla hero-stats
  document.getElementById("hero-name").innerText = hero.name;
  document.getElementById("hero-level").innerText = hero.level;
  document.getElementById(
    "hero-xp"
  ).innerText = `${hero.xp} / ${nextLevel.xpRequired}`;

  // Fortsätt att populera övriga stats...
}

function main() {
  updateHeroStats();
  document.getElementById("hero").addEventListener("click", () => {
    addExperience(100);
  });
}

main();
