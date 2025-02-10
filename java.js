document.addEventListener("DOMContentLoaded", function () {
    const purchaseBtn = document.querySelector(".purchase");
    const wishlistBtn = document.querySelector(".wishlist");

    purchaseBtn.addEventListener("click", function () {
        alert("Game purchased!");
    });

    wishlistBtn.addEventListener("click", function () {
        alert("Game added to Wishlist!");
    });
});



