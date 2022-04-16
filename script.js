const scaleBtn = document.getElementsByClassName("rating-scale-btn");
const submitBtn = document.getElementsByClassName("rating-submit-btn")[0];
const ratingCard = document.getElementsByClassName("rating-card")[0];
const thankYouCard = document.getElementsByClassName("thank-you-card")[0];
const selectedRating = document.getElementsByClassName("selected-rating")[0];

let rating = 0;
let arr = [];

for (let i = 0; i < scaleBtn.length; i++) {
  scaleBtn[i].addEventListener("click", () => {
    rating = i;
    for (let j = 0; j < scaleBtn.length; j++) {
      if (rating != j) {
        scaleBtn[j].classList.remove("active-scale-btn");
        scaleBtn[j].classList.add("hover-scale-btn");
      } else {
        scaleBtn[j].classList.add("active-scale-btn");
        scaleBtn[j].classList.remove("hover-scale-btn");
      }
    }
  });
}

submitBtn.addEventListener("click", () => {
  ratingCard.style.display = "none";
  thankYouCard.style.display = "block";
  selectedRating.innerHTML = `You selected ${rating + 1} out of 5`;
});
