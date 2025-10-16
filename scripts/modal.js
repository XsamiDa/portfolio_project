// modal.js - make modal accessible on pages that include it
document.addEventListener('click', function(e){
  if(e.target.matches('.open')){
    const id = e.target.dataset.project;
    const modal = document.getElementById('modal');
    const content = document.getElementById('modalContent');
    content.innerHTML = '<h3 style="color:var(--accent)">Детали проекта '+id+'</h3><p>Описание проекта №'+id+'</p>';
    modal.setAttribute('aria-hidden','false');
  }
});
document.addEventListener('click', function(e){
  if(e.target.matches('#closeModal')) document.getElementById('modal').setAttribute('aria-hidden','true');
});
