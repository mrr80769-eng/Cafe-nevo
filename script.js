const menu = {
  hot: {
    title: "بار گرم",
    en: "HOT BAR",
    items: [
      { name: "ماچا", price: 280, img: "images/matcha.jpg" },
      { name: "تارو", price: 328, img: "images/taro.jpg" },
      { name: "اسپرولینا", price: 317, img: "images/spirulina.jpg" },
      { name: "اوبه", price: 320, img: "images/ube.jpg" },
      { name: "کرک", price: 197, img: "images/karak.jpg" },
      { name: "ماسالا", price: 228, img: "images/masala.jpg" },
      { name: "هات چاکلت", price: 222, img: "images/hot-chocolate.jpg" },
      { name: "دمنوش آفتاب", price: 195, img: "images/aftab-tea.jpg" },
      { name: "دمنوش آفرینش", price: 238, img: "images/afarinesh-tea.jpg" },
      { name: "دمنوش ویژه نوو", price: 148, img: "images/nevo-tea.jpg" },
      { name: "چایی (دو نفره)", price: 138, img: "images/tea.jpg" },
      { name: "شیر کاکائو با خامه", price: 248, img: "images/cocoa-cream.jpg" },
      { name: "کارامل ماکیاتو", price: 248, img: "images/caramel-macchiato.jpg" }
    ]
  },
  cold: {
    title: "بار سرد",
    en: "COLD BAR",
    items: [
      { name: "بلک دایموند", price: 297, img: "images/black-diamond.jpg" },
      { name: "فارست", price: 287, img: "images/forest.jpg" },
      { name: "رد وایو", price: 278, img: "images/red-wave.jpg" },
      { name: "موهیتو", price: 248, img: "images/mojito.jpg" },
      { name: "لیموناد", price: 228, img: "images/lemonade.jpg" },
      { name: "ولوت پینک", price: 294, img: "images/velvet-pink.jpg" },
      { name: "میدنایت بلو", price: 287, img: "images/midnight-blue.jpg" },
      { name: "رد موهیتو", price: 378, img: "images/red-mojito.jpg" }
    ]
  },
  espresso: {
    title: "بر پایه اسپرسو",
    en: "ESPRESSO BASED",
    items: [
      { name: "اسپرسو سینگل 70/30", price: 90, img: "images/espresso-single.jpg" },
      { name: "اسپرسو دبل 70/30", price: 130, img: "images/espresso-double.jpg" },
      { name: "اسپرسو سینگل 50/50", price: 90, img: "images/espresso-single.jpg" },
      { name: "اسپرسو دبل 50/50", price: 130, img: "images/espresso-double.jpg" },
      { name: "اسپرسو سینگل ۱۰۰٪ عربیکا", price: 110, img: "images/espresso-arabica.jpg" },
      { name: "اسپرسو دبل ۱۰۰٪ عربیکا", price: 150, img: "images/espresso-arabica.jpg" },
      { name: "کوکونات", price: 268, img: "images/coconut.jpg" },
      { name: "آفوگاتو", price: 248, img: "images/affogato.jpg" },
      { name: "لته", price: 225, img: "images/latte.jpg" },
      { name: "موکا", price: 238, img: "images/mocha.jpg" },
      { name: "آیس موکا", price: 248, img: "images/iced-mocha.jpg" },
      { name: "آیس لته", price: 235, img: "images/iced-latte.jpg" },
      { name: "کاپوچینو", price: 226, img: "images/cappuccino.jpg" },
      { name: "کورتادو", price: 148, img: "images/cortado.jpg" },
      { name: "کن پانا", price: 155, img: "images/con-panna.jpg" }
    ]
  },
  iced: {
    title: "آیس تی",
    en: "ICED TEA",
    items: [
      { name: "آیس ماچا", price: 290, img: "images/iced-matcha.jpg" },
      { name: "آیس اوبه", price: 330, img: "images/iced-ube.jpg" },
      { name: "آیس اسپرولینا", price: 327, img: "images/iced-spirulina.jpg" },
      { name: "آیس تارو", price: 338, img: "images/iced-taro.jpg" }
    ]
  },
  shake: {
    title: "شیک",
    en: "SHAKE",
    items: [
      { name: "کره گردو", price: 380, img: "images/walnut-shake.jpg" },
      { name: "شکلات", price: 350, img: "images/chocolate-shake.jpg" },
      { name: "اوریو", price: 380, img: "images/oreo-shake.jpg" },
      { name: "لوتوس", price: 380, img: "images/lotus-shake.jpg" },
      { name: "نوتلا", price: 380, img: "images/nutella-shake.jpg" },
      { name: "توت فرنگی", price: 350, img: "images/strawberry-shake.jpg" },
      { name: "وانیل", price: 350, img: "images/vanilla-shake.jpg" },
      { name: "بادام زمینی", price: 380, img: "images/peanut-shake.jpg" },
      { name: "پسته", price: 428, img: "images/pistachio-shake.jpg" }
    ]
  },
  breakfast: {
    title: "صبحانه",
    en: "BREAKFAST",
    items: [
      { name: "نیمرو", price: 188, img: "images/sunny-egg.jpg" },
      { name: "سوسیس تخم مرغ", price: 237, img: "images/sausage-egg.jpg" },
      { name: "سینی ایرانی", price: 470, img: "images/iranian-plate.jpg" },
      { name: "املت", price: 237, img: "images/omelette.jpg" },
      { name: "تست سوسیس تخم مرغ", price: 285, img: "images/sausage-toast.jpg" },
      { name: "املت فرانسوی", price: 370, img: "images/french-omelette.jpg" },
      { name: "تست کره بادام زمینی", price: 270, img: "images/peanut-toast.jpg" },
      { name: "املت قارچ پنیر", price: 288, img: "images/mushroom-omelette.jpg" },
      { name: "اوتمیل", price: 295, img: "images/oatmeal.jpg" }
    ]
  },
  cake: {
    title: "کیک‌ها",
    en: "CAKES & DESSERTS",
    items: [
      { name: "کروسان بستنی", price: null, img: "images/croissant-ice.jpg" },
      { name: "کوکی", price: null, img: "images/cookie.jpg" },
      { name: "کیک سه شیر", price: null, img: "images/tres-leches.jpg" },
      { name: "کیک خیس", price: null, img: "images/wet-cake.jpg" },
      { name: "کیک سن سباستین", price: null, img: "images/san-sebastian.jpg" },
      { name: "کیک پای سیب / آلبالو", price: null, img: "images/apple-pie.jpg" },
      { name: "تیرامیسو", price: null, img: "images/tiramisu.jpg" }
    ]
  },
  sandwich: {
    title: "ساندویچ‌ها",
    en: "SANDWICHES",
    items: []
  },
  hookah: {
    title: "قلیان‌ها",
    en: "HOOKAH",
    items: [
      { name: "آدامس نعنا", price: 350, img: "images/mint-gum.jpg" },
      { name: "هندونه نعنا", price: 350, img: "images/watermelon-mint.jpg" },
      { name: "نعنا یخ", price: 350, img: "images/ice-mint.jpg" },
      { name: "لیمو نعنا", price: 350, img: "images/lemon-mint.jpg" },
      { name: "دژاوو", price: 350, img: "images/deja-vu.jpg" },
      { name: "شب های مسکو", price: 350, img: "images/moscow-nights.jpg" },
      { name: "آدامس دارچین", price: 350, img: "images/cinnamon-gum.jpg" },
      { name: "لاو", price: 350, img: "images/love.jpg" },
      { name: "هندونه یخ", price: 350, img: "images/ice-watermelon.jpg" },
      { name: "بلوبری", price: 350, img: "images/blueberry.jpg" },
      { name: "دوسیب آلبالو", price: 350, img: "images/double-apple.jpg" }
    ]
  }
};

