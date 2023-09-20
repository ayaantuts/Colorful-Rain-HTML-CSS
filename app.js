for (let i = 1; i <= 100; i++) {
	let r = document.createElement("div");
	r.classList.add('drop');
	r.style.setProperty("--i", Math.floor(Math.random() * 100));
	r.style.setProperty("--dur", Math.floor(Math.random() * 5) + 2 + "s");
	r.style.setProperty("--width", Math.floor(Math.random() * 2) + 2 + "px");
	r.style.setProperty("--height", Math.floor(Math.random() * 100) + 20 + "px");
	r.style.setProperty("--left", Math.floor(Math.random() * 100) + "vw");
	let red, green, blue;
	red = 127 + Math.floor(Math.random() * 128);
	green = 127 + Math.floor(Math.random() * 128);
	blue = 127 + Math.floor(Math.random() * 128);
	r.style.setProperty("--bg", "#"+red.toString(16)+green.toString(16)+blue.toString(16));
	document.body.appendChild(r);
	delete r, red, green, blue;
}

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

window.addEventListener('mousemove', (e) => {
	cursor.style = `left: ${e.clientX}px; top: ${e.clientY}px`;
	cursor2.style = `left: ${e.clientX}px; top: ${e.clientY}px`;
});

