// Small interactions: nav toggle + contact form handling
document.getElementById('nav-toggle').addEventListener('click', function(){
  const nav = document.getElementById('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = 'Thanks! Your message was sent (demo).';
  this.reset();
});
