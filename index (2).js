function scrollToTopButton() {
  const for1 = document.getElementById('for1');
  const for2 = document.getElementById('for2');

  if(window.scrollY > 320) {
    for1.style.display = 'block'
    for2.style.display = 'block'
  } else {
    for1.style.display = 'none'
    for2.style.display = 'none'
  }

 
}

 window.addEventListener('scroll', scrollToTopButton)

  function scrollToTop1() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

    function scrollToTop1() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }



  const selected = document.querySelector('.selected-option');
  const options = document.querySelector('.options');
  const Alloption = document.querySelectorAll('.option');
  const uaElement = document.querySelectorAll('.ua');
  const ueElement = document.querySelectorAll('.ue');
  const contents = document.querySelectorAll('.content')

  selected.addEventListener('click', () => {
    options.classList.toggle('hidden');
  });

 Alloption.forEach(option => {
  option.addEventListener('click', () => {
    const logo = option.getAttribute('data-lang');
    selected.innerHTML = option.innerHTML 
    options.classList.add('hidden')

    if(logo === 'ua') {
      uaElement.forEach(at => at.classList.remove('hidden'));
      ueElement.forEach(at => at.classList.add('hidden'));

      document.querySelectorAll('.content.ua').forEach(c => c.classList.add('hidden'))
    } else {
      ueElement.forEach(at => at.classList.remove('hidden'));
      uaElement.forEach(at => at.classList.add('hidden'));

      document.querySelectorAll('.content.ue').forEach(c => c.classList.add('hidden'))
    }
  });
 });



document.querySelectorAll('.toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const Botn = btn.nextElementSibling
    Botn.classList.toggle('hidden')
  })
})