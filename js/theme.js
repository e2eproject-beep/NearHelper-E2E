// Apply Saved Theme on Every Page
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

// Function to toggle theme from Settings Page
function toggleThemeFromSettings() {
    const body = document.body;
    const isDark = body.classList.toggle("dark-mode");

    // Save theme preference globally
    localStorage.setItem("theme", isDark ? "dark" : "light");
}
