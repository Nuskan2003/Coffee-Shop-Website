// ===============================
// ORDER MODAL
// ===============================

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

// ===============================
// OPEN ORDER FORM
// ===============================

orderButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Find the coffee name from the card
        const productCard = button.closest(".product-info");
        const coffeeName = productCard.querySelector("h3").textContent;

        coffeeType.value = coffeeName;

        orderForm.style.display = "flex";
    });

});

// ===============================
// CLOSE FORM WHEN CLICKING OUTSIDE
// ===============================

orderForm.addEventListener("click", (event) => {

    if (event.target === orderForm) {

        closeForm();

    }

});

// ===============================
// CLOSE FORM
// ===============================

function closeForm() {

    orderForm.style.display = "none";

    customerName.value = "";
    coffeeType.value = "";
    quantity.value = "";

}

// ===============================
// SUBMIT ORDER
// ===============================

const submitButton = document.querySelector(".form-box button");

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

        `✅ Thank you, ${name}!\n\n` +
        `Your order has been placed successfully.\n\n` +
        `Coffee: ${coffee}\n` +
        `Quantity: ${qty}\n\n` +
        `We'll start preparing your coffee right away! ☕`

    );

    closeForm();

});