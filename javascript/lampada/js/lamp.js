const turnOn = document.getElementById("turn-on");
const lamp = document.getElementById("lamp");
const turnOff = document.getElementById("turn-off");

let lightOn = false;

turnOn.addEventListener("click", () => {
  lightOn = !lightOn;
  if (lightOn) {
    lamp.src = "/img/ligada.jpg";
  } else {
    lamp.src = "/img/desligada.jpg";
  }
});
