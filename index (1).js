function Vasl() {
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

window.addEventListener('scroll', Vasl)

function vad() {
    window.scrollTo({top: 0, behavior: 'smooth' })
}

function vad() {
    window.scrollTo({top: 0, behavior: 'smooth' })
}


const selected = document.querySelector('.selected-option');
const options = document.querySelector('.options');
const Alloption = document.querySelectorAll('.option');
const UaElement = document.querySelectorAll('.ua');
const UeElement = document.querySelectorAll('.ue');
const contents = document.querySelectorAll('.content');

selected.addEventListener('click', () => {
    options.classList.toggle('hidden')
});


Alloption.forEach(option => {
    option.addEventListener('click', () => {
        const gol = option.getAttribute('data-lang');
        selected.innerHTML = option.innerHTML
         options.classList.add('hidden')

    if(gol === 'ua') {
        UaElement.forEach(ad => ad.classList.remove('hidden'))
        UeElement.forEach(ad => ad.classList.add('hidden'));
        document.querySelectorAll('.content.ua').forEach(c => c.classList.add('hidden'))
    }  else {
        UaElement.forEach(ad => ad.classList.add('hidden'))
        UeElement.forEach(ad => ad.classList.remove('hidden'));
        document.querySelectorAll('.content.ue').forEach(c => c.classList.add('hidden'))
    }
    })

    
});

const toggle = document.querySelectorAll('.toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const gol = btn.nextElementSibling
        gol.classList.toggle('hidden')
    })
})