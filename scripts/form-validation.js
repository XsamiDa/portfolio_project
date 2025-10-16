// form-validation.js - simple client-side form handling and localStorage for diary
document.addEventListener('DOMContentLoaded', function(){
  const entryForm = document.getElementById('entryForm');
  if(entryForm){
    entryForm.addEventListener('submit', function(e){
      e.preventDefault();
      const date = document.getElementById('eDate').value;
      const title = document.getElementById('eTitle').value;
      const text = document.getElementById('eText').value;
      const list = document.getElementById('entries');
      const li = document.createElement('li');
      li.innerHTML = '<strong>'+date+'</strong> — '+ title;
      list.prepend(li);
      entryForm.reset();
    });
  }

  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      if(!contactForm.checkValidity()){
        e.preventDefault();
        alert('Заполните все поля корректно');
      } else {
        e.preventDefault();
        alert('Форма отправлена (симуляция)');
        contactForm.reset();
      }
    });
  }
});
