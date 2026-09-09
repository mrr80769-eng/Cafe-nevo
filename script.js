/
function formatPrice(value) {
  if (value === null) {
    return `<span class="price missing">قیمت اعلام نشده</span>`;
  }
  return `<span class="price">${value.toLocaleString("fa-IR")}٬۰۰۰ تومان</span>`;
}

/* ================= CATEGORIES ================= */
function renderCategories(active) {
  categories.innerHTML = categoryLabels
    .map(([key, label]) => {
      return `<button class="category ${key === active ? "active" : ""}" data-category="${key}">${label}</button>`;
    })
    .join("");

  categories.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
      renderMenu(button.dataset.category);
    });
  });
}

/* ================= RENDER MENU ================= */
function renderMenu(key) {
  const group = menu[key];
  if (!group) return;

  categoryTitle.textContent = group.title;
  categoryEnglish.textContent = group.en;

  renderCategories(key);

  products.innerHTML = group.items
    .map(([name, price]) => {
      return `<article class="product">
        <div class="product-info">
          <p class="product-name">${name}</p>
        </div>
        ${formatPrice(price)}
      </article>`;
    })
    .join("");
}

/* ================= START ================= */
renderMenu("hot");
