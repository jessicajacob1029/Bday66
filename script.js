const messages = [
  "Happy birthday, Patts. Your love is the heartbeat of our family.",
  "Thank you for every warm hug and gentle word.",
  "Your smile has always made everything feel okay.",
  "You make our home feel full of peace and love.",
  "Patts, your kindness has shaped generations.",
  "You are the soft place our hearts always return to.",
  "Thank you for every prayer you whispered for us.",
  "Your stories are treasures I will keep forever.",
  "You are grace, strength, and love all in one.",
  "Every moment with you feels like a blessing.",
  "Your laughter makes every room brighter.",
  "Thank you for teaching us love through your actions.",
  "You always know how to make us feel cared for.",
  "Patts, your love is a gift that never fades.",
  "You are the heart of every family gathering.",
  "Thank you for every meal made with love.",
  "You made childhood magical in the sweetest ways.",
  "Your wisdom guides us even on hard days.",
  "You are proof that love can be gentle and strong.",
  "Your hugs still feel like home.",
  "Thank you for believing in us every single day.",
  "You have the warmest heart I have ever known.",
  "Patts, your love has always been unconditional.",
  "You make ordinary moments feel special.",
  "Every family tradition is brighter because of you.",
  "You are one of my greatest blessings.",
  "Thank you for being patient and understanding.",
  "You have always loved us without limits.",
  "Your strength inspires me more than words can say.",
  "You are the sweetest part of our family history.",
  "Thank you for all the little things you do.",
  "Your care is felt in every corner of our lives.",
  "You are beautiful inside and out, Patts.",
  "Your love has carried us through so much.",
  "Thank you for every bedtime story and gentle reminder.",
  "You are the calm in every storm.",
  "Your life is a lesson in compassion.",
  "Patts, you make love look easy.",
  "Thank you for always making us feel welcome.",
  "Your voice brings comfort to my heart.",
  "You have given us a legacy of love.",
  "Every birthday of yours is a celebration of grace.",
  "Thank you for your endless generosity.",
  "You are the sunshine of our family.",
  "Your love has been my safest place.",
  "Thank you for holding our family together with care.",
  "You are a true gift from God.",
  "Your presence makes every day softer.",
  "You have a way of making everyone feel seen.",
  "Thank you for your faith, courage, and kindness.",
  "You are loved more than you know.",
  "Patts, your heart is pure gold.",
  "Thank you for showing us what real love looks like.",
  "Your patience has taught me so much.",
  "You have always put family first.",
  "Your joy is contagious and beautiful.",
  "Thank you for every word of encouragement.",
  "You are one of life's greatest treasures.",
  "Your love leaves a mark that lasts forever.",
  "Thank you for being my guide and my comfort.",
  "You make life feel warmer and better.",
  "Your heart has made our world gentler.",
  "Patts, you are deeply cherished today and always.",
  "Thank you for loving us with all your heart.",
  "Wishing you health, joy, and peace this year.",
  "Happy birthday, Patts. We love you endlessly."
];

const slideCount = document.getElementById("slideCount");
const slideText = document.getElementById("slideText");
const nextSlideBtn = document.getElementById("nextSlideBtn");
const sparkles = document.getElementById("sparkles");
const hearts = document.getElementById("hearts");
const confetti = document.getElementById("confetti");
const openLetterBtn = document.getElementById("openLetterBtn");
const envelopeIntro = document.getElementById("envelopeIntro");
const noteBlock = document.getElementById("noteBlock");
const typedNote = document.getElementById("typedNote");
const blessingsSection = document.getElementById("blessingsSection");
const blessingsNumber = document.getElementById("blessingsNumber");

let index = 0;
let confettiTriggered = false;
let noteStarted = false;
let blessingsAnimated = false;

function renderSlide() {
  slideCount.textContent = `Slide ${index + 1} / ${messages.length}`;
  slideText.textContent = messages[index];
}

function triggerConfetti() {
  if (!confetti || confettiTriggered) return;

  confettiTriggered = true;
  const colors = ["#ff6fa7", "#ffc0d9", "#f8a3bf", "#fff", "#ffd7e8"];

  for (let i = 0; i < 120; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--fall", `${1.8 + Math.random() * 1.5}s`);
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    confetti.appendChild(piece);
  }

  setTimeout(() => {
    confetti.innerHTML = "";
  }, 2800);
}

nextSlideBtn.addEventListener("click", () => {
  index = (index + 1) % messages.length;
  renderSlide();

  if (index === messages.length - 1) {
    triggerConfetti();
  }
});

function spawnSparkles(total = 28) {
  if (!sparkles) return;

  for (let i = 0; i < total; i += 1) {
    const dot = document.createElement("span");
    dot.className = "sparkle";
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.setProperty("--d", `${2.8 + Math.random() * 3.6}s`);
    dot.style.setProperty("--delay", `${Math.random() * 4}s`);
    sparkles.appendChild(dot);
  }
}

function spawnHearts(total = 18) {
  if (!hearts) return;

  for (let i = 0; i < total; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = "❤";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.setProperty("--size", `${34 + Math.random() * 24}px`);
    heart.style.setProperty("--time", `${9 + Math.random() * 7}s`);
    heart.style.setProperty("--delay", `${Math.random() * 7}s`);
    hearts.appendChild(heart);
  }
}

function startTypewriterNote() {
  if (!typedNote || noteStarted) return;

  noteStarted = true;
  const note = typedNote.dataset.note || "";
  const lines = note
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter(Boolean);

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) return;

    const lineEl = document.createElement("span");
    lineEl.className = "note-line";
    typedNote.appendChild(lineEl);

    const chars = lines[lineIndex];
    let charIndex = 0;

    const charTimer = setInterval(() => {
      lineEl.textContent += chars[charIndex];
      charIndex += 1;

      if (charIndex >= chars.length) {
        clearInterval(charTimer);
        lineIndex += 1;
        setTimeout(typeLine, 220);
      }
    }, 32);
  }

  typeLine();
}

function setupNoteObserver() {
  if (!noteBlock || !typedNote) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTypewriterNote();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(noteBlock);
}

function setupBlessingsCounter() {
  if (!blessingsSection || !blessingsNumber || blessingsAnimated) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || blessingsAnimated) return;

        blessingsAnimated = true;
        const target = 66;
        const duration = 1400;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const value = Math.floor(progress * target);
          blessingsNumber.textContent = String(value);

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            blessingsNumber.textContent = String(target);
          }
        }

        requestAnimationFrame(tick);
        observer.disconnect();
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(blessingsSection);
}

function openLetter() {
  document.body.classList.add("letter-open");
  document.body.classList.remove("letter-closed");

  setTimeout(() => {
    if (envelopeIntro) envelopeIntro.classList.add("hidden");
  }, 900);
}

if (openLetterBtn) {
  openLetterBtn.addEventListener("click", openLetter);
}

document.querySelectorAll(".photo-slot img, .main-photo img").forEach((img) => {
  img.addEventListener("error", () => {
    const frame = img.closest(".photo-slot, .main-photo");
    if (frame) frame.style.display = "none";
  });
});

renderSlide();
spawnSparkles();
spawnHearts();
setupNoteObserver();
setupBlessingsCounter();
