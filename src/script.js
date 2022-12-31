var fires = document.getElementsByClassName("bgfireworks");
const options = [0.99, 1.05]

for (var i = 0; i < fires.length; i++) {
const fireworks = new Fireworks(fires[i], {
  hue: { min: 0, max: 360 },
  delay: { min: 30, max: 100 },
  brightness: { min: 80, max: 100 },
  rocketsPoint: 50,
  opacity: 1,
  speed: 1,
  acceleration: options[i],
  friction: 0.97,
  gravity: 2,
  particles: 200,
  trace: 10,
  explosion: 4
});
fireworks.start();
}

