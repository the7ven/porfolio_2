document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.hidden');
  
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('reveal');
        }
       
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();  
  });


 