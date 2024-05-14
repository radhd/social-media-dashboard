const html = document.getElementsByTagName("html")[0];
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
