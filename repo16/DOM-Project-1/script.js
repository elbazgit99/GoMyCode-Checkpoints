document.addEventListener("DOMContentLoaded", function() {
  // Select all relevant DOM elements
  const productCards = document.querySelectorAll(".card-body");
  const totalPriceElement = document.querySelector(".total");

  // Init the total price
  let totalPrice = 0;

  // update the total price function
  function updateTotalPrice() {
    totalPriceElement.textContent = `${totalPrice} $`;
  }

  // Loop throught 
  productCards.forEach((card) => {
    const quantityElement = card.querySelector(".quantity");
    const plusButton = card.querySelector(".fa-plus-circle");
    const minusButton = card.querySelector(".fa-minus-circle");
    const deleteButton = card.querySelector(".fa-trash-alt");
    const likeButton = card.querySelector(".fa-heart");
    const unitPriceElement = card.querySelector(".unit-price");
    let unitPrice = parseFloat(unitPriceElement.textContent.replace(' $', ''));

    // Update total price whenever quantity is adjusted
    function adjustTotalPrice() {
      totalPrice = 0;
      productCards.forEach((product) => {
        const quantity = parseInt(product.querySelector(".quantity").textContent);
        const price = parseFloat(product.querySelector(".unit-price").textContent.replace(' $', ''));
        totalPrice += quantity * price;
      });
      updateTotalPrice();
    }

    // Handle quantity increase
    plusButton.addEventListener("click", () => {
      let currentQuantity = parseInt(quantityElement.textContent);
      currentQuantity++;
      quantityElement.textContent = currentQuantity;
      adjustTotalPrice();
    });

    // Handle quantity decrease
    minusButton.addEventListener("click", () => {
      let currentQuantity = parseInt(quantityElement.textContent);
      if (currentQuantity > 0) {
        currentQuantity--;
        quantityElement.textContent = currentQuantity;
        adjustTotalPrice();
      }
    });

    // Handle deleting an item from the cart
    deleteButton.addEventListener("click", () => {
      card.remove();
      adjustTotalPrice();
    });

    // Handle liking an item (toggle heart color)
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("fas"); // Toggle heart color (filled vs. empty)
      likeButton.classList.toggle("far");
    });
  });

  // Initial total price update
  updateTotalPrice();
});
