// ==========================
// MBH শব্দনীড় 2.0 JavaScript
// ==========================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// Sticky Header Shadow

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 30){

        header.style.boxShadow="0 6px 20px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="0 2px 10px rgba(0,0,0,.08)";

    }

});

// Welcome Message

console.log("📚 Welcome to MBH শব্দনীড়");

// Auto Footer Year

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} MBH শব্দনীড় | সর্বস্বত্ব সংরক্ষিত`;

}
// Auto Banner Slider

let slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(){

    slides.forEach(slide=>slide.classList.remove("active"));

    current++;

    if(current >= slides.length){

        current = 0;

    }

    slides[current].classList.add("active");

}

setInterval(showSlide,4000);
// ===== Book Search =====

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let books = document.querySelectorAll(".book-card");

books.forEach(book=>{

let title = book.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){
book.style.display="block";
}else{
book.style.display="none";
}

});

});

}
