const products = [
  { id: 'ribcage-tee', title: 'Ribcage Bloom All-Over Tee', price: 32.99, category: 'new', img: 'images/p50-sky-m-v12-hs.webp', desc: 'All-over print tee with an inked ribcage and wildflowers.' },
  { id: 'braided-tee', title: 'Braided Wind All-Over Tee', price: 32.99, category: 'new', img: 'images/p52-sky-m-v12-hs.webp', desc: 'Soft flowing braided wind pattern.' },
  { id: 'lily-tee', title: 'Lily Bouquet All-Over Tee', price: 32.99, category: 'new', img: 'images/p54-sky-m-v12-hs.webp', desc: 'Lily bouquet all-over print.' },
  { id: 'wildflower-tee', title: 'Wildflower Line Fitted Tee', price: 22.99, category: 'women', img: 'images/p01-white-m-v10-hs.webp', desc: 'Fitted tee with wildflower line print.' },
  { id: 'leggings', title: 'Ditsy Garden Leggings', price: 38.99, category: 'women', img: 'images/p05-pink-m-v12-hs.webp', desc: 'High-waisted leggings with delicate floral print.' },
  { id: 'mug', title: 'Lila Ridge Badge Mug 11oz', price: 19.99, category: 'home', img: 'images/p19-white-m-v7-c14.webp', desc: 'Ceramic mug with Lila Ridge badge.' },
  { id: 'tumbler', title: 'Lila Ridge Tumbler with Straw', price: 28.99, category: 'home', img: 'images/p20-pink-m-sm-v7-c14.webp', desc: 'Insulated tumbler with straw.' },
  { id: 'tote', title: 'Lila Ridge Canvas Tote', price: 21.99, category: 'home', img: 'images/p11-natural-m-v7-hs.webp', desc: 'Sturdy canvas tote with script logo.' },
  { id: 'hoodie', title: 'Slow Mornings Unisex Hoodie', price: 39.99, category: 'men', img: 'images/p27-pink-m-v10-hs.webp', desc: 'Soft unisex hoodie.' },
  { id: 'hat', title: 'Lila Ridge Badge Dad Hat', price: 27.99, category: 'men', img: 'images/p18-pink-m-v7-hs.webp', desc: 'Dad hat with embroidered badge.' }
];

function renderProducts(list) {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = list.map(p => `
    <a href="/product.html?id=${p.id}" class="card">
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p class="price">$${p.price.toFixed(2)}</p>
    </a>
  `).join('');
}

function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(p => 
    p.title.toLowerCase().includes(q) || 
    p.desc.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}

document.getElementById('search').addEventListener('input', (e) => {
  renderProducts(searchProducts(e.target.value));
});

renderProducts(products);
