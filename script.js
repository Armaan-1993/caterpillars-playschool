// =====================================
// NAVBAR SHADOW
// =====================================

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    } else {
      navbar.style.boxShadow = "none";
    }
  }
});

// =====================================
// GALLERY LIGHTBOX
// =====================================

document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery-item img");

  const lightbox = document.getElementById("lightbox");

  const lightboxImage = document.getElementById("lightbox-image");

  const closeLightbox = document.querySelector(".close-lightbox");

  // SAFETY CHECK

  if (!galleryImages.length || !lightbox || !lightboxImage || !closeLightbox) {
    console.error("Lightbox elements missing");
    return;
  }

  // OPEN LIGHTBOX

  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.classList.add("active");

      lightboxImage.src = image.src;
    });
  });

  // CLOSE BUTTON

  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  // CLICK OUTSIDE IMAGE

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImage) {
      lightbox.classList.remove("active");
    }
  });
});

// =====================================
// MAPS EMBEDDING PREVIEW
// =====================================

const mapPreview = document.getElementById("mapPreview");
const mapContainer = document.getElementById("mapContainer");

mapPreview.addEventListener("click", () => {
  mapContainer.innerHTML = `
    <iframe
      title="Google Map showing Caterpillars Playschool location"
      src="https://maps.google.com/maps?q=Caterpillars%20Play%20School%20Kozhencherry&t=&z=15&ie=UTF8&iwloc=&output=embed"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  `;

  mapPreview.style.display = "none";
});
