const menu = {
  hot: {
    title: "بار گرم",
    en: "HOT BAR",
    items: [
      { name: "ماچا", price: 280, img: "matcha.jpg" },
      { name: "تارو", price: 328, img: "taro.jpg" },
      { name: "اسپرولینا", price: 317, img: "spirulina.jpg" },
      { name: "اوبه", price: 320, img: "ube.jpg" },
      { name: "کرک", price: 197, img: "karak.jpg" },
      { name: "ماسالا", price: 228, img: "masala.jpg" },
      { name: "هات چاکلت", price: 222, img: "hot-chocolate.jpg" },
      { name: "دمنوش آفتاب", price: 195, img: "aftab-tea.jpg" },
      { name: "دمنوش آفرینش", price: 238, img: "afarinesh-tea.jpg" },
      { name: "دمنوش ویژه نوو", price: 148, img: "nevo-tea.jpg" },
      { name: "چایی (دو نفره)", price: 138, img: "tea.jpg" },
      { name: "شیر کاکائو با خامه", price: 248, img: "cocoa-cream.jpg" },
      { name: "کارامل ماکیاتو", price: 248, img: "caramel-macchiato.jpg" }
    ]
  },
  cold: {
    title: "بار سرد",
    en: "COLD BAR",
    items: [
      { name: "بلک دایموند", price: 297, img: "black-diamond.jpg" },
      { name: "فارست", price: 287, img: "forest.jpg" },
      { name: "رد وایو", price: 278, img: "red-wave.jpg" },
      { name: "موهیتو", price: 248, img: "mojito.jpg" },
      { name: "لیموناد", price: 228, img: "lemonade.jpg" },
      { name: "ولوت پینک", price: 294, img: "velvet-pinki.jpg" },
      { name: "میدنایت بلو", price: 287, img: "midnight-blue.jpg" },
      { name: "رد موهیتو", price: 378, img: "red-mojito.jpg" }
    ]
  },
  espresso: {
    title: "بر پایه اسپرسو",
    en: "ESPRESSO BASED",
    items: [
      { name: "اسپرسو سینگل 70/30", price: 90, img: "espresso-single.jpg" },
      { name: "اسپرسو دبل 70/30", price: 130, img: "espresso-double.jpg" },
      { name: "اسپرسو سینگل 50/50", price: 90, img: "espresso-single.jpg" },
      { name: "اسپرسو دبل 50/50", price: 130, img: "espresso-double.jpg" },
      { name: "اسپرسو سینگل ۱۰۰٪ عربیکا", price: 110, img: "espresso-arabica.jpg" },
      { name: "اسپرسو دبل ۱۰۰٪ عربیکا", price: 150, img: "espresso-arabica.jpg" },
      { name: "کوکونات", price: 268, img: "coconut.jpg" },
      { name: "آفوگاتو", price: 248, img: "affogato.jpg" },
      { name: "لته", price: 225, img: "latte.jpg" },
      { name: "موکا", price: 238, img: "mocha.jpg" },
      { name: "آیس موکا", price: 248, img: "iced-mocha.jpg" },
      { name: "آیس لته", price: 235, img: "iced-latte.jpg" },
      { name: "کاپوچینو", price: 226, img: "cappuccino.jpg" },
      { name: "کورتادو", price: 148, img: "cortado.jpg" },
      { name: "کن پانا", price: 155, img: "con-panna.jpg" }
    ]
  },
  iced: {
    title: "آیس تی",
    en: "ICED TEA",
    items: [
      { name: "آیس ماچا", price: 290, img: "iced-matcha.jpg" },
      { name: "آیس اوبه", price: 330, img: "iced-ube.jpg" },
      { name: "آیس اسپرولینا", price: 327, img: "iced-spirulina.jpg" },
      { name: "آیس تارو", price: 338, img: "iced-taro.jpg" }
    ]
  },
  shake: {
    title: "شیک",
    en: "SHAKE",
    items: [
      { name: "کره گردو", price: 380, img: "walnut-shake.jpg" },
      { name: "شکلات", price: 350, img: "chocolate-shake.jpg" },
      { name: "اوریو", price: 380, img: "oreo-shake.jpg" },
      { name: "لوتوس", price: 380, img: "lotus-shake.jpg" },
      { name: "نوتلا", price: 380, img: "nutella-shake.jpg" },
      { name: "توت فرنگی", price: 350, img: "strawberry-shake.jpg" },
      { name: "وانیل", price: 350, img: "vanilla-shake.jpg" },
      { name: "بادام زمینی", price: 380, img: "peanut-shake.jpg" },
      { name: "پسته", price: 428, img: "pistachio-shake.jpg" }
    ]
  },
  breakfast: {
    title: "صبحانه",
    en: "BREAKFAST",
    items: [
      { name: "نیمرو", price: 188, img: "sunny-egg.jpg" },
      { name: "سوسیس تخم مرغ", price: 237, img: "sausage-egg.jpg" },
      { name: "سینی ایرانی", price: 470, img: "iranian-plate.jpg" },
      { name: "املت", price: 237, img: "omelette.jpg" },
      { name: "تست سوسیس تخم مرغ", price: 285, img: "sausage-toast.jpg" },
      { name: "املت فرانسوی", price: 370, img: "french-omelette.jpg" },
      { name: "تست کره بادام زمینی", price: 270, img: "peanut-toast.jpg" },
      { name: "املت قارچ پنیر", price: 288, img: "mushroom-omelette.jpg" },
      { name: "اوتمیل", price: 295, img: "oatmeal.jpg" }
    ]
  },
  cake: {
    title: "کیک‌ها",
    en: "CAKES & DESSERTS",
    items: [
      { name: "کروسان بستنی", price: null, img: "croissant-ice.jpg" },
      { name: "کوکی", price: null, img: "cookie.jpg" },
      { name: "کیک سه شیر", price: null, img: "tres-leches.jpg" },
      { name: "کیک خیس", price: null, img: "wet-cake.jpg" },
      { name: "کیک سن سباستین", price: null, img: "san-sebastian.jpg" },
      { name: "کیک پای سیب / آلبالو", price: null, img: "apple-pie.jpg" },
      { name: "تیرامیسو", price: null, img: "tiramisu.jpg" }
    ]
  },
  sandwich: {
    title: "ساندویچ‌ها",
    en: "SANDWICHES",
    items: [
      { name: "استیک برگر", price: 689, img: "steak-burger.jpg" },
      { name: "چیکن برگر", price: 466, img: "chicken-burger.jpg" },
      { name: "چیکن اسموکی", price: 458, img: "chicken-smoky.jpg" },
      { name: "چیکن هانی ماستارد", price: 469, img: "chicken-honey-mustard.jpg" },
      { name: "سیب زمینی تنوری", price: 265, img: "oven-fries.jpg" },
      { name: "سیب زمینی ویژه", price: 467, img: "special-fries.jpg" }
    ]
  },
  hookah: {
    title: "قلیان‌ها",
    en: "HOOKAH",
    items: [
      { name: "آدامس نعنا", price: 350, img: "mint-gum.jpg" },
      { name: "هندونه نعنا", price: 350, img: "watermelon-mint.jpg" },
      { name: "نعنا یخ", price: 350, img: "ice-mint.jpg" },
      { name: "لیمو نعنا", price: 350, img: "lemon-mint.jpg" },
      { name: "دژاوو", price: 350, img: "deja-vu.jpg" },
      { name: "شب های مسکو", price: 350, img: "moscow-nights.jpg" },
      { name: "آدامس دارچین", price: 350, img: "cinnamon-gum.jpg" },
      { name: "لاو", price: 350, img: "love.jpg" },
      { name: "هندونه یخ", price: 350, img: "ice-watermelon.jpg" },
      { name: "بلوبری", price: 350, img: "blueberry.jpg" },
      { name: "دوسیب آلبالو", price: 350, img: "double-apple.jpg" }
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
          ${formatPrice(item.price)}
        </div>
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
