function closeProductModal() {
    document.getElementById("product-modal").style.display = "none";
}

window.onclick = (event) => {
  if (event.target === document.getElementById("product-modal")) {
    document.getElementById("product-modal").style.display = "none";
  }
};

function showButton(card) {
    card.querySelector('.view-button').style.opacity = 1;
}

function hideButton(card) {
    card.querySelector('.view-button').style.opacity = 0;
}

  
function showProductDetails(button) {
    const card = button.closest('.tovar-card');
    const imageSrc = card.getAttribute('data-image');
    const title = card.querySelector('.tovar-title').textContent;
    const price = card.getAttribute('data-price');

    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-price").textContent = "Ціна: ₴" + price;
    document.getElementById("product-modal").style.display = "flex";
}


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