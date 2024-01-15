 // Call showPopup() when the page is loaded
 document.addEventListener("DOMContentLoaded", function() {
    showPopup();
  });

  function showPopup() {
    Swal.fire({
      icon: "question",
      title: "Your Name?",
      input: "text",
      text: "nickname",
      showCancelButton: true,
      confirmButtonText: "Submit",
    }).then((result) => {
      if (result.isConfirmed) {
        const newName = result.value;
        if (newName) {
          updateHeroTitle(newName);
        } else {
          showPopup(); // Panggil kembali fungsi untuk meminta input lagi
        }
      }
    });
  }

  function updateHeroTitle(newName) {
    const heroTitle = document.getElementById("hero-title");
    heroTitle.innerText = `Hello ${newName}!`;
  }