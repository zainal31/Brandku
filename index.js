const ctaBtn = document.querySelector("#cta-btn");
const ctaFeedback = document.querySelector("#cta-feedback");

let counter = 0;

ctaBtn.addEventListener("click", () => {
  counter++;
  console.log(counter);

  ctaFeedback.classList.remove("hidden");
  ctaFeedback.textContent = "Halo harusnya muncul";
});
