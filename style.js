var hamburger = document.querySelector('.burger')
var mobileLinks = document.querySelector('.mobile-menu-links')
var backdrop = document.querySelector('.backdrop')

function Addclass() {
    hamburger.classList.toggle('show')
    mobileLinks.classList.toggle('showlinks')
    backdrop.classList.toggle('showlinks')
}

//For auto complete and dropdown in search bar
let availableKeywords = [
    'Single room',
    'Shared room',
    'Bunk room',
    'Self-contain',
    'Room & Parlour',
    'Stydio',
    'En-suite',
    'Mini flat',
];

//To display above words in the search box
const resultsBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = function(){
    let result = availableKeywords;
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selesctInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selesctInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
