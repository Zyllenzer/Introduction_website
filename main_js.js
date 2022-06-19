const burger_toggle = document.getElementById("Nav_burger_tog");
const navbar_target = document.getElementById("upper_nav_menu");

burger_toggle.addEventListener("click", function () {
  navbar_target.classList.toggle("is-active");
});
const nav_to_modal = document.querySelectorAll("#other_navbar_item");
btn_modal = nav_to_modal[2];
const modal_back = document.getElementById("mdbg_target");

console.log(btn_modal);

const modal_target = document.getElementById("modal_target");
btn_modal.addEventListener("click", function () {
  modal_target.classList.toggle("is-active");
});
modal_back.addEventListener("click", function () {
  modal_target.classList.remove("is-active");
});

const btn_nav = document.getElementById("button_navbar");
btn_nav.addEventListener("click", function () {
  alert("ac0zylle0webdev@gmail.com");
});
