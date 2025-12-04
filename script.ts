/* ARTIST DATA */
const artists = [
    {
        name: "The Weeknd",
        img: "assets/artist1.jpg",
        bio: "A Canadian singer known for atmospheric R&B and global hits.",
        music: "https://www.youtube.com/embed/34Na4j8AVgA"
    },
    {
        name: "Billie Eilish",
        img: "assets/artist2.jpg",
        bio: "Singer-songwriter known for whispery vocals and dark pop.",
        music: "https://www.youtube.com/embed/egmwV2i8kZk"
    },
    {
        name: "Drake",
        img: "assets/artist3.jpg",
        bio: "One of the world's most influential hip-hop artists.",
        music: "https://www.youtube.com/embed/xpVfcZ0ZcFM"
    }
];

/* CREATE ARTIST CIRCLES */
const wheel = document.getElementById("wheel");
const radius = 120;

artists.forEach((a, i) => {
    let angle = (i / artists.length) * (Math.PI * 2);

    let circle = document.createElement("div");
    circle.className = "circle";
    circle.innerText = a.name;

    // Position the circles in a wheel shape
    circle.style.left = (140 + Math.cos(angle) * radius) + "px";
    circle.style.top = (140 + Math.sin(angle) * radius) + "px";

    // Add click event
    circle.addEventListener("click", () => {
        document.getElementById("artist-name").innerText = a.name;
        document.getElementById("artist-bio").innerText = a.bio;
        document.getElementById("artist-img").src = a.img;
        document.getElementById("artist-player").src = a.music;
    });

    wheel.appendChild(circle);
});

/* ROTATION LOGIC */
let isDragging = false;
let lastX = 0;
let rotation = 0;

wheel.addEventListener("mousedown", e => {
    isDragging = true;
    lastX = e.clientX;
});

document.addEventListener("mouseup", () => isDragging = false);

document.addEventListener("mousemove", e => {
    if (!isDragging) return;

    const dx = e.clientX - lastX;
    lastX = e.clientX;

    rotation += dx * 0.3;
    wheel.style.transform = `rotate(${rotation}deg)`;

    // rotate children in opposite direction to stay upright
    Array.from(wheel.children).forEach(child => {
        child.style.transform = `rotate(${-rotation}deg)`;
    });
});
