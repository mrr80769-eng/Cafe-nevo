/* =========================================
   MENU DATA
========================================= */

const menuData = {

  hot: {
    fa: "بار گرم",
    en: "Hot Drinks",

    products: [
      ["ماچا", 280],
      ["تارو", 328],
      ["اسپرولینا", 317],
      ["اوبه", 320],
      ["کرک", 197],
      ["ماسالا", 228],
      ["هات چاکلت", 222],
      ["دمنوش آفتاب", 195],
      ["دمنوش آفرینش", 238],
      ["دمنوش ویژه نوو", 148],
      ["چایی (دو نفره)", 138],
      ["شیر کاکائو با خامه", 248],
      ["کارامل ماکیاتو", 248]
    ]
  },


  cold: {
    fa: "بار سرد",
    en: "Cold Drinks",

    products: [
      ["بلک دایموند", 297],
      ["فارست", 287],
      ["رد وایو", 278],
      ["موهیتو", 248],
      ["لیموناد", 228],
      ["ولوت پینک", 294],
      ["میدنایت بلو", 287],
      ["رد موهیتو", 378]
    ]
  },


  espresso: {
    fa: "بر پایه اسپرسو",
    en: "Espresso Based",

    products: [
      ["اسپرسو سینگل 70/30", 90],
      ["اسپرسو دبل 70/30", 130],
      ["اسپرسو سینگل 50/50", 90],
      ["اسپرسو دبل 50/50", 130],
      ["اسپرسو سینگل 100٪ عربیکا", 110],
      ["اسپرسو دبل 100٪ عربیکا", 150],
      ["کوکونات", 268],
      ["آفوگاتو", 248],
      ["لته", 225],
      ["موکا", 238],
      ["آیس موکا", 248],
      ["آیس لته", 235],
      ["کاپوچینو", 226],
      ["کورتادو", 148],
      ["کن پانا", 155]
    ]
  },


  shake: {
    fa: "شیک",
    en: "Shakes",

    products: [
      ["کره گردو", 380],
      ["شکلات", 350],
      ["اوریو", 380],
      ["لوتوس", 380],
      ["نوتلا", 380],
      ["توت فرنگی", 350],
      ["وانیل", 350],
      ["بادام زمینی", 380],
      ["پسته", 428]
    ]
  },


  icedTea: {
    fa: "آیس تی",
    en: "Iced Tea",

    products: [
      ["آیس ماچا", 290],
      ["آیس اوبه", 330],
      ["آیس اسپرولینا", 327],
      ["آیس تارو", 338]
    ]
  },


  breakfast: {
    fa: "صبحانه",
    en: "Breakfast",

    products: [
      ["نیمرو", 188],
      ["سوسیس تخم مرغ", 237],
      ["سینی ایرانی", 470],
      ["املت", 237],
      ["تست سوسیس تخم مرغ", 285],
      ["املت فرانسوی", 370],
      ["تست کره بادام زمینی", 270],
      ["املت قارچ پنیر", 288],
      ["اوتمیل", 295]
    ]
  },


  cake: {
    fa: "کیک‌ها",
    en: "Desserts",

    products: [
      ["کروسان بستنی", null],
      ["کوکی", null],
      ["کیک سه شیر", null],
      ["کیک خیس", null],
      ["کیک سن سباستین", null],
      ["کیک پای سیب / آلبالو", null],
      ["تیرامیسو", null]
    ]
  },


  sandwiches: {
    fa: "ساندویچ‌ها",
    en: "Sandwiches",

    products: [
      ["استیک برگر", 689],
      ["چیکن برگر", 466],
      ["چیکن اسموکی", 458],
      ["چیکن هانی ماستارد", 469],
      ["سیب زمینی تنوری", 265],
      ["سیب زمینی ویژه", 467]
    ]
  },


  hookah: {
    fa: "قلیان‌ها",
    en: "Hookahs",

    products: [
      ["آدامس نعنا", 350],
      ["هندونه نعنا", 350],
      ["نعنا یخ", 350],
      ["لیمو نعنا", 350],
      ["دژاوو", 350],
      ["شب‌های مسکو", 350],
      ["آدامس دارچین", 350],
      ["لاو", 350],
      ["هندونه یخ", 350],
      ["بلوبری", 350],
      ["دوسیب آلبالو", 350]
    ]
  }

};


