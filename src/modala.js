const button = document.querySelector(".main_catalog_buy-now_button");
const backdrop = document.querySelector(".modal-main_container");

button.addEventListener("click", toggleModal);

backdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".btn-close-modal");

  if (!target) {
    return;
  }
  toggleModal();
});

function toggleModal() {
  backdrop.classList.toggle("is-open");
}