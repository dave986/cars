const canvas = document.getElementById('myCanvas');
canvas.width = 200;

const ctx = canvas.getContext('2d');
const car = new Car(100, 100, 30, 50);

animate();

function animate() {
    canvas.height = window.innerHeight;  // causes the canvas to resize and also clear
    car.update();
    car.draw(ctx);
    requestAnimationFrame(animate);
}