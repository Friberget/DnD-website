const levels = [
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

const hero = {
  name: "Undrados",
  race: "Dwarf",
  class: "Warrior",
  level: 2,
  currentExperience: 120,
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
  // Leta bland levels arrayen efter objektet där level är hero.level + 1
  let experienceNeededForNextLevel = null;
  levels.forEach((objectInArray) => {
    if (objectInArray.level == hero.level + 1) {
      experienceNeededForNextLevel = objectInArray.experienceRequired;
    }
  });
  // Beräkna erfarenhet som behövs för nästa level

  // Populera UI med alla hero-stats
  document.getElementById("hero-name").innerText = hero.name;
  document.getElementById(
    "hero-xp"
  ).innerText = `${hero.currentExperience} / ${experienceNeededForNextLevel}`;
  // Fortsätt att populera övriga stats...
}

function main() {
  populateHeroStats();
}

main();
