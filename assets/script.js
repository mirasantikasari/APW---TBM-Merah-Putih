// Data program
const programs = [
  {
    id: 1,
    name: "Kelas Anak Kreatif",
    description: "Ruang eksplorasi seni, membaca, dan sains sederhana agar anak berani berkarya.",
    accent: "hsl(221 83% 53%)",
    focus: "Kreativitas",
  },
  {
    id: 2,
    name: "Pemuda Berdaya",
    description: "Pendampingan keterampilan digital, kewirausahaan, dan kepemimpinan untuk remaja.",
    accent: "hsl(142 71% 45%)",
    focus: "Pengembangan Diri",
  },
  {
    id: 3,
    name: "Kajian Rutin Keagamaan",
    description: "Majelis ilmu dan diskusi nilai spiritual untuk menumbuhkan karakter yang santun.",
    accent: "hsl(25 95% 54%)",
    focus: "Spiritual",
  },
  {
    id: 4,
    name: "Aksi Peduli Bencana dan Bersih Pantai",
    description: "Gerakan tanggap darurat dan aksi lingkungan untuk menanamkan kepedulian sosial.",
    accent: "hsl(350 89% 60%)",
    focus: "Aksi Sosial",
  },
  {
    id: 5,
    name: "Pelatihan Kerajinan",
    description: "Workshop kriya tangan, dari daur ulang hingga anyaman, bersama pengrajin lokal.",
    accent: "hsl(267 84% 70%)",
    focus: "Keterampilan",
  },
  {
    id: 6,
    name: "Permainan Tradisional",
    description: "Permainan rakyat seru yang melatih kebugaran, strategi, dan kebersamaan anak-anak.",
    accent: "hsl(199 89% 48%)",
    focus: "Kebersamaan",
  },
];

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const mobilePanel = document.getElementById("mobilePanel");
const programsGrid = document.getElementById("programsGrid");

function setMenu(open) {
  if (!menuBtn || !navbar || !mobilePanel) return;
  const isOpen = !!open;
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  navbar.classList.toggle("menu-open", isOpen);
  mobilePanel.style.display = isOpen ? "block" : "none";
}

function initMenu() {
  if (!menuBtn) return;
  setMenu(false);

  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    setMenu(!expanded);
  });

  // Tutup saat klik di luar navbar
  document.addEventListener("click", (e) => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    if (!expanded) return;
    const clickedInside = navbar && navbar.contains(e.target);
    if (!clickedInside) setMenu(false);
  });

  // Tutup dengan ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
}

function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-scroll]");
    if (!target) return;

    e.preventDefault();
    const href = target.getAttribute("data-scroll");
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });

    setMenu(false);
  });
}

function renderPrograms() {
  if (!programsGrid) return;
  programsGrid.innerHTML = programs
    .map((p, index) => {
      const delay = (index * 0.1).toFixed(1);
      const programNumber = String(index + 1).padStart(2, "0");
      const focus = p.focus || "Program TBM";
      return `
        <article class="card program-card" style="--program-accent:${p.accent};animation-delay:${delay}s" aria-label="${p.name}">
          <div class="program-card__meta">
            <span class="program-number">${programNumber}</span>
          </div>
          <h3 class="program-title">${p.name}</h3>
          <p class="program-desc">${p.description}</p>
        </article>
      `;
    })
    .join("");
}

function initContacts() {
  const waCard = document.getElementById("waCard");
  const igCard = document.getElementById("igCard");

  const whatsappNumber = "083107903592";
  const whatsappMessage = "Halo NusaKarya! Saya tertarik dengan produk Anda.";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = "https://instagram.com/tbm_merah_putih_panda";

  if (waCard) waCard.href = whatsappLink;
  if (igCard) igCard.href = instagramLink;
}

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

initMenu();
initSmoothScroll();
renderPrograms();
initContacts();
initYear();
