//icon
const icons = document.querySelectorAll('.fa-beat');
const randomIcon = icons[Math.floor(Math.random() * icons.length)];
randomIcon.classList.add('show-icon');
