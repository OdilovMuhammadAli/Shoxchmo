// ============ GAMES DATA ============
const gamesData = [
  {
    id: 1,
    title: "Counter-Strike 2 (CS2)",
    genre: "shooter",
    emoji: "🎮",
    description:
      "Counter-Strike 2 (CS2) — это многопользовательский тактический шутер от Valve, который стал 5-й игрой в серии Counter-Strike. Игра была анонсирована 22 марта 2023 года и выпущена 27 сентября 2023 года, заменив Global Offensive. CS2 отличается крупными техническими улучшениями, включая переход с Source на Source 2, улучшенную графику и новую клиент-серверную архитектуру  ",
    developer: "Valve",
    release: "2023",
    platform: "PC,Mobile",
    rating: 8.2,
    category: "shooter",
  },
  {
    id: 2,
    title: "Super Mario 3D Land",
    genre: "Platform game series",
    emoji: "🪅",
    description:
      "Super Mario 3D Land — это первая игра из серии Mario, локализованная на нидерландский, португальский и русский, не считая кроссовер Mario & Sonic at the Olympic Winter Games, локализованный на нидерландский.",
    developer: "Nintendo",
    release: "2011",
    platform: "PC, PlayStation, Xbox",
    rating: 9.2,
    category: "race",
  },
  {
    id: 3,
    title: "sonic the hedgehog",
    genre: "vay bla",
    emoji: "🏎️",
    description: "",
    developer: "Bethesda Game Studios",
    release: "2023",
    platform: "Xbox,Mobile, PC",
    rating: 8.9,
    category: "sports",
  },
  {
    id: 4,
    title: "Call of Duty Modern Warfare",
    genre: "action",
    emoji: "🎯",
    description:
      "Experience a new level of intense and visceral combat with cutting-edge gameplay and graphics.",
    developer: "Infinity Ward",
    release: "2024",
    platform: "PC, Console",
    rating: 8.5,
    category: "puzzle",
  },
  // {
  //   id: 5,
  //   title: "Chess Master 3D",
  //   genre: "strategy",
  //   emoji: "♟️",
  //   description:
  //     "Master the ancient game of chess with stunning 3D graphics and AI opponents.",
  //   developer: "Strategic Games Inc",
  //   release: "2024",
  //   platform: "PC, Mobile, Console",
  //   rating: 9.0,
  //   category: "strategy",
  // },
  // {
  //   id: 6,
  //   title: "Portal Quest",
  //   genre: "puzzle",
  //   emoji: "🌀",
  //   description:
  //     "Solve mind-bending puzzles using advanced portal technology. Are you smart enough to escape?",
  //   developer: "Puzzle Genius",
  //   release: "2023",
  //   platform: "PC, Console, Mobile",
  //   rating: 8.8,
  //   category: "puzzle",
  // },
  // {
  //   id: 7,
  //   title: "NBA 2K25",
  //   genre: "sports",
  //   emoji: "🏀",
  //   description:
  //     "Feel the intensity of professional basketball with realistic gameplay and stunning visuals.",
  //   developer: "2K Sports",
  //   release: "2024",
  //   platform: "PC, PlayStation, Xbox",
  //   rating: 8.4,
  //   category: "sports",
  // },
  // {
  //   id: 8,
  //   title: "Civilization VII",
  //   genre: "action",
  //   emoji: "🏛️",
  //   description:
  //     "Build an empire and guide your civilization through the ages in this award-winning strategy game.",
  //   developer: "Firaxis Games",
  //   release: "2024",
  //   platform: "PC, Console",
  //   rating: 9.1,
  //   category: "Action",
  // },
];

// ============ VARIABLES ============
let currentFilter = "all";
let allGames = [...gamesData];

// ============ DOM ELEMENTS ============
const gamesGrid = document.getElementById("gamesGrid");
const filterBtns = document.querySelectorAll(".filter-btn");
const gameModal = document.getElementById("gameModal");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");

// ============ RENDER GAMES ============
function renderGames(games) {
  gamesGrid.innerHTML = "";

  games.forEach((game, index) => {
    const gameCard = document.createElement("div");
    gameCard.className = "game-card";
    gameCard.style.animationDelay = `${index * 0.1}s`;

    const rating = "⭐".repeat(Math.floor(game.rating / 2));

    gameCard.innerHTML = `
                    <div class="game-image">${game.emoji}</div>
                    <div class="game-info">
                        <div class="game-genre">${game.genre.toUpperCase()}</div>
                        <div class="game-title">${game.title}</div>
                        <div class="game-description">${game.description.substring(
                          0,
                          80
                        )}...</div>
                        <div class="game-footer">
                            <div class="game-rating">${rating}</div>
                            <button class="play-btn-small" onclick="openGameModal('${
                              game.id
                            }')">Details</button>
                        </div>
                    </div>
                `;

    gamesGrid.appendChild(gameCard);
  });
}

// ============ FILTER GAMES ============
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;

    const filtered =
      currentFilter === "all"
        ? gamesData
        : gamesData.filter((game) => game.category === currentFilter);

    renderGames(filtered);
  });
});

// ============ MODAL FUNCTIONS ============
function openGameModal(gameId) {
  const game = gamesData.find((g) => g.id == gameId);
  if (!game) return;

  document.getElementById("modalGameTitle").textContent = game.title;
  document.getElementById("modalGameEmoji").textContent = game.emoji;
  document.getElementById("modalGameDesc").textContent = game.description;
  document.getElementById("modalGenre").textContent = game.genre.toUpperCase();
  document.getElementById("modalDeveloper").textContent = game.developer;
  document.getElementById("modalRelease").textContent = game.release;
  document.getElementById("modalPlatform").textContent = game.platform;
  document.getElementById("modalRating").textContent = `${game.rating}/10`;

  gameModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  gameModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

gameModal.addEventListener("click", (e) => {
  if (e.target === gameModal) closeModal();
});

// ============ TOP GAMES ============
function renderTopGames() {
  const topGamesList = document.getElementById("topGamesList");
  const sorted = [...gamesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  topGamesList.innerHTML = sorted
    .map(
      (game, index) => `
                <div class="top-game-item" onclick="openGameModal('${
                  game.id
                }')">
                    <div class="top-game-rank">#${index + 1}</div>
                    <div class="top-game-name">${game.title}</div>
                    <div class="top-game-stats">
                        <span>⭐ ${game.rating}/10</span>
                        <span>${game.emoji}</span>
                    </div>
                </div>
            `
    )
    .join("");
}

// ============ SMOOTH SCROLL ============
function scrollToGames() {
  document.getElementById("games").scrollIntoView({ behavior: "smooth" });
}

// ============ MOBILE MENU ============
mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile menu when link is clicked
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ============ PROFILE ICON ============
document.getElementById("profileIcon").addEventListener("click", () => {
  alert("Profile feature coming soon! 👤");
});

// ============ INITIALIZE ============
renderGames(gamesData);
renderTopGames();

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});
