"use strict";

// document.addEventListener("DOMContentLoaded", function () {
// 	// Функция для добавления товаров в корзину с использованием URL-параметров
// 	const params = new URLSearchParams(window.location.search);

// 	// Если есть данные о товаре
// 	if (params.has("product_name")) {
// 		const productName = params.get("product_name");
// 		const productPrice = parseInt(params.get("product_price"));
// 		const productDetails = params.get("product_details");

// 		// Находим контейнер корзины
// 		const cartItemsContainer = document.querySelector('.cart-items');
// 		if (cartItemsContainer) {
// 			// Создаем элемент для товара в корзине
// 			const cartItem = document.createElement('div');
// 			cartItem.classList.add('cart-item');
// 			cartItem.innerHTML = `
//                 <p><strong>${productName}</strong></p>
//                 <p>${productDetails}</p>
//                 <p>Цена: ${productPrice} UAH</p>
//             `;
// 			// Добавляем товар в корзину
// 			cartItemsContainer.appendChild(cartItem);

// 			// Обновляем общую сумму корзины
// 			const totalPriceElement = document.querySelector('.total-price');
// 			let currentTotal = parseInt(totalPriceElement.innerText.replace(' UAH', ''));
// 			currentTotal += productPrice;
// 			totalPriceElement.innerText = currentTotal + ' UAH';
// 		}
// 	}
// });




// Когда кнопка "В кошик" нажата, добавляем товар в локальное хранилище
document.querySelectorAll('.add-to-cart').forEach(button => {
		button.addEventListener('click', function () {
			// Получаем данные о товаре из скрытых полей
			const productCard = this.closest('.product-form');
			const productName = productCard.querySelector('input[name="product_name"]').value;
			const productPrice = parseInt(productCard.querySelector('input[name="product_price"]').value);
			const productDetails = productCard.querySelector('input[name="product_details"]').value;

			// Создаем объект с данными о товаре
			const product = {
				name: productName,
				price: productPrice,
				details: productDetails
			};

			// Сохраняем товар в локальное хранилище (если корзина уже существует, добавляем товар)
			let cart = JSON.parse(localStorage.getItem('cart')) || [];
			cart.push(product);
			localStorage.setItem('cart', JSON.stringify(cart));

			alert(`${productName} добавлен в корзину`);
		});
});

