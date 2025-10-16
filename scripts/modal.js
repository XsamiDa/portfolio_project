document.addEventListener('click', function (e) {
  if (e.target.matches('.open')) {
    const id = e.target.dataset.project;
    const modal = document.getElementById('modal');
    const content = document.getElementById('modalContent');
    content.innerHTML = '<h3 style="color:var(--accent)">Детали проекта ' + id + '</h3><p>Описание проекта №' + id + '</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tenetur totam qui earum beatae distinctio alias maiores, inventore at aspernatur sint non quos illum atque? Laborum non officia voluptatem tempora.</p>';
    modal.setAttribute('aria-hidden', 'false');
  }
});
document.addEventListener('click', function (e) {
  if (e.target.matches('#closeModal')) document.getElementById('modal').setAttribute('aria-hidden', 'true');
});
