function myScript(element) {
    const card = element.querySelector('.card');
  
    // Πρόσθεσε τις animate.css κλάσεις
    card.classList.add('animate__animated', 'animate__fadeIn');
  
    // Όταν τελειώσει το animation, κάνε redirect
    card.addEventListener('animationend', () => {
      window.location.href = "food.html"; // άλλαξε εδώ το URL
    }, { once: true }); // το { once: true } για να τρέξει μόνο μια φορά
  }