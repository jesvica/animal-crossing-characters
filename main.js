// I want to click the animal crossing character and have their image come up
//When I click the character, I want their voice to play - maybe add on?

// Query Selectors
const puddles = document.querySelector('#puddles')
const rod = document.querySelector('#rod')
const sylvia = document.querySelector('#sylvia')
const soleil = document.querySelector('#soleil')
const canberra = document.querySelector('#canberra')
const lobo = document.querySelector('#lobo')
const megan = document.querySelector('#megan')
const monty = document.querySelector('#monty')
const henry = document.querySelector('#henry')
const erik = document.querySelector('#erik')


document.querySelector('#puddlesImage').addEventListener('click', puddlesImage)
document.querySelector('#rodImage').addEventListener('click', rodImage)
document.querySelector('#sylviaImage').addEventListener('click', sylviaImage)
document.querySelector('#soleilImage').addEventListener('click', soleilImage)
document.querySelector('#canberraImage').addEventListener('click', canberraImage)
document.querySelector('#loboImage').addEventListener('click', loboImage)
document.querySelector('#meganImage').addEventListener('click', meganImage)
document.querySelector('#montyImage').addEventListener('click', montyImage)
document.querySelector('#henryImage').addEventListener('click', henryImage)
document.querySelector('#erikImage').addEventListener('click', erikImage)

//Character Functions
function puddlesImage() {
    puddles.classList.toggle('hidden')
    rod.classList.add('hidden')
    sylvia.classList.add('hidden')
    soleil.classList.add('hidden')
    canberra.classList.add('hidden')
    lobo.classList.add('hidden')
    megan.classList.add('hidden')
    monty.classList.add('hidden')
    henry.classList.add('hidden')
    erik.classList.add('hidden')
}

function rodImage() {
    puddles.classList.add('hidden')
    rod.classList.toggle('hidden')
    sylvia.classList.add('hidden')
    soleil.classList.add('hidden')
    canberra.classList.add('hidden')
    lobo.classList.add('hidden')
    megan.classList.add('hidden')
    monty.classList.add('hidden')
    henry.classList.add('hidden')
    erik.classList.add('hidden')
}

function sylviaImage() {
    puddles.classList.add('hidden')
    rod.classList.add('hidden')
    sylvia.classList.toggle('hidden')
    soleil.classList.add('hidden')
    canberra.classList.add('hidden')
    lobo.classList.add('hidden')
    megan.classList.add('hidden')
    monty.classList.add('hidden')
    henry.classList.add('hidden')
    erik.classList.add('hidden')
}

function soleilImage() {
    puddles.classList.add('hidden')
    rod.classList.add('hidden')
    sylvia.classList.add('hidden')
    soleil.classList.toggle('hidden')
    canberra.classList.add('hidden')
    lobo.classList.add('hidden')
    megan.classList.add('hidden')
    monty.classList.add('hidden')
    henry.classList.add('hidden')
    erik.classList.add('hidden')
}

function canberraImage() {
    puddles.classList.add('hidden')
    rod.classList.add('hidden')
    sylvia.classList.add('hidden')
    soleil.classList.add('hidden')
    canberra.classList.toggle('hidden')
    lobo.classList.add('hidden')
    megan.classList.add('hidden')
    monty.classList.add('hidden')
    henry.classList.add('hidden')
    erik.classList.add('hidden')
}

function loboImage() {
    puddles.classList.add('hidden')
    rod.classList.add('hidden')
    sylvia.classList.add('hidden')
    soleil.classList.add('hidden')
    canberra.classList.add('hidden')
    lobo.classList.toggle('hidden')
    megan.classList.add('hidden')
    monty.classList.add('hidden')
    henry.classList.add('hidden')
    erik.classList.add('hidden')
}

function meganImage() {
    puddles.classList.add('hidden')
    rod.classList.add('hidden')
    sylvia.classList.add('hidden')
    soleil.classList.add('hidden')
    canberra.classList.add('hidden')
    lobo.classList.add('hidden')
    megan.classList.toggle('hidden')
    monty.classList.add('hidden')
    henry.classList.add('hidden')
    erik.classList.add('hidden')
}

function meganImage() {
    puddles.classList.add('hidden')
    rod.classList.add('hidden')
    sylvia.classList.add('hidden')
    soleil.classList.add('hidden')
    canberra.classList.add('hidden')
    lobo.classList.add('hidden')
    megan.classList.toggle('hidden')
    monty.classList.add('hidden')
    henry.classList.add('hidden')
    erik.classList.add('hidden')
}

function montyImage() {
    puddles.classList.add('hidden')
    rod.classList.add('hidden')
    sylvia.classList.add('hidden')
    soleil.classList.add('hidden')
    canberra.classList.add('hidden')
    lobo.classList.add('hidden')
    megan.classList.add('hidden')
    monty.classList.toggle('hidden')
    henry.classList.add('hidden')
    erik.classList.add('hidden')
}

function henryImage() {
    puddles.classList.add('hidden')
    rod.classList.add('hidden')
    sylvia.classList.add('hidden')
    soleil.classList.add('hidden')
    canberra.classList.add('hidden')
    lobo.classList.add('hidden')
    megan.classList.add('hidden')
    monty.classList.add('hidden')
    henry.classList.toggle('hidden')
    erik.classList.add('hidden')
}

function erikImage() {
    puddles.classList.add('hidden')
    rod.classList.add('hidden')
    sylvia.classList.add('hidden')
    soleil.classList.add('hidden')
    canberra.classList.add('hidden')
    lobo.classList.add('hidden')
    megan.classList.add('hidden')
    monty.classList.add('hidden')
    henry.classList.add('hidden')
    erik.classList.toggle('hidden')
}