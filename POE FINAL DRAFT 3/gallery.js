"use strict";

const gallery = document.querySelector(".gallery-grid");
const lightbox = document.querySelector(".gallery-lightbox");
const lightboxImage = document.querySelector(".gallery-lightbox__image");
const lightboxCaption = document.querySelector(".gallery-lightbox__caption");
const closeButton = document.querySelector(".gallery-lightbox__close");
let activeImageButton = null;

gallery.addEventListener("click", (event) => {
    const imageButton = event.target.closest(".gallery-image-button");
    if (!imageButton) {
        return;
    }

    const image = imageButton.querySelector("img");
    activeImageButton = imageButton;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxImage.removeAttribute("aria-hidden");
    lightboxCaption.textContent = image.alt;
    lightbox.showModal();
    closeButton.focus();
});

closeButton.addEventListener("click", () => {
    lightbox.close();
});

lightbox.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        event.preventDefault();
        lightbox.close();
    }
});

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.close();
    }
});

lightbox.addEventListener("close", () => {
    activeImageButton?.focus();
    activeImageButton = null;
});
