var hamburger = document.querySelector('.burger')
var mobileLinks = document.querySelector('.mobile-menu-links')
var backdrop = document.querySelector('.backdrop')

function Addclass() {
    hamburger.classList.toggle('show')
    mobileLinks.classList.toggle('showlinks')
    backdrop.classList.toggle('showlinks')
}


//code for the ratings 

//Get all stars and product
let stars = document.querySelectorAll(".ratings span");
let products = document.querySelectorAll(".ratings");
let ratings = [];

for(let star of stars){
    star.addEventListener("click", function(){
        let children = star.parentElement.children;
        for(let child  of children){
            if(child.getAttribute("data-clicked")){
                return false;
            }
        }

        this.setAttribute("data-clicked", "true");
        let rating = this.dataset.rating;
        let productid = this.parentElement.dataset.productid;

        let data = {
            "stars": rating,
            "product-id": productid
        }
        ratings.push(data);
        localStorage.setItem("rating", JSON.stringify(ratings));
    });
};


