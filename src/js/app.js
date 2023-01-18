import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready



  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });



  let object = document.querySelector(".image");
  object.addEventListener("click", function()  {
    object.style.transform="scale(2)";
  });

  
});
