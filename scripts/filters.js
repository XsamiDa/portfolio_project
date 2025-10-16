// filters.js - simple client-side filtering
document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('#projectsGrid .card');
  buttons.forEach(b=>{
    b.addEventListener('click', ()=>{
      buttons.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const f = b.dataset.filter;
      cards.forEach(c=>{
        if(f==='all') c.style.display='block';
        else c.style.display = (c.dataset.tags && c.dataset.tags.includes(f)) ? 'block' : 'none';
      });
    });
  });
});
