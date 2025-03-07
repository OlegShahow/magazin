"use strict";




// ........................................    БУКЕТЫ 

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


// ........................................  В КОРОБКАХ   ...................................................................


// Загружаем данные из localStorage и отображаем товары в корзине
document.addEventListener("DOMContentLoaded", function () {
	const cartItemsContainer = document.querySelector('.cart-itemsb');
	const totalPriceElement = document.querySelector('.total-priceb');

	// Получаем корзину из localStorage
	const cart = JSON.parse(localStorage.getItem('cart-inbox')) || [];
	let totalPrice = 0;

	// Отображаем товары в корзине
	cart.forEach((product, index) => {
		const cartItem = document.createElement('div');
		cartItem.classList.add('cart-itemb');

		// Вставляем данные о товаре и кнопку удаления
		cartItem.innerHTML = `
            <p class ="nameb"><strong>${product.name}</strong></p>
            <p>${product.details}</p>
            <p class ="priceb">Вартість: ${product.price} UAH</p>
		            <button class="remove-from-cartb" data-index="${index}">Видалити вибір</button>
        `;

		// Добавляем товар в корзину
		cartItemsContainer.appendChild(cartItem);

		// Суммируем общую цену
		totalPrice += product.price;
	});

	// Обновляем общую сумму корзины ( НЕ НАДО ТАК КА НИЖЕ СКРИПТ ДЛЯ ПОДСЧЁТА СУММЫ ДЛЯ ВСЕХ БЛОКОВ. ЭТО ТОЛЬКО ЕСЛИ  ОДИН БЛОК ТОВАРА)
	// totalPriceElement.innerText = totalPrice + ' UAH';

	// Обработчик для кнопок "Удалить"
	const removeButtons = document.querySelectorAll('.remove-from-cartb');
	removeButtons.forEach(button => {
		button.addEventListener('click', function () {
			const index = button.getAttribute('data-index');  // Получаем индекс товара
			removeItemFromCart(index);
		});
	});

	// Функция для удаления товара из корзины
	function removeItemFromCart(index) {
		// Удаляем товар из корзины по индексу
		const cart = JSON.parse(localStorage.getItem('cart-inbox')) || [];
		cart.splice(index, 1);  // Удаляем товар по индексу
		localStorage.setItem('cart-inbox', JSON.stringify(cart));  // Сохраняем обновленную корзину

		// Перезагружаем страницу, чтобы отобразить обновленную корзину
		location.reload();
	}
});




// ............................................  СВАДЕБНЫЕ



// Загружаем данные из localStorage и отображаем товары в корзине
document.addEventListener("DOMContentLoaded", function () {
	const cartItemsContainer = document.querySelector('.cart-itemsw');
	const totalPriceElement = document.querySelector('.total-pricew');

	// Получаем корзину из localStorage
	const cart = JSON.parse(localStorage.getItem('cart-wedd')) || [];
	let totalPrice = 0;

	// Отображаем товары в корзине
	cart.forEach((product, index) => {
		const cartItem = document.createElement('div');
		cartItem.classList.add('cart-itemw');

		// Вставляем данные о товаре и кнопку удаления
		cartItem.innerHTML = `
            <p class ="namew"><strong>${product.name}</strong></p>
            <p>${product.details}</p>
            <p class ="pricew">Вартість: ${product.price} UAH</p>
		            <button class="remove-from-cartw" data-index="${index}">Видалити вибір</button>
        `;

		// Добавляем товар в корзину
		cartItemsContainer.appendChild(cartItem);

		// Суммируем общую цену
		totalPrice += product.price;
	});

	// // Обновляем общую сумму корзины
	// totalPriceElement.innerText = totalPrice + ' UAH';

	// Обработчик для кнопок "Удалить"
	const removeButtons = document.querySelectorAll('.remove-from-cartw');
	removeButtons.forEach(button => {
		button.addEventListener('click', function () {
			const index = button.getAttribute('data-index');  // Получаем индекс товара
			removeItemFromCart(index);
		});
	});

	// Функция для удаления товара из корзины
	function removeItemFromCart(index) {
		// Удаляем товар из корзины по индексу
		const cart = JSON.parse(localStorage.getItem('cart-wedd')) || [];
		cart.splice(index, 1);  // Удаляем товар по индексу
		localStorage.setItem('cart-wedd', JSON.stringify(cart));  // Сохраняем обновленную корзину

		// Перезагружаем страницу, чтобы отобразить обновленную корзину
		location.reload();
	}
});