/* =========================================
   CATEGORY CONFIG
========================================= */

const categories = [

  {
    key: "hot",
    fa: "بار گرم",
    en: "Hot Drinks",
    icon: "☕"
  },

  {
    key: "cold",
    fa: "بار سرد",
    en: "Cold Drinks",
    icon: "♢"
  },

  {
    key: "espresso",
    fa: "بر پایه اسپرسو",
    en: "Espresso Based",
    icon: "☕"
  },

  {
    key: "shake",
    fa: "شیک",
    en: "Shakes",
    icon: "♜"
  },

  {
    key: "icedTea",
    fa: "آیس تی",
    en: "Iced Tea",
    icon: "☕"
  },

  {
    key: "breakfast",
    fa: "صبحانه",
    en: "Breakfast",
    icon: "◉"
  },

  {
    key: "cake",
    fa: "کیک‌ها",
    en: "Dessert",
    icon: "◇"
  },

  {
    key: "sandwiches",
    fa: "ساندویچ‌ها",
    en: "Sandwiches",
    icon: "▣"
  },

  {
    key: "hookah",
    fa: "قلیان‌ها",
    en: "Hookahs",
    icon: "♧"
  }

];


/* =========================================
   ELEMENTS
========================================= */

const homePage =
  document.getElementById("homePage");

const categoriesPage =
  document.getElementById("categoriesPage");

const productsPage =
  document.getElementById("productsPage");

const aboutPage =
  document.getElementById("aboutPage");

const categoryList =
  document.getElementById("categoryList");

const categoryLine =
  document.getElementById("categoryLine");

const productsList =
  document.getElementById("productsList");

const productsTitle =
  document.getElementById("productsTitle");

const productsEnglish =
  document.getElementById("productsEnglish");


/* =========================================
   FORMAT PRICE
========================================= */

function formatPrice(price) {

  if (price === null) {
    return "قیمت اعلام نشده";
  }

  const toman =
    price * 1000;

  return (
    toman.toLocaleString("fa-IR") +
    " تومان"
  );
}


/* =========================================
   SHOW PAGE
========================================= */

function showPage(page) {

  [
    homePage,
    categoriesPage,
    productsPage,
    aboutPage
  ].forEach(item => {

    item.classList.remove(
      "active-page"
    );

  });


  page.classList.add(
    "active-page"
  );


  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}


/* =========================================
   LOBBY
========================================= */

function showLobby(push = true) {

  showPage(homePage);

  if (push) {
    history.pushState(
      {},
      "",
      window.location.pathname
    );
  }

}


/* =========================================
   CATEGORIES
========================================= */

function showCategories(push = true) {

  showPage(categoriesPage);

  if (push) {
    history.pushState(
      {},
      "",
      "#categories"
    );
  }

}


/* =========================================
   PRODUCTS
========================================= */

function showProducts(
  key,
  push = true
) {

  if (!menuData[key]) {
    showCategories(push);
    return;
  }


  renderProducts(key);

  showPage(productsPage);


  if (push) {

    history.pushState(
      {},
      "",
      "#menu-" + key
    );

  }

}


/* =========================================
   ABOUT
========================================= */

function showAbout(push = true) {

  showPage(aboutPage);

  if (push) {

    history.pushState(
      {},
      "",
      "#about"
    );

  }

}


/* =========================================
   CATEGORY CARDS
========================================= */

function renderCategoryCards() {

  categoryList.innerHTML = "";


  categories.forEach(category => {

    const card =
      document.createElement("button");

    card.className =
      "category-card";


    card.innerHTML = `

      <div class="category-icon">
        ${category.icon}
      </div>

      <div class="category-text">

        <span class="en">
          ${category.en}
        </span>

        <span class="fa">
          ${category.fa}
        </span>

      </div>

      <div class="category-arrow">
        ›
      </div>

    `;


    card.addEventListener(
      "click",
      () => {
        showProducts(category.key);
      }
    );


    categoryList.appendChild(card);

  });

}


