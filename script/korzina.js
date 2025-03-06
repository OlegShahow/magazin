"use strict";






// Загружаем данные из localStorage и отображаем товары в корзине
document.addEventListener("DOMContentLoaded", function () {
	const cartItemsContainer = document.querySelector('.cart-items');
	const totalPriceElement = document.querySelector('.total-price');

	// Получаем корзину из localStorage
	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	let totalPrice = 0;

	// Отображаем товары в корзине
	cart.forEach((product, index) => {
		const cartItem = document.createElement('div');
		cartItem.classList.add('cart-item');

		// Вставляем данные о товаре и кнопку удаления
		cartItem.innerHTML = `
            <p class ="name"><strong>${product.name}</strong></p>
            <p>${product.details}</p>
            <p class ="price">Вартість: ${product.price} UAH</p>
		            <button class="remove-from-cart" data-index="${index}">Видалити вибір</button>
        `;

		// Добавляем товар в корзину
		cartItemsContainer.appendChild(cartItem);

		// Суммируем общую цену
		totalPrice += product.price;
	});

	// Обновляем общую сумму корзины
	totalPriceElement.innerText = totalPrice + ' UAH';

	// Обработчик для кнопок "Удалить"
	const removeButtons = document.querySelectorAll('.remove-from-cart');
	removeButtons.forEach(button => {
		button.addEventListener('click', function () {
			const index = button.getAttribute('data-index');  // Получаем индекс товара
			removeItemFromCart(index);
		});
	});

	// Функция для удаления товара из корзины
	function removeItemFromCart(index) {
		// Удаляем товар из корзины по индексу
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		cart.splice(index, 1);  // Удаляем товар по индексу
		localStorage.setItem('cart', JSON.stringify(cart));  // Сохраняем обновленную корзину

		// Перезагружаем страницу, чтобы отобразить обновленную корзину
		location.reload();
	}
});