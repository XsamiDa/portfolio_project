document.addEventListener('click', function(e){
  if(e.target.matches('.open')){
    const id = e.target.dataset.project;
    openModal(id);
  }
});
function openModal(id){
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  const data = {
    "1": {
      title: "Личный сайт",
      body: "<p>проект 1. Технологии: HTML, CSS.</p><p><a href='https://xsamida.github.io/frontend-and-backend-practice'>Перейти на сайт</a></p>"
    },
    "2": {
      title: "Лагерь для взрослых - Artful Solution",
      body: "<p>проект 2. Технологии: HTML, CSS.</p><p><a href='#'>Перейти на сайт</a></p>"
    },
    "3": {
      title: "Интернет-магазин",
      body: "<p>проект 3. Технологии: React. *в разработке</p><p><a href='#'>Исходный код</a></p>"
    }
  };
  content.innerHTML = '<h3 style="color:var(--accent)">'+data[id].title+'</h3>' + data[id].body;
  modal.setAttribute('aria-hidden','false');
  document.getElementById('closeModal').focus();
}
document.getElementById('closeModal')?.addEventListener('click', function(){
  document.getElementById('modal').setAttribute('aria-hidden','true');
});
document.addEventListener('keydown', function(e){
  if(e.key==='Escape') document.getElementById('modal')?.setAttribute('aria-hidden','true');
});
