const numInput = document.getElementById("num-input");
const playBtn = document.getElementById("play");

playBtn.addEventListener("click", () => {
  let num = numInput.value;
  alert(num);
  numInput.value = "";
});
