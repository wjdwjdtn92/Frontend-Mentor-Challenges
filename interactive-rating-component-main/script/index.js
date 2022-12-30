const $rating = document.querySelector("#rating__container");
const $ratingResult = document.querySelector("#rating__result-container");
const $ratingForm = document.querySelector("#rating .rating-form");
const $ratingResultHeaderTitle = document.querySelector(
  ".rating__result-header-title"
);

$ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedValue = event.target.rates.value;

  if (selectedValue.length === 0) {
    return;
  }

  $rating.className = "display-none";
  $ratingResult.className = "card";
  $ratingResultHeaderTitle.textContent = `You selected ${selectedValue} out of 5`;
});
