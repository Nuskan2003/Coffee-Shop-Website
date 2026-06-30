// ======================================================
// SELECT ELEMENTS
// ======================================================

const orderButtons = document.querySelectorAll(".orderBtn");
const orderForm = document.getElementById("orderForm");

const customerName = document.querySelector(
    '#orderForm input[placeholder="Your Name"]'
);

const coffeeType = document.querySelector(
    '#orderForm input[placeholder="Coffee Type"]'
);

const quantity = document.querySelector(
    '#orderForm input[placeholder="Quantity"]'
);

const submitButton = document.querySelector(".form-box button");

const themeBtn = document.getElementById("themeBtn");

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

const progressBar = document.getElementById("progressBar");

const topBtn = document.getElementById("topBtn");

const navbar = document.querySelector(".navbar");

// ======================================================
// OPEN ORDER FORM
// ======================================================

orderButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".product-info");

        const coffee = card.querySelector("h3").textContent;

        coffeeType.value = coffee;

        orderForm.style.display = "flex";

    });

});

// ======================================================
// CLOSE MODAL
// ======================================================

function closeForm() {

    orderForm.style.display = "none";

    customerName.value = "";
    coffeeType.value = "";
    quantity.value = "";

}

// ======================================================
// CLOSE WHEN CLICKING OUTSIDE
// ======================================================

orderForm.addEventListener("click", (event) => {

    if (event.target === orderForm) {

        closeForm();

    }

});

// ======================================================
// SUBMIT ORDER
// ======================================================

submitButton.addEventListener("click", () => {

    const name = customerName.value.trim();
    const coffee = coffeeType.value.trim();
    const qty = quantity.value.trim();

    if (name === "") {

        alert("Please enter your name.");

        return;

    }

    if (qty === "" || qty <= 0) {

        alert("Please enter a valid quantity.");

        return;

    }

    alert(

`☕ Thank you ${name}!

Your order has been received.

Coffee : ${coffee}
Quantity : ${qty}

We'll start preparing it shortly!`

    );

    closeForm();

});

// ======================================================
// DARK MODE
// ======================================================

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

// ======================================================
// MOBILE MENU
// ======================================================

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

// ======================================================
// SCROLL EFFECTS
// ======================================================

window.addEventListener("scroll",()=>{

    // Progress Bar

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    progress + "%";

    // Back To Top

    if(scrollTop > 400){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

    // Navbar Background

    if(scrollTop > 80){

        navbar.style.background =
        "rgba(20,20,20,.85)";

    }

    else{

        navbar.style.background =
        "rgba(0,0,0,.45)";

    }

});

// ======================================================
// BACK TO TOP
// ======================================================

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ======================================================
// CLOSE MENU AFTER CLICK
// ======================================================

document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

// ======================================================
// SIMPLE SCROLL REVEAL
// ======================================================

const revealElements =
document.querySelectorAll(

".product-row, .about-grid div, table"

);

const revealOnScroll = ()=>{

    const trigger =
    window.innerHeight * 0.85;

    revealElements.forEach(element=>{

        const top =
        element.getBoundingClientRect().top;

        if(top < trigger){

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0)";

        }

    });

};

revealElements.forEach(element=>{

    element.style.opacity = "0";

    element.style.transform =
    "translateY(60px)";

    element.style.transition =
    ".7s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();