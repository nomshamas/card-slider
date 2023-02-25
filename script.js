const reviews = [
  {    
    id: 1,
    img: "https://image.tmdb.org/t/p/original/1YFh9NStF75XWTLT9CPGG2395HN.jpg",
    name: "Sara Jones",
    designation: "Project Manager",
    review: "Not only was Nouman’s work on-time, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is willing to work through issues as they arise. It’s obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again."
  },
  {
    id: 2,
    img: "https://image.tmdb.org/t/p/original/1YFh9NStF75XWTLT9CPGG2395HN.jpg",
    name: "Bella Ladon",
    designation: "CTO",
    review: "I came to Nouman for a facelift for my site. I have been thoroughly delighted with the experience - Nouman is a very talented Developer, but also a lot more than that - his ability to grasp things with a fresh pair of eyes is great, and he has the seniority to project manage everything himself. Absolutely brilliant!"
  },
  {
    id: 3,
    img: "https://image.tmdb.org/t/p/original/1YFh9NStF75XWTLT9CPGG2395HN.jpg",
    name: "Sarah Bones",
    designation: "UI/UX Developer",
    review: "We have the fortune of working with Nouman on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined. Beyond that, his development skills and expertise make him an invaluable part of our process. We absolutely offer our highest possible recommendation."
  },
  
  {
    id: 4,
    img: "https://image.tmdb.org/t/p/original/1YFh9NStF75XWTLT9CPGG2395HN.jpg",
    name: "Lady Gaga",
    designation: "UI/UX Developer",
    review: "Nouman provided top quality, thoughtful and high impact design work with outstanding attention to detail. His communication was excellent from the outset and showed a willingness to persevere until the perfect design was achieved. Obviously passionate about the work, a true professional. Wouldn’t hesitate to recommend."
  },
  {
    id: 5,
    img: "https://image.tmdb.org/t/p/original/1YFh9NStF75XWTLT9CPGG2395HN.jpg",
    name: "Amandeya Jones",
    designation: "UI/UX Developer",
    review: "Working with Nouman was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients."
  },
];

let imgv = document.querySelector('.user-img');
let namev = document.querySelector('.user-name');
let designationv = document.querySelector('.user-designation');
let reviewv = document.querySelector('.user-words');

const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');
const supriseBtn = document.querySelector('.surprise');

let index = 0;

window.addEventListener('DOMContentLoaded', function() {
  showPerson();
});

nextBtn.addEventListener('click', function() {
  index++;
  if(index > reviews.length - 1) {
    index = 0;
  }
  showPerson();
});

prevBtn.addEventListener('click', function() {
  index--;
  if(index < 0) {
    index = reviews.length;
  }
  showPerson();
});

supriseBtn.addEventListener('click', function() {
  index = randomNumber();
  showPerson();
});

function showPerson() {
  let item = reviews[index];
  imgv.src = item.img;
  namev.textContent = item.name;
  designationv.textContent = item.designation;
  reviewv.textContent = item.review;
}

function randomNumber() {
  return Math.floor(Math.random() * reviews.length);
}



