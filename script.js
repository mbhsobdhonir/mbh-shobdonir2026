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
// ===== Mobile Menu =====

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

if(menuToggle){

menuToggle.addEventListener("click", ()=>{

nav.classList.toggle("active");

});

}
// ===== Back To Top =====

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ===== Dark Mode =====

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});
/* =========================================
   📚 MBH শব্দনীড়
   Book Review System
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const reviewForm = document.getElementById("reviewForm");
    const reviewList = document.getElementById("reviewList");
    const reviewCount = document.getElementById("reviewCount");
    const noReviewMessage = document.getElementById("noReviewMessage");

    if (!reviewForm) return;


    /* ===== Load Reviews ===== */

    let reviews = JSON.parse(
        localStorage.getItem("mbhPakhirNirReviews")
    ) || [];


    /* ===== Display Reviews ===== */

    function displayReviews() {

        reviewList.innerHTML = "";

        reviewCount.textContent =
            reviews.length + "টি রিভিউ";


        if (reviews.length === 0) {

            noReviewMessage.style.display = "block";

            return;
        }

        noReviewMessage.style.display = "none";


        reviews.forEach(function (review) {

            const reviewItem =
                document.createElement("div");

            reviewItem.className = "review-item";


            /* User Section */

            const userSection =
                document.createElement("div");

            userSection.className = "review-user";


            const reviewerInfo =
                document.createElement("div");

            reviewerInfo.className = "reviewer-info";


            /* Avatar */

            const avatar =
                document.createElement("div");

            avatar.className = "reviewer-avatar";

            avatar.textContent = "👤";


            /* Name + Date */

            const info =
                document.createElement("div");


            const name =
                document.createElement("div");

            name.className = "reviewer-name";

            name.textContent = review.name;


            const date =
                document.createElement("div");

            date.className = "review-date";

            date.textContent = review.date;


            info.appendChild(name);
            info.appendChild(date);


            reviewerInfo.appendChild(avatar);
            reviewerInfo.appendChild(info);


            /* Stars */

            const stars =
                document.createElement("div");

            stars.className = "review-stars";

            stars.textContent =
                "★".repeat(review.rating) +
                "☆".repeat(5 - review.rating);


            userSection.appendChild(reviewerInfo);
            userSection.appendChild(stars);


            /* Review Text */

            const reviewText =
                document.createElement("div");

            reviewText.className = "review-text";

            reviewText.textContent =
                review.text;


            reviewItem.appendChild(userSection);
            reviewItem.appendChild(reviewText);


            reviewList.appendChild(reviewItem);

        });

    }


    /* ===== Submit Review ===== */

    reviewForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("reviewerName").value.trim();

        const text =
            document.getElementById("reviewText").value.trim();

        const selectedRating =
            document.querySelector(
                'input[name="rating"]:checked'
            );


        if (!name) {

            alert("দয়া করে আপনার নাম লিখুন।");

            return;
        }


        if (!selectedRating) {

            alert("দয়া করে একটি স্টার রেটিং দিন ⭐");

            return;
        }


        if (!text) {

            alert("দয়া করে আপনার মতামত লিখুন।");

            return;
        }


        const rating =
            Number(selectedRating.value);


        const today =
            new Date().toLocaleDateString(
                "bn-BD",
                {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }
            );


        const newReview = {

            name: name,

            rating: rating,

            text: text,

            date: today

        };


        reviews.unshift(newReview);


        localStorage.setItem(
            "mbhPakhirNirReviews",
            JSON.stringify(reviews)
        );


        /* Reset Form */

        reviewForm.reset();


        /* Update */

        displayReviews();


        alert(
            "❤️ আপনার রিভিউ সফলভাবে প্রকাশ হয়েছে।"
        );

    });


    /* Initial Load */

    displayReviews();

});
