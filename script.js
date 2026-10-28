const products = [
  { id: 'ribcage-tee', title: 'Ribcage Bloom All-Over Tee', price: 32.99, img: 'images/p50-sky-m-v12-hs.webp' },
  { id: 'braided-tee', title: 'Braided Wind All-Over Tee', price: 32.99, img: 'images/p52-sky-m-v12-hs.webp' },
  { id: 'lily-tee', title: 'Lily Bouquet All-Over Tee', price: 32.99, img: 'images/p54-sky-m-v12-hs.webp' },
  { id: 'wildflower-tee', title: 'Wildflower Line Fitted Tee', price: 22.99, img: 'images/p01-white-m-v10-hs.webp' },
  { id: 'leggings', title: 'Ditsy Garden Leggings', price: 38.99, img: 'images/p05-pink-m-v12-hs.webp' },
  { id: 'mug', title: 'Lila Ridge Badge Mug 11oz', price: 19.99, img: 'images/p19-white-m-v7-c14.webp' },
  { id: 'tumbler', title: 'Lila Ridge Tumbler with Straw', price: 28.99, img: 'images/p20-pink-m-sm-v7-c14.webp' },
  { id: 'tote', title: 'Lila Ridge Canvas Tote', price: 21.99, img: 'images/p11-natural-m-v7-hs.webp' },
  { id: 'hoodie', title: 'Slow Mornings Unisex Hoodie', price: 39.99, img: 'images/p27-pink-m-v10-hs.webp' },
  { id: 'hat', title: 'Lila Ridge Badge Dad Hat', price: 27.99, img: 'images/p18-pink-m-v7-hs.webp' },
  { id: 'kids-tee', title: 'Retro Bloom Kids Classic Tee', price: 18.99, img: 'images/kids-tee.webp' },
  { id: 'kids-hoodie', title: 'Wildflower Line Kids Hoodie', price: 36.99, img: 'images/kids-hoodie.webp' },
  { id: 'duffel', title: 'Ribcage Bloom Duffel Bag', price: 69.99, img: 'images/duffel.webp' },
  { id: 'backpack', title: 'Ditsy Garden Backpack', price: 54.99, img: 'images/backpack.webp' },
  { id: 'calendar', title: 'Sun Over the Ridge Desk Calendar', price: 24.99, img: 'images/calendar.webp' }
];

function render(list) {
  document.getElementById('product-grid').innerHTML = list.map(p => `
    <a href="/product.html?id=${p.id}" class="card">
      <img src="${p.img}" alt="${p.title}">
      <div class="info">
        <h3>${p.title}</h3>
        <p>$${p.price.toFixed(2)}</p>
      </div>
    </a>
  `).join('');
}

document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  render(q ? products.filter(p => p.title.toLowerCase().includes(q)) : products);
});

render(products);
