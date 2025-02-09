document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('active');
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  document.body.classList.toggle('light-mode', savedTheme === 'light');
  if (themeToggle) themeToggle.checked = savedTheme === 'light';

  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      document.body.classList.toggle('light-mode');
      localStorage.setItem('theme', themeToggle.checked ? 'light' : 'dark');
    });
  }

  // Dropdown functionality
  document.querySelectorAll('.portfolio-dropdown').forEach(dropdown => {
    const content = dropdown.querySelector('.dropdown-content');
    const chevron = dropdown.querySelector('.fa-chevron-down');
    const button = dropdown.querySelector('.dropdown-btn');

    // Ensure dropdowns are pre-expanded on page load
    content.classList.add('active');
    chevron.classList.add('fa-rotate-180');

    // Toggle dropdown on click
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      content.classList.toggle('active');
      chevron.classList.toggle('fa-rotate-180');

      // Close other dropdowns
      document.querySelectorAll('.portfolio-dropdown').forEach(other => {
        if (other !== dropdown) {
          other.querySelector('.dropdown-content').classList.remove('active');
          other.querySelector('.fa-chevron-down').classList.remove('fa-rotate-180');
        }
      });
    });
  });

  // Video hover play
  document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('mouseenter', () => {
      const video = thumbnail.querySelector('video');
      video.play();
    });
    
    thumbnail.addEventListener('mouseleave', () => {
      const video = thumbnail.querySelector('video');
      video.pause();
      video.currentTime = 0;
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.portfolio-dropdown')) {
      document.querySelectorAll('.dropdown-content').forEach(content => {
        content.classList.remove('active');
      });
      document.querySelectorAll('.fa-chevron-down').forEach(chevron => {
        chevron.classList.remove('fa-rotate-180');
      });
    }
  });

  // Sync theme toggles
  const themeToggles = document.querySelectorAll('input[type="checkbox"][id^="themeToggle"]');
  themeToggles.forEach(toggle => {
      toggle.addEventListener('change', (e) => {
          const isDark = e.target.checked;
          document.body.classList.toggle('light-mode', !isDark);
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
          
          // Sync all toggles
          themeToggles.forEach(t => t.checked = isDark);
      });
  });
});

// Image Modal Functionality
const designItems = document.querySelectorAll('.design-item');
const imageModal = document.createElement('div');
imageModal.className = 'image-modal';
imageModal.innerHTML = `
    <span class="close-modal">&times;</span>
    <img class="modal-image" src="" alt="Enlarged Design">
`;

document.body.appendChild(imageModal);

// Open modal on image click
designItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const imgSrc = item.querySelector('img').src;
        const modalImg = imageModal.querySelector('.modal-image');
        
        // Reset scale before showing new image
        modalImg.style.transform = 'scale(0.8)';
        modalImg.src = imgSrc;
        
        document.body.classList.add('modal-open');
        imageModal.classList.add('active');
    });
});

// Close modal
imageModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('image-modal') || 
        e.target.classList.contains('close-modal')) {
        document.body.classList.remove('modal-open');
        imageModal.classList.remove('active');
    }
});

// Close with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.classList.contains('active')) {
        document.body.classList.remove('modal-open');
        imageModal.classList.remove('active');
    }
});

// Handle image loading state
imageModal.querySelector('.modal-image').addEventListener('load', function() {
    this.style.transform = 'scale(1)';
});