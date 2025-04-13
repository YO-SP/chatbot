// Global theme management
document.addEventListener('DOMContentLoaded', () => {
  const isDark = localStorage.getItem("theme") === "dark";
  if (isDark) {
    document.body.classList.add("dark-mode");
    const btn = document.getElementById("toggleModeBtn");
    if (btn) btn.innerHTML = "☀️ Light Mode";
  }
  
  const toggleBtn = document.getElementById("toggleModeBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleDarkMode);
  }
});

function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById("toggleModeBtn");
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  if (btn) btn.innerHTML = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('/')) {
      e.preventDefault();
      document.body.style.opacity = 0;
      
      setTimeout(() => {
        window.location.href = this.getAttribute('href');
      }, 300);
    }
  });
});

window.addEventListener('load', () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);
});