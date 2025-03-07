"use strict";

// Когда кнопка "В кошик" нажата, добавляем товар в локальное хранилище
document.querySelectorAll('.add-to-cartp').forEach(button => {
	button.addEventListener('click', function () {
		// Получаем данные о товаре из скрытых полей
		const productCard = this.closest('.product-formp');
		const productName = productCard.querySelector('input[name="product_namep"]').value;
		const productPrice = parseInt(productCard.querySelector('input[name="product_pricep"]').value);
		const productDetails = productCard.querySelector('input[name="product_detailsp"]').value;

		// Создаем объект с данными о товаре
		const product = {
			name: productName,
			price: productPrice,
			details: productDetails
		};

		// Сохраняем товар в локальное хранилище (если корзина уже существует, добавляем товар)
		let cart = JSON.parse(localStorage.getItem('cart-paper')) || [];
		cart.push(product);
		localStorage.setItem('cart-paper', JSON.stringify(cart));

		alert(`${productName} добавлен в корзину`);
	});
});

