// This is a simple front-end check for demo purposes
// For real security, use Gumroad API or serverless function
const validKeys = ["ABC123", "DEF456", "GHI789"]; // Replace with your Gumroad keys

function checkLicense() {
  const key = document.getElementById("licenseKey").value.trim();
  const error = document.getElementById("error");
  const content = document.getElementById("secretContent");

  if (validKeys.includes(key)) {
    document.getElementById("license-check").style.display = "none";
    content.style.display = "block";
  } else {
    error.textContent = "Invalid license key. Please check your email for the correct key.";
  }
}
