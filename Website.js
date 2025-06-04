// Toggle accordion visibility (expand/collapse content)
function toggleAccordion(header) {
  const content = header.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Toggle paragraph ↔ bullet view in a specific section
function toggleView(button) {
  const section = button.closest('.accordion-content');
  const paragraphView = section.querySelector('.paragraph-view');
  const bulletView = section.querySelector('.bullet-view');

  const isParagraphVisible = paragraphView.style.display !== 'none';

  paragraphView.style.display = isParagraphVisible ? 'none' : 'block';
  bulletView.style.display = isParagraphVisible ? 'block' : 'none';

  // Optional: update button text
  button.textContent = isParagraphVisible ? 'Switch to Paragraph View' : 'Switch to Bullet Points';
}

// Global toggle for all sections
let globalBulletMode = false;

function toggleAll() {
  globalBulletMode = !globalBulletMode;

  const allSections = document.querySelectorAll('.accordion-content');
  allSections.forEach(section => {
    const paragraphView = section.querySelector('.paragraph-view');
    const bulletView = section.querySelector('.bullet-view');
    const toggleButton = section.querySelector('button');

    if (paragraphView && bulletView) {
      paragraphView.style.display = globalBulletMode ? 'none' : 'block';
      bulletView.style.display = globalBulletMode ? 'block' : 'none';

      // Update individual button label
      if (toggleButton) {
        toggleButton.textContent = globalBulletMode ? 'Switch to Paragraph View' : 'Switch to Bullet Points';
      }
    }
  });

  // Optionally change the main toggle button text
  const mainButton = document.querySelector('button[onclick="toggleAll()"]');
  if (mainButton) {
    mainButton.textContent = globalBulletMode ? 'Switch to Paragraph View' : 'Switch to Bullet Points';
  }
}

// Background mode toggle
  function toggleBackground() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  }

  // Optional: Set default mode
  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("light-mode");
  });