const categories = document.getElementById("categories");
const products = document.getElementById("products");
const categoryTitle = document.getElementById("categoryTitle");
const categoryEnglish = document.getElementById("categoryEnglish");
const backBtn = document.getElementById("backToCategories");

function formatPrice(value) {
  if (value === null || value === undefined) {
    return `<span class="price missing">قیمت اعلام نشده</span>`;
  }
  return `<span class="price">${value.toLocaleString("fa-IR")}٬۰۰۰ تومان</span>`;
}

function renderCategories(active) {
  categories.querySelectorAll(".menu-category").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === active);
    btn.onclick = () => renderMenu(btn.dataset.category);
  });
}

function renderMenu(key) {
  const group = menu[key];
  if (!group) return;

  categoryTitle.textContent = group.title;
  categoryEnglish.textContent = group.en;
  renderCategories(key);

  if (group.items.length === 0) {
    products.innerHTML = `<div class="empty-products">به زودی آیتم‌های این بخش اضافه می‌شوند ✨</div>`;
  } else {
    products.innerHTML = group.items.map(item => `
      <article class="product">
        <div class="product-image" ${item.img ? `style="background-image: url('${item.img}')"` : ""}></div>
        <div class="product-info">
          <p class="product-name">${item.name}</p>
        </div>
        ${formatPrice(item.price)}
      </article>
    `).join("");
  }

  const section = document.getElementById("menuProducts");
  if (section) {
    const top = section.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top, behavior: "smooth" });
  }

  if (backBtn) backBtn.classList.add("visible");
}

if (backBtn) {
  backBtn.onclick = () => {
    const cat = document.getElementById("categories");
    if (cat) {
      const top = cat.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
}

renderMenu("hot");
