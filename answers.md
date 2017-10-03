(1)
var proPic = document.querySelector('.profile-image')
<img src=​"images/​self-portrait-grassbg.jpg" alt=​"Self Portrait" title=​"Self Portrait" class=​"profile-image">​
proPic.src = 'https://i.pinimg.com/originals/e5/94/12/e59412d16c98108be5d3077a3afe8819.jpg'
"https://i.pinimg.com/originals/e5/94/12/e59412d16c98108be5d3077a3afe8819.jpg"

(1)
var photoPic = document.querySelector('#left-image img')

<img src=​"images/​clouds-man.jpg" alt=​"Man Walking on Ice" title=​"Man Walking on Ice">​
photoPic.src = 'http://militarypartners.org/wp-content/uploads/2014/06/instagram-logo_325x325.png'

(2)
names = document.querySelector('div h1')
names.innerText = 'Joseph Bianchi'

(3)
var empTitle = document.querySelector('#employment .info-title')
empTitle.innerText = "Sicker than your average"

(4)
var hotBody = document.querySelector('body')
hotBody.background = 'black'

(5)
var eleHigh = document.querySelectorAll('.highlight')
for (var i = 0; i < eleHigh.length; i++) {
  eleHigh[i].style.color = 'orange'
}

(6)
var fontHead = document.querySelector('h1')
fontHead.style.font = 'monospace'

(7)
var actionIco = document.querySelectorAll('.action-icon-bg')
for (var i = 0; i < actionIco.length; i++) {
  actionIco[i].style.backgroundColor = 'yellow'
}

(8)
formPlace = document.querySelector('form #name')
formPlace.placeholder = 'Who goes there - name'

(9)
formPlace = document.querySelector('form #message')
formPlace.placeholder = 'state your business'

(10)
formName = document.querySelector('form #name')
formName.value = 'your nemesis'

(11)
formEmail = document.querySelector('form #email')
formEmail.value = 'nemesis@yahoo.com'

(12)
formSub = document.querySelector('#submit')
formSub.value = 'You Mad Bro'

(13)
formSub.disabled = 'true'