/* =========================================
   CATEGORY SWITCHER
========================================= */

function renderCategoryLine(
  activeKey
) {

  categoryLine.innerHTML = "";


  categories.forEach(category => {

    const button =
      document.createElement("button");


    button.className =
      "category-pill";


    if (category.key === activeKey) {
      button.classList.add("active");
    }


    button.textContent =
      category.fa;


    button.addEventListener(
      "click",
      () => {

        showProducts(
          category.key
        );

      }
    );


    categoryLine.appendChild(button);

  });

}


/* =========================================
   PRODUCT LIST
========================================= */

function renderProducts(key) {

  const category =
    menuData[key];


  if (!category) return;


  productsTitle.textContent =
    category.fa;


  productsEnglish.textContent =
    category.en;


  renderCategoryLine(key);


  productsList.innerHTML = "";


  category.products.forEach(
    product => {

      const name =
        product[0];

      const price =
        product[1];


      const row =
        document.createElement("div");


      row.className =
        "product-row";


      row.innerHTML = `

        <div class="product-info">

          <div class="product-name">
            ${name}
          </div>

        </div>

        <div class="product-price">
          ${formatPrice(price)}
        </div>

      `;


      productsList.appendChild(row);

    }
  );

}


/* =========================================
   NAVIGATION BUTTONS
========================================= */


/* Lobby -> Categories */

document
  .getElementById("openMenuBtn")
  .addEventListener(
    "click",
    () => showCategories()
  );


document
  .getElementById("lobbyMenuIcon")
  .addEventListener(
    "click",
    () => showCategories()
  );


/* Categories -> Lobby */

document
  .getElementById("categoriesBackBtn")
  .addEventListener(
    "click",
    () => showLobby()
  );


document
  .getElementById("categoriesLogoBtn")
  .addEventListener(
    "click",
    () => showLobby()
  );


/* Products -> Categories */

document
  .getElementById("productsBackBtn")
  .addEventListener(
    "click",
    () => showCategories()
  );


/* Products -> Lobby */

document
  .getElementById("productsLogoBtn")
  .addEventListener(
    "click",
    () => showLobby()
  );


/* Top Logo -> Lobby */

document
  .getElementById("topLogoBtn")
  .addEventListener(
    "click",
    () => showLobby()
  );


/* Products -> About */

document
  .getElementById("aboutCafeBtn")
  .addEventListener(
    "click",
    () => showAbout()
  );


/* About -> Products */

document
  .getElementById("aboutBackBtn")
  .addEventListener(
    "click",
    () => {

      const hash =
        window.location.hash;


      if (
        hash.startsWith("#menu-")
      ) {

        const key =
          hash.replace(
            "#menu-",
            ""
          );

        showProducts(
          key
        );

      } else {

        showCategories();

      }

    }
  );


/* Search */

document
  .getElementById("searchBtn")
  .addEventListener(
    "click",
    () => {

      alert(
        "جستجو در نسخه بعدی منو فعال می‌شود."
      );

    }
  );


/* =========================================
   ROUTER
========================================= */

function routeFromUrl() {

  const hash =
    window.location.hash;


  /* ROOT = LOBBY */

  if (!hash) {

    showLobby(false);

    return;

  }


  /* CATEGORY PAGE */

  if (
    hash === "#categories"
  ) {

    showCategories(false);

    return;

  }


  /* ABOUT */

  if (
    hash === "#about"
  ) {

    showAbout(false);

    return;

  }


  /* PRODUCT PAGE */

  if (
    hash.startsWith("#menu-")
  ) {

    const key =
      hash.replace(
        "#menu-",
        ""
      );


    if (menuData[key]) {

      showProducts(
        key,
        false
      );

      return;

    }

  }


  /* UNKNOWN */

  showLobby(false);

}


/* =========================================
   BROWSER BACK / FORWARD
========================================= */

window.addEventListener(
  "popstate",
  routeFromUrl
);


window.addEventListener(
  "hashchange",
  routeFromUrl
);


/* =========================================
   INITIALIZE
========================================= */

renderCategoryCards();

renderProducts("hot");

routeFromUrl();
