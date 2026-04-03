// ── Products Data ──
const products = [
  {
    img: "catalog-pages/page_06.jpg",
    tag: "Bestseller",
    name: "Dubai Chocolate Bar",
    desc: "The original viral sensation — premium Belgian chocolate filled with pistachio cream and crispy kunafa strands.",
    badge: "Most Popular"
  },
  {
    img: "catalog-pages/page_08.jpg",
    tag: "New",
    name: "Dubai Chocolate Waffle",
    desc: "Crispy waffle meets the iconic Dubai chocolate filling — pistachio cream and kunafa in premium Belgian chocolate.",
    badge: "New"
  },
  {
    img: "catalog-pages/page_13.jpg",
    tag: "Trending",
    name: "Angel Hair Chocolate Bar",
    desc: "Delicate angel hair pastry meets rich Belgian chocolate in this stunning Middle Eastern-inspired creation.",
    badge: "Trending"
  },
  {
    img: "images/product_p30_2.jpg",
    tag: "Limited Edition",
    name: "Raspberry White Chocolate",
    desc: "Vibrant raspberry flavour with pistachio cream and cotton candy, wrapped in smooth Belgian white chocolate.",
    badge: "Fan Favourite"
  },
  {
    img: "catalog-pages/page_21.jpg",
    tag: "New Flavour",
    name: "Matcha Strawberry Bar",
    desc: "A unique fusion of Japanese matcha and strawberry cheesecake cream in premium Belgian chocolate.",
    badge: "New"
  },
  {
    img: "catalog-pages/page_16.jpg",
    tag: "Indulgent",
    name: "Cheesecake Chocolate Bar",
    desc: "Creamy cheesecake filling encased in rich Belgian chocolate — a dessert lover's dream.",
    badge: "New"
  },
  {
    img: "catalog-pages/page_07.jpg",
    tag: "Gifting",
    name: "Dubai Chocolate Truffles",
    desc: "Handcrafted Belgian chocolate truffles with the iconic Dubai flavour profile. Perfect for gifting.",
    badge: "Gift Ready"
  },
  {
    img: "catalog-pages/page_29.jpg",
    tag: "New",
    name: "Strawberry Sticks",
    desc: "Delicious Belgian chocolate sticks with a sweet strawberry cream filling.",
    badge: "New"
  },
  {
    img: "catalog-pages/page_30.jpg",
    tag: "New",
    name: "Orange Sticks",
    desc: "Premium Belgian chocolate sticks with a zesty orange cream filling.",
    badge: "New"
  },
  {
    img: "catalog-pages/page_24.jpg",
    tag: "Snack",
    name: "Tiny Bites",
    desc: "Mini Belgian chocolate bites in a range of flavours — milk, dark, salted caramel, peanut butter and more.",
    badge: "Snack Size"
  }
];

// ── Render Products ──
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='🍫'"/>
      </div>
      <div class="product-body">
        <span class="product-tag">${p.tag}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <span class="product-badge">${p.badge}</span>
      </div>
    </div>
  `).join('');
}

// ── Mobile Menu ──
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// ── Navbar scroll effect ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(201,168,76,0.35)';
  } else {
    nav.style.borderBottomColor = 'rgba(201,168,76,0.2)';
  }
});

// ── Scroll reveal ──
function revealOnScroll() {
  const els = document.querySelectorAll('.product-card, .why-card, .choc-card, .about-text, .contact-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ── Contact form ──
function submitForm(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = '✓ Thank you! We will be in touch shortly.';
  e.target.reset();
  setTimeout(() => msg.textContent = '', 5000);
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  if (typeof renderCatalog === 'function') renderCatalog();
  revealOnScroll();
});
