function toggleTopButtons33() {
    const For1 = document.getElementById('For1');
    const For2 = document.getElementById('For2');

    if(window.scrollY > 300) {
        For1.style.display = 'block'
        For2.style.display = 'block'
    }  else {
        For1.style.display = 'none'
        For2.style.display = 'none'
    }
}


// Викликаємо при скролі
window.addEventListener("scroll", toggleTopButtons33);

 function scrollToTop1() {
  window.scrollTo({top: 0, behavior: "smooth"})
 }

 function scrollToTop2() {
  window.scrollTo({top: 0, behavior: "smooth"})
 }


 const selected = document.querySelector('.selected-option');
 const options = document.querySelector('.options');
 const Alloption = document.querySelectorAll('.option');
 const uaElement = document.querySelectorAll('.ua');
 const ueElement = document.querySelectorAll('.ue');

 selected.addEventListener('click', () => {
    options.classList.toggle('hidden');

 });

 Alloption.forEach(option => {
    option.addEventListener('click', () => {
    const logo = option.getAttribute('data-lang')
    selected.innerHTML = option.innerHTML
    options.classList.add('hidden');

    if(logo === 'ua') {
    uaElement.forEach(at => at.classList.remove('hidden'));
    ueElement.forEach(at => at.classList.add('hidden'))
    } else {
    uaElement.forEach(at => at.classList.add('hidden'))
    ueElement.forEach(at => at.classList.remove('hidden'));
    }
    })

    
 })