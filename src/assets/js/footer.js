document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear(); // Gets the current year

  const footerHtml = `
      <footer class="bg-gray-800 text-white text-center p-4">
        <div class="flex flex-wrap justify-center items-center text-sm gap-8">
          <div class="mb-4 md:mb-0">
            <a href="index.html" class="flex items-center">
              <img src="./assets/images/logo.png" alt="Logo" class="h-36 mr-2">
            </a>
          </div>
          <div class="space-x-4 md:mt-0 mt-4">
            <a href="index.html" class="hover:underline">Home</a>
            <a href="booking.html" class="hover:underline">Booking</a>
            <a href="about.html" class="hover:underline">About</a>
            <a href="apply.html" class="hover:underline">Apply</a>
            <a href="services.html" class="hover:underline">Services</a>
            <a href="faq.html" class="hover:underline">FAQ</a>
          </div>
          <!-- Contact Information -->
          <div class="flex flex-col items-center md:items-start">
            <span>Email: contact@example.com</span>
            <span>Phone: +123 456 7890</span>
            <span>Address: 1234 Street Name, City</span>
          </div>
          <!-- Social Media Links -->
          <div class="flex flex-col items-center md:items-start">
            <span class="font-bold mb-2">Connect With Us</span>
            <a href="https://facebook.com" class="hover:underline">Facebook</a>
            <a href="https://twitter.com" class="hover:underline">Twitter</a>
            <a href="https://instagram.com" class="hover:underline">Instagram</a>
          </div>
        </div>
        <div class="mt-4">
          © ${currentYear} Biz Grow Digital. All rights reserved.
        </div>
        <div class="mt-4 space-x-4">
            <a href="privacy.html" class="hover:underline">Privacy Policy</a>
            <a href="terms.html" class="hover:underline">Terms of Service</a>
        </div>
      </footer>
    `;

  document.body.insertAdjacentHTML("beforeend", footerHtml);
});
