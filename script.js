var wrapper = document.getElementById('wrapper');

document.addEventListener('click', function (event) {
  if (!event.target.matches('.list')) return;

  // List view
  event.preventDefault();
  wrapper.classList.add('list');
});

document.addEventListener('click', function (event) {
  if (!event.target.matches('.grid')) return;

  // List view
  event.preventDefault();
  wrapper.classList.remove('list');
});
