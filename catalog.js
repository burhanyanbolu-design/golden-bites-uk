// ── Catalog Pages ──
const totalPages = 37;
let currentPage = 1;

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;
  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    const num = String(i).padStart(2, '0');
    html += `
      <div class="catalog-thumb" onclick="openLightbox(${i})">
        <img src="catalog-pages/page_${num}.jpg" alt="Catalog page ${i}" loading="lazy"/>
        <div class="page-num">PAGE ${i}</div>
      </div>`;
  }
  grid.innerHTML = html;
}

function openLightbox(pageNum) {
  currentPage = pageNum;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  const num = String(currentPage).padStart(2, '0');
  document.getElementById('lightbox-img').src = `catalog-pages/page_${num}.jpg`;
  document.getElementById('lightbox-counter').textContent = `${currentPage} / ${totalPages}`;
}

function closeLightbox(e) {
  if (e.target === document.getElementById('lightbox')) closeLightboxBtn();
}

function closeLightboxBtn() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  currentPage = ((currentPage - 1 + dir + totalPages) % totalPages) + 1;
  updateLightbox();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowRight') lightboxNav(1);
  if (e.key === 'ArrowLeft')  lightboxNav(-1);
  if (e.key === 'Escape')     closeLightboxBtn();
});
