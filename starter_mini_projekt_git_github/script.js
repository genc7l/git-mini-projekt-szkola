const tasks = document.querySelectorAll('.task');
const progress = document.querySelector('#progress');

function updateProgress() {
  const checked = Array.from(tasks).filter((task) => task.checked).length;
  progress.textContent = `Zaznaczone zadania: ${checked}`;
}

tasks.forEach((task) => task.addEventListener('change', updateProgress));
updateProgress();

// Dopisz do script.js lub wykorzystaj jako inspirację.
console.log('Mini projekt Git działa poprawnie.');
