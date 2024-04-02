document.addEventListener("DOMContentLoaded", () => {
  const navbarHtml = `
          <nav class="sticky top-0 z-50 bg-white shadow">
            <div class="max-w-6xl mx-auto px-4">
              <div class="flex justify-between">
                <div class="flex space-x-4">
                  <!-- Logo -->
                  <div>
                    <a href="index.html" class="flex items-center py-5 px-2 text-gray-700">
                      <img src="./assets/images/logo.png" alt="Logo" class="h-36 mr-2"> <!-- Adjusted logo path & size -->
                    </a>
                  </div>
                </div>
                <!-- Primary Navbar items -->
                <div class="hidden md:flex items-center space-x-1">
                  <a href="index.html" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
                  <a href="apply.html" class="py-5 px-3 text-gray-700 hover:text-gray-900">Careers</a>
                  <a href="faq.html" class="py-5 px-3 text-gray-700 hover:text-gray-900">FAQ</a>
                  <!-- Adjusted paths for simplicity -->
                  <a href="booking.html" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Get Started</a>
                </div>
                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                  <button class="mobile-menu-button">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                  </button>
                </div>
              </div>
            </div>
            <!-- Mobile Menu -->
            <div class="mobile-menu hidden md:hidden">
              <a href="index.html" class="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
              <!-- Adjust as necessary for mobile -->
            </div>
          </nav>
        `;

  document.getElementById("navbar").innerHTML = navbarHtml;

  // Mobile menu toggle
  document
    .querySelector(".mobile-menu-button")
    .addEventListener("click", () => {
      document.querySelector(".mobile-menu").classList.toggle("hidden");
    });
});
