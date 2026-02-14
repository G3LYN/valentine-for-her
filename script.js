const btn = document.getElementById("startBtn");
const scene = document.getElementById("scene");

btn.onclick = () => {
    btn.style.display = "none";
    scene.classList.remove("hidden");
};
