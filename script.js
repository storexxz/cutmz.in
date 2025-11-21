// Section switching
function showSection(sectionID) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(sectionID).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}
