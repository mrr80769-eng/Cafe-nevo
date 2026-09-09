/* =========================================================
   CAFE NEVO
   MENU SYSTEM
========================================================= */


/* =========================================================
   MENU DATA
========================================================= */

const menuData = {

    hot: {
        fa: "بار گرم",
        en: "HOT DRINKS",
        icon: "☕",
        items: [
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
        en: "COLD DRINKS",
        icon: "🥤",
        items: [
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
        en: "ESPRESSO BASED",
        icon: "◉",
        items: [
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
        en: "SHAKES",
        icon: "♜",
        items: [
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

    iced: {
        fa: "آیس تی",
        en: "ICED TEA",
        icon: "♧",
        items: [
            ["آیس ماچا", 290],
            ["آیس اوبه", 330],
            ["آیس اسپرولینا", 327],
            ["آیس تارو", 338]
        ]
    },

    breakfast: {
        fa: "صبحانه",
        en: "BREAKFAST",
        icon: "⌂",
        items: [
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
        fa: "کیک ها",
        en: "DESSERT",
        icon: "♧",
        items: [
            ["کروسان بستنی", null],
            ["کوکی", null],
            ["کیک سه شیر", null],
            ["کیک خیس", null],
            ["کیک سن سباستین", null],
            ["کیک پای سیب / آلبالو", null],
            ["تیرامیسو", null]
        ]
    },

    sandwich: {
        fa: "ساندویچ ها",
        en: "SANDWICHES",
        icon: "▱",
        items: [
            ["استیک برگر", 689],
            ["چیکن برگر", 466],
            ["چیکن اسموکی", 458],
            ["چیکن هانی ماستارد", 469],
            ["سیب زمینی تنوری", 265],
            ["سیب زمینی ویژه", 467]
        ]
    },

    hookah: {
        fa: "قلیان ها",
        en: "HOOKAHS",
        icon: "♨",
        items: [
            ["آدامس نعنا", 350],
            ["هندونه نعنا", 350],
            ["نعنا یخ", 350],
            ["لیمو نعنا", 350],
            ["دژاوو", 350],
            ["شب های مسکو", 350],
            ["آدامس دارچین", 350],
            ["لاو", 350],
            ["هندونه یخ", 350],
            ["بلوبری", 350],
            ["دوسیب آلبالو", 350]
        ]
    }

};


/* =========================================================
   CATEGORY ORDER
========================================================= */

const categories = [

    ["hot", "بار گرم", "Hot Drinks", "☕"],

    ["cold", "بار سرد", "Cold Drinks", "🥤"],

    ["espresso", "بر پایه اسپرسو", "Espresso Based", "◉"],

    ["shake", "شیک", "Shakes", "♜"],

    ["iced", "آیس تی", "Iced Tea", "♧"],

    ["breakfast", "صبحانه", "Breakfast", "⌂"],

    ["cake", "کیک ها", "Dessert", "♧"],

    ["sandwich", "ساندویچ ها", "Sandwiches", "▱"],

    ["hookah", "قلیان ها", "Hookahs", "♨"]

];


/* =========================================================
   ELEMENTS
========================================================= */

const homePage =
    document.getElementById("homePage");

const categoriesPage =
    document.getElementById("categoriesPage");

const productsPage =
    document.getElementById("productsPage");

const openMenu =
    document.getElementById("openMenu");

const categoriesBack =
    document.getElementById("categoriesBack");

const categoriesLogo =
    document.getElementById("categoriesLogo");

const productsBack =
    document.getElementById("productsBack");

const productsLogo =
    document.getElementById("productsLogo");

const homeLogo =
    document.getElementById("homeLogo");

const searchButton =
    document.getElementById("searchButton");

const categoryCards =
    document.getElementById("categoryCards");

const categoryLine =
    document.getElementById("categoryLine");

const productsList =
    document.getElementById("productsList");

const productCategoryTitle =
    document.getElementById("productCategoryTitle");

const productCategoryEnglish =
    document.getElementById("productCategoryEnglish");


/* =========================================================
   CURRENT CATEGORY
========================================================= */

let currentCategory = "hot";


/* =========================================================
   PRICE
========================================================= */

function formatPrice(value) {

    if (value === null || value === undefined) {

        return `
            <span class="product-price missing">
                قیمت اعلام نشده
            </span>
        `;
    }

    const toman = Number(value) * 1000;

    return `
        <span class="product-price">
            ${toman.toLocaleString("fa-IR")} تومان
        </span>
    `;
}


/* =========================================================
   PAGE SWITCHER
========================================================= */

function showPage(page) {

    homePage.classList.remove("active-page");

    categoriesPage.classList.remove("active-page");

    productsPage.classList.remove("active-page");

    page.classList.add("active-page");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   SHOW LOBBY
========================================================= */

function showLobby(pushHistory = true) {

    showPage(homePage);

    if (pushHistory) {

        history.pushState(
            { page: "home" },
            "",
            window.location.pathname +
            window.location.search
        );
    }
}


/* =========================================================
   SHOW CATEGORIES
========================================================= */

function showCategories(pushHistory = true) {

    showPage(categoriesPage);

    if (pushHistory) {

        history.pushState(
            { page: "categories" },
            "",
            window.location.pathname +
            window.location.search +
            "#categories"
        );
    }
}


/* =========================================================
   SHOW PRODUCTS
========================================================= */

function showProducts(key, pushHistory = true) {

    if (!menuData[key]) {
        key = "hot";
    }

    currentCategory = key;

    renderProducts(key);

    showPage(productsPage);

    if (pushHistory) {

        history.pushState(
            {
                page: "products",
                category: key
            },
            "",
            window.location.pathname +
            window.location.search +
            "#menu-" +
            key
        );
    }
}


/* =========================================================
   RENDER CATEGORY CARDS
========================================================= */

function renderCategoryCards() {

    categoryCards.innerHTML = "";

    categories.forEach(
        ([key, fa, en, icon]) => {

            const card =
                document.createElement("button");

            card.type = "button";

            card.className =
                "category-card";

            card.innerHTML = `

                <div class="category-icon">
                    ${icon}
                </div>

                <div class="category-text">

                    <span class="english">
                        ${en}
                    </span>

                    <span class="persian">
                        ${fa}
                    </span>

                </div>

                <div class="category-arrow">
                    ›
                </div>

                <div class="category-image"></div>

            `;

            card.addEventListener(
                "click",
                function () {

                    showProducts(key);

                }
            );

            categoryCards.appendChild(card);
        }
    );
}


/* =========================================================
   RENDER CATEGORY LINE
========================================================= */

function renderCategoryLine(activeKey) {

    categoryLine.innerHTML = "";

    categories.forEach(
        ([key, fa]) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "category-pill";

            if (key === activeKey) {
                button.classList.add("active");
            }

            button.textContent = fa;

            button.addEventListener(
                "click",
                function () {

                    showProducts(key);

                }
            );

            categoryLine.appendChild(button);
        }
    );


    /* scroll active button into view */

    const active =
        categoryLine.querySelector(".active");

    if (active) {

        setTimeout(() => {

            active.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest"
            });

        }, 50);
    }
}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts(key) {

    const category =
        menuData[key];

    if (!category) return;


    productCategoryTitle.textContent =
        category.fa;

    productCategoryEnglish.textContent =
        category.en;


    renderCategoryLine(key);


    productsList.innerHTML = "";


    category.items.forEach(
        ([name, price], index) => {

            const row =
                document.createElement("div");

            row.className =
                "product-row";

            row.innerHTML = `

                <div>

                    <span class="product-name">
                        ${name}
                    </span>

                    <span class="product-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                </div>

                ${formatPrice(price)}

            `;

            productsList.appendChild(row);

        }
    );
}


/* =========================================================
   LOBBY → CATEGORIES
========================================================= */

openMenu.addEventListener(
    "click",
    function () {

        showCategories();

    }
);


/* =========================================================
   CATEGORIES → LOBBY
========================================================= */

categoriesBack.addEventListener(
    "click",
    function () {

        showLobby();

    }
);


/* =========================================================
   CATEGORIES LOGO → LOBBY
========================================================= */

categoriesLogo.addEventListener(
    "click",
    function () {

        showLobby();

    }
);


/* =========================================================
   PRODUCTS → CATEGORIES
========================================================= */

productsBack.addEventListener(
    "click",
    function () {

        showCategories();

    }
);


/* =========================================================
   PRODUCTS LOGO → LOBBY
========================================================= */

productsLogo.addEventListener(
    "click",
    function () {

        showLobby();

    }
);


/* =========================================================
   TOP LOGO → LOBBY
========================================================= */

homeLogo.addEventListener(
    "click",
    function () {

        showLobby();

    }
);


/* =========================================================
   SEARCH
========================================================= */

searchButton.addEventListener(
    "click",
    function () {

        alert("جستجوی منو به‌زودی فعال می‌شود.");

    }
);


/* =========================================================
   BROWSER BACK / FORWARD
========================================================= */

window.addEventListener(
    "popstate",
    function () {

        routeFromUrl();

    }
);

window.addEventListener(
    "hashchange",
    function () {

        routeFromUrl();

    }
);


/* =========================================================
   URL ROUTER
========================================================= */

function routeFromUrl() {

    const hash =
        window.location.hash;


    /* Lobby */

    if (!hash) {

        showLobby(false);

        return;
    }


    /* Categories */

    if (hash === "#categories") {

        showCategories(false);

        return;
    }


    /* Product pages */

    if (hash.startsWith("#menu-")) {

        const key =
            hash.replace("#menu-", "");

        if (menuData[key]) {

            showProducts(key, false);

        } else {

            showProducts("hot", false);

        }

        return;
    }


    /* Unknown hash */

    showLobby(false);
}


/* =========================================================
   INITIALIZE
========================================================= */

renderCategoryCards();

renderProducts("hot");

routeFromUrl();
