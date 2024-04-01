document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear(); // Gets the current year

  const footerHtml = `
      <footer class="bg-gray-800 text-white text-center p-4">
        <div class="flex flex-col md:flex-row justify-center items-center">
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
          
        </div>
        <div class="mt-4">
          © ${currentYear} Biz Grow Digital. All rights reserved.
        </div>
        <div class="space-x-4 md:mt-0 mt-4">
            <a href="./../pages/faq.html" class="hover:underline">Privacy Policy</a>
            <a href="./../pages/blog.html" class="hover:underline">Terms of Service</a>
          </div>
      </footer>
    `;

  document.body.insertAdjacentHTML("beforeend", footerHtml);
});
