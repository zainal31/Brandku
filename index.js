const ctaBtn = document.querySelector("#cta-btn");
const ctaFeedback = document.querySelector("#cta-feedback");

let counter = 0;

ctaBtn.addEventListener("click", () => {
	counter++;
	console.log("Jumlah klik:", counter);

	if (counter === 1) {
		ctaFeedback.classList.remove("hidden");
		ctaFeedback.textContent = "Halo harusnya muncul";
	} else if (counter === 2) {
		ctaFeedback.textContent = "Kamu sudah klik sebanyak 2 kali!";
	} else if (counter > 2) {
		ctaBtn.disabled = true;
		ctaFeedback.textContent = "Kamu sudah mencapai batas klik!";
	}
});
