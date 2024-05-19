document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-button");
  const clearButton = document.getElementById("clear-button");
  const itemAmountInput = document.getElementById("item-amount");
  const totalSpan = document.getElementById("total");

  // Retrieve stored total amount from local storage
  let totalAmount = parseFloat(localStorage.getItem("totalAmount")) || 0;
  totalSpan.textContent = totalAmount.toFixed(2);

  addButton.addEventListener("click", () => {
    const itemAmount = parseFloat(itemAmountInput.value);
    if (!isNaN(itemAmount) && itemAmount > 0) {
      totalAmount += itemAmount;
      totalSpan.textContent = totalAmount.toFixed(2);
      itemAmountInput.value = "";

      localStorage.setItem("totalAmount", totalAmount.toFixed(2));
    }
  });

  clearButton.addEventListener("click", () => {
    totalAmount = 0;
    totalSpan.textContent = totalAmount.toFixed(2);

    localStorage.removeItem("totalAmount");
  });
});
