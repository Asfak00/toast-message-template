// show toast button & toast container element reference
const showToastMessage = document.getElementById("showToastMessage");
const toastContainer = document.getElementById("toastContainer");

// show toast button with adding click event
showToastMessage.addEventListener("click", () => {
  toastContainer.style.right = "2%";
  toastContainer.style.visibility = "visible";
  toastContainer.style.opacity = "1";
});

// toast container with adding click event
toastContainer.addEventListener("click", () => {
  toastContainer.style.right = "-300px";
  toastContainer.style.visibility = "hidden";
  toastContainer.style.opacity = "0";
});
