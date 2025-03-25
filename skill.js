    // JavaScript for tab switching and skill filtering
    document.addEventListener('DOMContentLoaded', function() {
        // Tab switching
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(button => {
          button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show selected tab content
            tabContents.forEach(content => {
              content.classList.remove('active');
              if (content.id === `${tabId}-tab`) {
                content.classList.add('active');
              }
            });
          });
        });
        
        // Skill filtering
        const filterButtons = document.querySelectorAll('.filter-button');
        const skillCards = document.querySelectorAll('.skill-card');
        
        filterButtons.forEach(button => {
          button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter skill cards
            skillCards.forEach(card => {
              if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
              } else {
                card.style.display = 'none';
              }
            });
          });
        });
        
        // Initialize animations on load
        const animateElements = document.querySelectorAll('.fade-in-up');
        animateElements.forEach(el => {
          el.classList.add('animated');
        });
      });