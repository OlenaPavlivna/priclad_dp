
 const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModal");
  const span = document.querySelector(".close");

  btn.onclick = function(event) {
    event.preventDefault(); 
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

let swiper = new Swiper('.swiper-container', {  
    autoplay: {  
        delay: 1000,  
        disableOnInteraction: false,  
    },
    
    pagination: {  
        el: '.swiper-pagination',  
        type: 'fraction',  
        clickable: true,  
    },

    navigation: {  
        nextEl: '.swiper-button-next',  
        prevEl: '.swiper-button-prev',  
    },
    
    allowTouchMove: false,  

    on: {  
        init: function() {  
            var prevButton = document.querySelector('.swiper-button-prev');  
            var nextButton = document.querySelector('.swiper-button-next');  
            prevButton.style.left = '10px';  
            nextButton.style.right = '10px';  
            prevButton.style.top = '50%';  
            prevButton.style.transform = 'translateY(-50%)';  
            nextButton.style.top = '50%';  
            nextButton.style.transform = 'translateY(-50%)';  
            document.querySelector('.swiper-pagination').style.bottom = '10px';  
        },
    },
});


document.querySelector('.category-container .category-item:nth-child(1)').addEventListener('click', function() {  
    window.location.href = 'pie.html';  
});

document.querySelector('.category-container .category-item:nth-child(2)').addEventListener('click', function() {  
    window.location.href = 'cake.html';  
});

document.querySelector('.category-container .category-item:nth-child(3)').addEventListener('click', function() {  
    window.location.href = 'ice.html';  
});

document.querySelector('.category-container .category-item:nth-child(4)').addEventListener('click', function() {  
    window.location.href = 'candy.html';  
});

document.querySelector('.category-container .category-item:nth-child(5)').addEventListener('click', function() {  
    window.location.href = 'cookies.html';  
});


document.querySelector('.category-container .category-item:nth-child(6)').addEventListener('click', function() {  
    window.location.href = 'drink.html'; 
});


let moveForward = true; 
let autoSlideInterval; 
let isMouseOver = false; 
let isArrowClicked = false; 

function startAutoSlide() {
    clearInterval(autoSlideInterval); 

    if (!isMouseOver && !isArrowClicked) {
        autoSlideInterval = setInterval(() => {
            const nextButton = document.querySelector('#custom-slider .swiper-button-next');
            const prevButton = document.querySelector('#custom-slider .swiper-button-prev');

            if (moveForward) {
                nextButton.click(); 
                if (nextButton.classList.contains('swiper-button-disabled')) {
                    moveForward = false; 
                }
            } else {
                prevButton.click(); 
                if (prevButton.classList.contains('swiper-button-disabled')) {
                    moveForward = true; 
                }
            }
        }, 1000); 
    }
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.querySelector('#custom-slider').addEventListener('mouseenter', () => {
    isMouseOver = true;
    stopAutoSlide();
});

document.querySelector('#custom-slider').addEventListener('mouseleave', () => {
    isMouseOver = false;
    setTimeout(startAutoSlide, 2000); 
});


document.querySelector('#custom-slider .swiper-button-next').addEventListener('click', () => {
    isArrowClicked = true;
    stopAutoSlide(); 
    setTimeout(() => {
        isArrowClicked = false;
        startAutoSlide();
    }, 1000); 
});

document.querySelector('#custom-slider .swiper-button-prev').addEventListener('click', () => {
    isArrowClicked = true;
    stopAutoSlide(); 
    setTimeout(() => {
        isArrowClicked = false;
        startAutoSlide();
    }, 1000); 
});

startAutoSlide();
















