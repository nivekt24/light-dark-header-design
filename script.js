const sunMoonContainer = document.querySelector('.sun-moon-container');
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue('--rotation')
  );
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
});
