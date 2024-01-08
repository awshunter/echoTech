// scripts5.js



// Function to update the total based on the quantity and price
function updateTotal() {
    var total = 0;
    var rows = document.querySelectorAll(".cart table tr");

    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var price = parseFloat(row.cells[2].innerText.slice(1));
        var quantity = parseInt(row.cells[3].querySelector("input").value);
        var subtotal = price * quantity;
        row.cells[4].innerText = "$" + subtotal.toFixed(2);
        total += subtotal;
    }

    document.querySelector(".cart-total p").innerText = "Total: $" + total.toFixed(2);
}


// Event listener for quantity changes
document.querySelectorAll(".cart table input[type='number']").forEach(function (input) {
    input.addEventListener("change", function () {
        updateTotal();
    });
});



