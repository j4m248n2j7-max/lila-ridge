const products = [
  { id: 'ribcage-tee', title: 'Ribcage Bloom All-Over Tee', price: 32.99, category: 'new', img: 'images/p50-sky-m-v12-hs.webp' },
  { id: 'braided-tee', title: 'Braided Wind All-Over Tee', price: 32.99, category: 'new', img: 'images/p52-sky-m-v12-hs.webp' },
  { id: 'lily-tee', title: 'Lily Bouquet All-Over Tee', price: 32.99, category: 'new', img: 'images/p54-sky-m-v12-hs.webp' },
  { id: 'wildflower-tee', title: 'Wildflower Line Fitted Tee', price: 22.99, category: 'women', img: 'images/p01-white-m-v10-hs.webp' },
  { id: 'leggings', title: 'Ditsy Garden Leggings', price: 38.99, category: 'women', img: 'images/p05-pink-m-v12-hs.webp' },
  { id: 'mug', title: 'Lila Ridge Badge Mug 11oz', price: 19.99, category: 'home', img: 'images/p19-white-m-v7-c14.webp' },
  { id: 'tumbler', title: 'Lila Ridge Tumbler with Straw', price: 28.99, category: 'home', img: 'images/p20-pink-m-sm-v7-c14.webp' },
  { id: 'tote', title: 'Lila Ridge Canvas Tote', price: 21.99, category: 'home', img: 'images/p11-natural-m-v7-hs.webp' },
  { id: 'hoodie', title: 'Slow Mornings Unisex Hoodie', price: 39.99, category: 'men', img: 'images/p27-pink-m-v10-hs.webp' },
  { id: 'hat', title: 'Lila Ridge Badge Dad Hat', price: 27.99, category: 'men', img: 'images/p18-pink-m-v7-hs.webp' },
  { id: 'kids-tee', title: 'Retro Bloom Kids Classic Tee', price: 18.99, category: 'kids', img: 'images/kids-tee.webp' },
  { id: 'kids-hoodie', title: 'Wildflower Line Kids Hoodie', price: 36.99, category: 'kids', img: 'images/kids-hoodie.webp' }
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

document.getElementById('search').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase();
  renderProducts(q ? products.filter(p => p.title.toLowerCase().includes(q)) : products);
});

renderProducts(products);
