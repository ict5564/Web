// Smooth scroll for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// EmailJS contact form integration with new credentials
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_ehj8lrs", "template_9z0071d", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("❌ Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    });
});
