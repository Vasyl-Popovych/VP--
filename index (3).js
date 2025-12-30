function scrollToTopButton() {
const for1 = document.getElementById('for1');
const for2 = document.getElementById('for2');


if(window.scrollY > 300) {
  for1.style.display = 'block'
  for2.style.display = 'block'
} else {
  for1.style.display = 'none'
  for2.style.display = 'none'
}
}

window.addEventListener('scroll', scrollToTopButton) 

function Vasiko1() {
  window.scrollTo({top:0, behavior: 'smooth'})
}

function Vasiko1() {
  window.scrollTo({top:0, behavior: 'smooth'})
}


const selected = document.querySelector('.selected-option');
const options = document.querySelector('.options');
const Alloption = document.querySelectorAll('.option');
const uaElement = document.querySelectorAll('.ua');
const ueElement = document.querySelectorAll('.ue');
const contents = document.querySelectorAll('.content'); // всі блоки з текстом

selected.addEventListener('click', () => {
  options.classList.toggle('hidden');
});

Alloption.forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.getAttribute('data-lang');
    selected.innerHTML = option.innerHTML;
    options.classList.add('hidden');

    // Перемикання мов
    if (lang === 'ua') {
      uaElement.forEach(el => el.classList.remove('hidden'));
      ueElement.forEach(el => el.classList.add('hidden'));

      // ховаємо ВСІ контенти, щоб вони не були відкритими
      document.querySelectorAll('.content.ua').forEach(c => c.classList.add('hidden'))
    } else {
      ueElement.forEach(el => el.classList.remove('hidden'));
      uaElement.forEach(el => el.classList.add('hidden'));

      // ховаємо ВСІ контенти англійською
      document.querySelectorAll('.content.ue').forEach(c => c.classList.add('hidden'))
    }
  });
});



const toggle = document.querySelectorAll('.toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const gol = btn.nextElementSibling;
    gol.classList.toggle('hidden')
  })
})