const turnOn = document.getElementById("turn-on");
const lamp = document.getElementById("lamp");
const turnOff = document.getElementById("turn-off");

let lightOn = false;

turnOn.addEventListener("click", () => {
  lightOn = true;
  if (lightOn) {
    lamp.src = "/img/ligada.jpg";
  }
});

turnOff.addEventListener("click", () => {
  if (lightOn) {
    lightOn = false;
  }
  if (lightOn === false) {
    lamp.src = "/img/desligada.jpg";
  }
});
