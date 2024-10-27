const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("menu--expanded"); // Toggle the expanded class
}

// Common Questions collapeisble code
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.classList.contains("active");

    document.querySelectorAll(".faq-answer").forEach((item) => {
      item.classList.remove("active");
      item.previousElementSibling.classList.remove("active");
    });

    if (!isOpen) {
      answer.classList.add("active");
      question.classList.add("active");
    }
  });
});

// collapsible logic for the footer sections
document.addEventListener("DOMContentLoaded", function () {
  const footerSections = document.querySelectorAll(".footer-section h3");

  footerSections.forEach((section) => {
    section.addEventListener("click", function () {
      this.classList.toggle("collapsible--expanded");
      const content = this.nextElementSibling;
      content.classList.toggle("active");

      // Toggle dropdown arrow rotation
      const dropdown = this.querySelector(".dropdown");
      if (content.classList.contains("active")) {
        dropdown.style.transform = "rotate(90deg)"; // Rotate down arrow when expanded
      } else {
        dropdown.style.transform = "rotate(0deg)"; // Reset rotation when collapsed
      }
    });
  });
});

// Initialize counts for wishlist and cart
let wishlistCount = 1;
let cartCount = 1;

// Function to update the badge numbers dynamically
function updateBadges() {
  // Select the badge elements
  const wishlistBadge = document.querySelector(".wishlist .icon-badge");
  const cartBadge = document.querySelector(".cart .icon-badge");

  // Update the text content of each badge with the current count
  wishlistBadge.textContent = wishlistCount;
  cartBadge.textContent = cartCount;
}

// Functions to increase/decrease the wishlist count
function increaseWishlistCount() {
  wishlistCount++;
  updateBadges();
}

function decreaseWishlistCount() {
  if (wishlistCount > 0) {
    wishlistCount--;
  }
  updateBadges();
}

// Functions to increase/decrease the cart count
function increaseCartCount() {
  cartCount++;
  updateBadges();
}

function decreaseCartCount() {
  if (cartCount > 0) {
    cartCount--;
  }
  updateBadges();
}

// Initial call to set the badge values when the page loads
updateBadges();
