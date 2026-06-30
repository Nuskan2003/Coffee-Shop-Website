const orderButtons = document.querySelectorAll(".orderBtn");
const orderForm = document.getElementById("orderForm");

orderButtons.forEach(button => {
    button.addEventListener("click", function() {
        orderForm.style.display = "block";
    });
});

function closeForm() {
    orderForm.style.display = "none";
    alert("Order submitted successfully!");        
}