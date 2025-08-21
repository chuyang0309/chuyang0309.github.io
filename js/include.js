// include.js 
document.addEventListener("DOMContentLoaded", function () {
  // Function to load external HTML
  function loadHTML(elementId, filePath) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${filePath}: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
        // Dispatch a custom event when content is loaded
        document.dispatchEvent(new CustomEvent('contentLoaded', {
          detail: { elementId, filePath }
        }));
      })
      .catch(error => {
        console.error(error);
        document.getElementById(elementId).innerHTML = 
          `<div style="color: red; padding: 10px;">Error loading ${filePath}</div>`;
      });
  }

  // Load header and footer with correct relative paths
  loadHTML("header", "./header.html");
  loadHTML("footer", "./footer.html");
});