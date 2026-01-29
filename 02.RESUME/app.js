function downloadPDF() {
  window.print();
}

// Keyboard shortcut: Ctrl + P
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "p") {
    window.print();
  }
});
