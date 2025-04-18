document.querySelectorAll("#tokenDropdownBtn + .dropdown-menu .dropdown-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const btn = document.getElementById("tokenDropdownBtn");

    // Ambil elemen-elemen yang ingin diganti teksnya
    const tokenText = btn.querySelector(".token-text");
    const tokenSub = btn.querySelector(".token-sub");

    // Ambil konten dari item dropdown yang diklik
    const selectedToken = item.querySelector("span").textContent;
    const selectedSub = item.querySelector("small").textContent;

    // Update isi teks-nya saja
    tokenText.textContent = selectedToken;
    tokenSub.textContent = selectedSub;

    // Simpan value terpilih
    btn.setAttribute("data-selected", item.dataset.value);
  });
});

document.querySelectorAll("#tokenDropdownBtnSend + .dropdown-menu .dropdown-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const btn = document.getElementById("tokenDropdownBtnSend");

    // Ambil elemen token
    const tokenText = btn.querySelector(".token-text");
    const tokenSub = btn.querySelector(".token-sub");

    // Update isinya
    tokenText.textContent = item.querySelector("span").textContent;
    tokenSub.textContent = item.querySelector("small").textContent;

    // Simpan data terpilih
    btn.setAttribute("data-selected", item.dataset.value);
  });
});

// Steps
function toggleStep(stepNum) {
  const header = document.getElementById(`step${stepNum}Header`);
  const toggle = document.getElementById(`step${stepNum}Toggle`);
  const card = toggle.closest(".step-card");
  const isExpanded = !header.classList.contains("d-none");

  if (isExpanded) {
    header.classList.add("d-none");
    toggle.classList.remove("d-none");
    card.classList.remove("active-step");
  } else {
    // Optional: auto-close others
    document.querySelectorAll(".step-card").forEach((el, i) => {
      el.classList.remove("active-step");
      document.getElementById(`step${i + 1}Header`).classList.add("d-none");
      document.getElementById(`step${i + 1}Toggle`).classList.remove("d-none");
    });

    header.classList.remove("d-none");
    toggle.classList.add("d-none");
    card.classList.add("active-step");
  }
}
