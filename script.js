/* =========================================================
   CAFE NEVO — PREMIUM DIGITAL MENU
   ========================================================= */


/* ================= MENU DATA ================= */

const menu = {

    hookah: {
        title: "قلیان ها",
        en: "HOOKAH",
        items: [
            ["آدامس نعنا", 350000],
            ["هندونه نعنا", 350000],
            ["نعنا یخ", 350000],
            ["لیمو نعنا", 350000],
            ["دژاوو", 350000],
            ["شب های مسکو", 350000],
            ["آدامس دارچین", 350000],
            ["لاو", 350000],
            ["هندونه یخ", 350000],
            ["بلوبری", 350000],
            ["دوسیب آلبالو", 350000]
        ]
    },


    shake: {
        title: "شیک",
        en: "SHAKE",
        items: [
            ["کره گردو", 380000],
            ["شکلات", 350000],
            ["اوریو", 380000],
            ["لوتوس", 380000],
            ["نوتلا", 380000],
            ["توت فرنگی", 350000],
            ["وانیل", 350000],
            ["بادام زمینی", 380000],
            ["پسته", 428000]
        ]
    },


    breakfast: {
        title: "صبحانه",
        en: "BREAKFAST",
        items: [
            ["نیمرو", 188000],
            ["سوسیس تخم مرغ", 237000],
            ["سینی ایرانی", 470000],
            ["املت", 237000],
            ["تست سوسیس تخم مرغ", 285000],
            ["املت فرانسوی", 370000],
            ["تست کره بادام زمینی", 270000],
            ["املت قارچ پنیر", 288000],
            ["اوتمیل", 295000]
        ]
    },


    cold: {
        title: "بار سرد",
        en: "COLD BAR",
        items: [
            ["بلک دایموند", 297000],
            ["فارست", 287000],
            ["رد وایو", 278000],
            ["موهیتو", 248000],
            ["لیموناد", 228000],
            ["ولوت پینک", 294000],
            ["میدنایت بلو", 287000],
            ["رد موهیتو", 378000]
        ]
    },


    hot: {
        title: "بار گرم",
        en: "HOT BAR",
        items: [
            ["ماچا", 280000],
            ["تارو", 328000],
            ["اسپرولینا", 317000],
            ["اوبه", 320000],
            ["کرک", 197000],
            ["ماسالا", 228000],
            ["هات چاکلت", 222000],
            ["دمنوش آفتاب", 195000],
            ["دمنوش آفرینش", 238000],
            ["دمنوش ویژه نوو", 148000],
            ["چایی (دو نفره)", 138000],
            ["شیر کاکائو با خامه", 248000],
            ["کارامل ماکیاتو", 248000]
        ]
    },


    iced: {
        title: "آیس تی",
        en: "ICED TEA",
        items: [
            ["آیس ماچا", 290000],
            ["آیس اوبه", 330000],
            ["آیس اسپرولینا", 327000],
            ["آیس تارو", 338000]
        ]
    },


    espresso: {
        title: "بر پایه اسپرسو",
        en: "ESPRESSO BASED",
        items: [
            ["اسپرسو سینگل 70/30", 90000],
            ["اسپرسو دبل 70/30", 130000],
            ["اسپرسو سینگل 50/50", 90000],
            ["اسپرسو دبل 50/50", 130000],
            ["اسپرسو سینگل 100٪ عربیکا", 110000],
            ["اسپرسو دبل 100٪ عربیکا", 150000],
            ["کوکونات", 268000],
            ["آفوگاتو", 248000],
            ["لته", 225000],
            ["موکا", 238000],
            ["آیس موکا", 248000],
            ["آیس لته", 235000],
            ["کاپوچینو", 226000],
            ["کورتادو", 148000],
            ["کن پانا", 155000]
        ]
    },


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


    /* ================= SANDWICH ================= */

    sandwich: {
        title: "ساندویچ ها",
        en: "SANDWICHES",
        items: [
            ["ساندویچ ویژه نوو", null],
            ["ساندویچ مرغ", null],
            ["ساندویچ گوشت", null],
            ["ساندویچ ژامبون", null]
        ]
    }

};


/* =========================================================
   CATEGORY LIST
   ========================================================= */

const categoryLabels = [

    ["hot", "بار گرم"],
    ["cold", "بار سرد"],
    ["espresso", "بر پایه اسپرسو"],
    ["iced", "آیس تی"],
    ["shake", "شیک"],
    ["breakfast", "صبحانه"],
    ["cake", "کیک ها"],
    ["sandwich", "ساندویچ ها"],
    ["hookah", "قلیان ها"]

];


/* =========================================================
   ELEMENTS
   ========================================================= */

const categories =
    document.getElementById("categories");

const products =
    document.getElementById("products");

const categoryTitle =
    document.getElementById("categoryTitle");

const categoryEnglish =
    document.getElementById("categoryEnglish");


/* =========================================================
   PRICE FORMAT
   ========================================================= */

function formatPrice(value) {

    if (value === null || value === undefined) {

        return `
            <span class="price missing">
                قیمت اعلام نشده
            </span>
        `;

    }

    return `
        <span class="price">
            ${value.toLocaleString("fa-IR")} تومان
        </span>
    `;

}


/* =========================================================
   RENDER CATEGORY BUTTONS
   ========================================================= */

function renderCategories(active) {

    if (!categories) return;

    categories.innerHTML = categoryLabels
        .map(([key, label]) => {

            return `
                <button
                    type="button"
                    class="category ${key === active ? "active" : ""}"
                    data-category="${key}">

                    ${label}

                </button>
            `;

        })
        .join("");


    categories
        .querySelectorAll(".category")
        .forEach(button => {

            button.addEventListener("click", () => {

                const key =
                    button.dataset.category;

                renderMenu(key);

                /*
                 * فقط به بخش محصولات اسکرول می‌کنیم
                 * و صفحه ناگهانی جابه‌جا نمی‌شود.
                 */

                const menuSection =
                    document.getElementById("menu");

                if (menuSection) {

                    menuSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        });

}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderMenu(key) {

    const group = menu[key];

    if (!group) return;


    if (categoryTitle) {

        categoryTitle.textContent =
            group.title;

    }


    if (categoryEnglish) {

        categoryEnglish.textContent =
            group.en;

    }


    renderCategories(key);


    if (!products) return;


    products.innerHTML =
        group.items
            .map(([name, price]) => {

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

            })
            .join("");

}


/* =========================================================
   INITIAL LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
     * همیشه ورود مستقیم سایت از لابی شروع می‌شود.
     * اگر URL شامل #menu باشد، آن را نادیده می‌گیریم.
     */

    if (window.location.hash) {

        history.replaceState(
            null,
            "",
            window.location.pathname +
            window.location.search
        );

    }


    renderMenu("hot");

});
