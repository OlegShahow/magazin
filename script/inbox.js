"use strict";

// Когда кнопка "В кошик" нажата, добавляем товар в локальное хранилище
document.querySelectorAll('.add-to-cartb').forEach(button => {
	button.addEventListener('click', function () {
		// Получаем данные о товаре из скрытых полей
		const productCard = this.closest('.product-formb');
		const productName = productCard.querySelector('input[name="product_nameb"]').value;
		const productPrice = parseInt(productCard.querySelector('input[name="product_priceb"]').value);
		const productDetails = productCard.querySelector('input[name="product_detailsb"]').value;

		// Создаем объект с данными о товаре
		const product = {
			name: productName,
			price: productPrice,
			details: productDetails
		};

		// Сохраняем товар в локальное хранилище (если корзина уже существует, добавляем товар)
		let cart = JSON.parse(localStorage.getItem('cart-inbox')) || [];
		cart.push(product);
		localStorage.setItem('cart-inbox', JSON.stringify(cart));

		alert(`${productName} добавлен в корзину`);
	});
});

