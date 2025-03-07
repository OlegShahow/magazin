"use strict";


// Когда кнопка "В кошик" нажата, добавляем товар в локальное хранилище
document.querySelectorAll('.add-to-cartw').forEach(button => {
	button.addEventListener('click', function () {
		// Получаем данные о товаре из скрытых полей
		const productCard = this.closest('.product-formw');
		const productName = productCard.querySelector('input[name="product_namew"]').value;
		const productPrice = parseInt(productCard.querySelector('input[name="product_pricew"]').value);
		const productDetails = productCard.querySelector('input[name="product_detailsw"]').value;

		// Создаем объект с данными о товаре
		const product = {
			name: productName,
			price: productPrice,
			details: productDetails
		};

		// Сохраняем товар в локальное хранилище (если корзина уже существует, добавляем товар)
		let cart = JSON.parse(localStorage.getItem('cart-wedd')) || [];
		cart.push(product);
		localStorage.setItem('cart-wedd', JSON.stringify(cart));

		alert(`${productName} добавлен в корзину`);
	});
});

