/* =========================================================
   CAFE NEVO
   DIGITAL MENU
   Lobby → Categories → Products
   ========================================================= */


/* =========================================================
   MENU DATA
   ========================================================= */

const menu = {


    /* ---------- HOT BAR ---------- */

    hot: {

        title: "بار گرم",

        en: "HOT BAR",

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


    /* ---------- COLD BAR ---------- */

    cold: {

        title: "بار سرد",

        en: "COLD BAR",

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


    /* ---------- ESPRESSO ---------- */

    espresso: {

        title: "بر پایه اسپرسو",

        en: "ESPRESSO BASED",

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


    /* ---------- SHAKE ---------- */

    shake: {

        title: "شیک",

        en: "SHAKE",

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


    /* ---------- ICED TEA ---------- */

    iced: {

        title: "آیس تی",

        en: "ICED TEA",

        items: [

            ["آیس ماچا", 290],
            ["آیس اوبه", 330],
            ["آیس اسپرولینا", 327],
            ["آیس تارو", 338]

        ]

    },


    /* ---------- BREAKFAST ---------- */

    breakfast: {

        title: "صبحانه",

        en: "BREAKFAST",

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


    /* ---------- CAKES ---------- */

    cake: {

        title: "کیک ها",

        en: "CAKES & DESSERTS",

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


    /* ---------- SANDWICHES ---------- */

    sandwich: {

        title: "ساندویچ ها",

        en: "SANDWICHES",

        items: [

            ["استیک برگر", 689],
            ["چیکن برگر", 466],
            ["چیکن اسموکی", 458],
            ["چیکن هانی ماستارد", 469],
            ["سیب زمینی تنوری", 265],
            ["سیب زمینی ویژه", 467]

        ]

    },


    /* ---------- HOOKAH ---------- */

    hookah: {

        title: "قلیان ها",

        en: "HOOKAH",

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
   CATEGORY LIST
   ========================================================= */

const categoryLabels = [

    ["hot", "بار گرم", "HOT DRINKS", "☕"],

    ["cold", "بار سرد", "COLD DRINKS", "🥤"],

    ["espresso", "بر پایه اسپرسو", "ESPRESSO BASE", "◉"],

    ["shake", "شیک", "SHAKES", "♜"],

    ["iced", "آیس تی", "ICED TEA", "♧"],

    ["breakfast", "صبحانه", "BREAKFAST", "⌂"],

    ["cake", "کیک ها", "CAKES & DESSERTS", "♧"],

    ["sandwich", "ساندویچ ها", "SANDWICHES", "▱"],

    ["hookah", "قلیان ها", "HOOKAH", "♨"]

];


/* =========================================================
   GLOBAL STATE
   ========================================================= */

let currentCategory = "hot";


/* =========================================================
   HTML ELEMENTS
   ========================================================= */

const hero =
    document.getElementById("home");

const categoryScreen =
    document.getElementById("categories");

const menuScreen =
    document.getElementById("menu");

const infoSection =
    document.getElementById("info");

const qrSection =
    document.querySelector(".qr-section");

const footer =
    document.querySelector("footer");


const categoryCards =
    document.getElementById("categoryCards");

const categoriesLine =
    document.getElementById("categoriesLine");

const products =
    document.getElementById("products");

const categoryTitle =
    document.getElementById("categoryTitle");

const categoryEnglish =
    document.getElementById("categoryEnglish");


const openMenuButton =
    document.getElementById("openMenu");

const backToCategories =
    document.getElementById("backToCategories");


/* =========================================================
   PRICE FORMAT
   ========================================================= */

function formatPrice(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return `
            <span class="price missing">
                قیمت اعلام نشده
            </span>
        `;

    }


    const toman =
        Number(value) * 1000;


    return `
        <span class="price">
            ${toman.toLocaleString("fa-IR")} تومان
        </span>
    `;

}


/* =========================================================
   HIDE ALL SCREENS
   ========================================================= */

function hideAllScreens() {

    const screens = [

        hero,
        categoryScreen,
        menuScreen

    ];


    screens.forEach(screen => {

        if (!screen) return;


        screen.classList.remove(
            "screen-active"
        );


        screen.setAttribute(
            "aria-hidden",
            "true"
        );

    });


    if (infoSection) {

        infoSection.classList.remove(
            "screen-active"
        );

    }


    if (qrSection) {

        qrSection.classList.remove(
            "screen-active"
        );

    }


    if (footer) {

        footer.classList.remove(
            "screen-active"
        );

    }

}


/* =========================================================
   SHOW LOBBY
   ========================================================= */

function showLobby(updateUrl = true) {

    hideAllScreens();


    hero.classList.add(
        "screen-active"
    );


    hero.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
       این سه بخش فقط در Lobby نمایش داده می‌شوند
    */

    if (infoSection) {

        infoSection.classList.add(
            "screen-active"
        );

    }


    if (qrSection) {

        qrSection.classList.add(
            "screen-active"
        );

    }


    if (footer) {

        footer.classList.add(
            "screen-active"
        );

    }


    if (updateUrl) {

        history.pushState(
            {
                screen: "lobby"
            },

            "",

            location.pathname +
            location.search
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   SHOW CATEGORIES
   ========================================================= */

function showCategories(updateUrl = true) {

    hideAllScreens();


    categoryScreen.classList.add(
        "screen-active"
    );


    categoryScreen.setAttribute(
        "aria-hidden",
        "false"
    );


    if (
        updateUrl &&
        location.hash !== "#categories"
    ) {

        history.pushState(
            {
                screen: "categories"
            },

            "",

            "#categories"
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   SHOW PRODUCT MENU
   ========================================================= */

function showMenu(
    key = "hot",
    updateUrl = true
) {

    if (!menu[key]) {

        key = "hot";

    }


    currentCategory = key;


    hideAllScreens();


    menuScreen.classList.add(
        "screen-active"
    );


    menuScreen.setAttribute(
        "aria-hidden",
        "false"
    );


    renderMenu(key);


    if (
        updateUrl &&
        location.hash !== "#menu"
    ) {

        history.pushState(
            {
                screen: "menu",
                category: key
            },

            "",

            "#menu"
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   CATEGORY CARDS
   ========================================================= */

function renderCategoryCards() {

    if (!categoryCards) return;


    categoryCards.innerHTML =

        categoryLabels
            .map(
                ([
                    key,
                    persian,
                    english,
                    icon
                ]) => {

                    return `

                        <button
                            class="category-card"
                            type="button"
                            data-category="${key}"
                        >

                            <span class="cat-icon">
                                ${icon}
                            </span>


                            <span class="cat-copy">

                                <strong>
                                    ${english}
                                </strong>

                                <small>
                                    ${persian}
                                </small>

                            </span>


                            <span class="cat-arrow">
                                ›
                            </span>


                            <span class="cat-image">

                                <span>
                                    ${icon}
                                </span>

                            </span>

                        </button>

                    `;

                }
            )
            .join("");


    categoryCards
        .querySelectorAll(
            ".category-card"
        )
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    showMenu(
                        card.dataset.category
                    );

                }
            );

        });

}


/* =========================================================
   CATEGORY LINE
   ========================================================= */

function renderCategories(active) {

    if (!categoriesLine) return;


    categoriesLine.innerHTML =

        categoryLabels
            .map(
                ([
                    key,
                    label
                ]) => {

                    return `

                        <button
                            class="
                                category
                                ${key === active ? "active" : ""}
                            "
                            type="button"
                            data-category="${key}"
                        >
                            ${label}
                        </button>

                    `;

                }
            )
            .join("");


    categoriesLine
        .querySelectorAll(
            ".category"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    currentCategory =
                        button.dataset.category;


                    renderMenu(
                        currentCategory
                    );

                }
            );

        });


    /*
       اسکرول خودکار به دسته انتخاب‌شده
    */

    const activeButton =
        categoriesLine.querySelector(
            ".category.active"
        );


    if (activeButton) {

        setTimeout(() => {

            activeButton.scrollIntoView({
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

function renderMenu(key) {

    const group =
        menu[key];


    if (!group) return;


    currentCategory = key;


    categoryTitle.textContent =
        group.title;


    categoryEnglish.textContent =
        group.en;


    renderCategories(key);


    products.innerHTML =

        group.items
            .map(
                ([name, price]) => {

                    return `

                        <article class="product">

                            <div class="product-info">

                                <p class="product-name">
                                    ${name}
                                </p>

                            </div>


                            ${formatPrice(price)}

                        </article>

                    `;

                }
            )
            .join("");

}


/* =========================================================
   HOME / LOBBY BUTTON
   ========================================================= */

if (openMenuButton) {

    openMenuButton.addEventListener(
        "click",
        event => {

            event.preventDefault();

            showCategories();

        }
    );

}


/* =========================================================
   BACK TO CATEGORIES
   ========================================================= */

if (backToCategories) {

    backToCategories.addEventListener(
        "click",
        () => {

            showCategories();

        }
    );

}


/* =========================================================
   TOP LOGO → HOME
   ========================================================= */

const miniBrand =
    document.querySelector(
        ".mini-brand"
    );


if (miniBrand) {

    miniBrand.addEventListener(
        "click",
        event => {

            event.preventDefault();

            showLobby();

        }
    );

}


/* =========================================================
   CATEGORY LOGO / BACK BUTTON → HOME
   ========================================================= */

const categoryHomeButton =
    document.querySelector(
        ".category-nav[href='#home']"
    );


if (categoryHomeButton) {

    categoryHomeButton.addEventListener(
        "click",
        event => {

            event.preventDefault();

            showLobby();

        }
    );

}


/* =========================================================
   SEARCH BUTTON
   ========================================================= */

const searchButton =
    document.querySelector(
        ".search-btn"
    );


if (searchButton) {

    searchButton.addEventListener(
        "click",
        () => {

            alert(
                "جستجو به‌زودی به منوی نوو اضافه می‌شود."
            );

        }
    );

}


/* =========================================================
   BROWSER BACK / FORWARD
   ========================================================= */

function routeFromHash() {

    const hash =
        window.location.hash;


    if (hash === "#categories") {

        showCategories(false);

        return;

    }


    if (hash === "#menu") {

        showMenu(
            currentCategory,
            false
        );

        return;

    }


    showLobby(false);

}


window.addEventListener(
    "popstate",
    routeFromHash
);


window.addEventListener(
    "hashchange",
    routeFromHash
);


/* =========================================================
   INITIALIZE
   ========================================================= */

renderCategoryCards();

renderMenu("hot");

routeFromHash();
