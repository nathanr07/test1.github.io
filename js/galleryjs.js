// JavaScript for modal functionality
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const closeModal = document.querySelector(".modal-close");

    // Select all images with the class 'gallery-image'
    const images = document.querySelectorAll(".gallery-image");

    // Add click event for each image
    images.forEach((img) => {
        img.addEventListener("click", function() {
            modal.style.display = "flex"; // Show modal
            modalImg.src = this.src; // Set modal image source to the clicked image
        });
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener("click", function() {
        modal.style.display = "none"; // Hide modal
    });

    // Close modal when clicking outside of the image
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide modal
        }
    });
});
