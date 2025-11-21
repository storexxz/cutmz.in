// Section switching
function showSection(sectionID) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(sectionID).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Falling leaves
for(let i=0; i<15; i++){
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random() * window.innerWidth + 'px';
    leaf.style.animationDuration = (5 + Math.random() * 5) + 's';
    leaf.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(leaf);
}