// ..............................   бумажные   ................................................


// Загружаем данные из localStorage и отображаем товары в корзине
document.addEventListener("DOMContentLoaded", function () {
	const cartItemsContainer = document.querySelector('.cart-itemsp');
	const totalPriceElement = document.querySelector('.total-pricep');

	// Получаем корзину из localStorage
	const cart = JSON.parse(localStorage.getItem('cart-paper')) || [];
	let totalPrice = 0;

	// Отображаем товары в корзине
	cart.forEach((product, index) => {
		const cartItem = document.createElement('div');
		cartItem.classList.add('cart-itemp');

		// Вставляем данные о товаре и кнопку удаления
		cartItem.innerHTML = `
            <p class ="namep"><strong>${product.name}</strong></p>
            <p>${product.details}</p>
            <p class ="pricep">Вартість: ${product.price} UAH</p>
		            <button class="remove-from-cartp" data-index="${index}">Видалити вибір</button>
        `;

		// Добавляем товар в корзину
		cartItemsContainer.appendChild(cartItem);

		// Суммируем общую цену
		totalPrice += product.price;
	});

	// Обновляем общую сумму корзины ( НЕ НАДО ТАК КА НИЖЕ СКРИПТ ДЛЯ ПОДСЧЁТА СУММЫ ДЛЯ ВСЕХ БЛОКОВ. ЭТО ТОЛЬКО ЕСЛИ  ОДИН БЛОК ТОВАРА)
	// totalPriceElement.innerText = totalPrice + ' UAH';

	// Обработчик для кнопок "Удалить"
	const removeButtons = document.querySelectorAll('.remove-from-cartp');
	removeButtons.forEach(button => {
		button.addEventListener('click', function () {
			const index = button.getAttribute('data-index');  // Получаем индекс товара
			removeItemFromCart(index);
		});
	});

	// Функция для удаления товара из корзины
	function removeItemFromCart(index) {
		// Удаляем товар из корзины по индексу
		const cart = JSON.parse(localStorage.getItem('cart-paper')) || [];
		cart.splice(index, 1);  // Удаляем товар по индексу
		localStorage.setItem('cart-paper', JSON.stringify(cart));  // Сохраняем обновленную корзину

		// Перезагружаем страницу, чтобы отобразить обновленную корзину
		location.reload();
	}
});

// ................................ ЭТОТ КОД СКЛАДЫВАЕТ ВСЕ СУММЫ ИЗ ЗАКАЗА ......................................................

document.addEventListener("DOMContentLoaded", function () {
	// Получаем корзины из localStorage
	const cart1 = JSON.parse(localStorage.getItem('cart')) || [];
	const cart2 = JSON.parse(localStorage.getItem('cart-inbox')) || [];
	const cart3 = JSON.parse(localStorage.getItem('cart-wedd')) || [];
	const cart4 = JSON.parse(localStorage.getItem('cart-paper')) || [];

	// Суммируем цены для первой корзины
	let totalPrice1 = 0;
	cart1.forEach(product => {
		totalPrice1 += product.price;
	});

	// Суммируем цены для второй корзины
	let totalPrice2 = 0;
	cart2.forEach(product => {
		totalPrice2 += product.price;
	});

	// Суммируем цены для 3 корзины
	let totalPrice3 = 0;
	cart3.forEach(product => {
		totalPrice3 += product.price;
	});


	// Суммируем цены для 4 корзины
	let totalPrice4 = 0;
	cart4.forEach(product => {
		totalPrice4 += product.price;
	});

	// Общая сумма заказа
	const totalOrder = totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4;

	// Отображаем общую сумму в элементе с классом .total-price
	const totalPriceElement = document.querySelector('.total-price');  // Этот элемент для общей суммы
	totalPriceElement.innerText = 'Загальна вартість замовлення: ' + totalOrder + ' UAH';
});
