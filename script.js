const menuItems = [
  {
    name: 'Chicken Biriyani',
    price: '$12.99',
    image: 'assets/chicken-biriyani.jpeg',
  },
  {
    name: 'Beef Biriyani',
    price: '$14.49',
    image: 'assets/beef-biriyani.jpeg',
  },
  {
    name: 'Ghee Rice & Beef Curry',
    price: '$13.99',
    image: 'assets/ghee-rice-beef-curry.jpeg',
  },
  {
    name: 'Fried Rice',
    price: '$10.99',
    image: 'assets/fried-rice.jpeg',
  },
  {
    name: 'Veg Biriyani',
    price: '$9.99',
    image: 'assets/veg-biriyani.jpeg',
  },
];
const menuContainer = document.getElementById('menu-container');
const cartCountElement = document.getElementById('cart-count');
let cartCount = 0;
function renderMenu() {
  menuContainer.innerHTML = menuItems
    .map(
      (item) => `
    <div class="menu-item">
        <div style="overflow: hidden;">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="item-details">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button class="add-btn" onclick="addToCart('${item.name}')">Add to Cart</button>
        </div>
    </div>
  `
    )
    .join('');
}
function addToCart(itemName) {
  cartCount++;
  cartCountElement.textContent = cartCount;
  // Visual feedback
  const btn = event.target;
  const originalText = btn.textContent;
  btn.textContent = 'Added!';
  btn.style.backgroundColor = '#fff';
  btn.style.color = '#ff6b35';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.backgroundColor = '';
    btn.style.color = '';
  }, 1000);
}
document.addEventListener('DOMContentLoaded', renderMenu);
