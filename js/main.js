// @ts-nocheck
var items = document.querySelectorAll(".item");

function activeItem() {
    items.forEach((e) =>
        e.classList.remove("active"));
    this.classList.add("active");
}
items.forEach((item) =>
    item.addEventListener("click", activeItem)
);