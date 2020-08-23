/*Задача 1-4
  *Использование if else и арифметических операторов
Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.

Переменная credits хранит количество средств - 23580 кредитов.

Единица товара (дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.

Переменная orderPieces принимает значения null (отказ от покупок) и целое положительное число (количество единиц товара).

Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:
1. const CANCELED_BY_USER = 'Отменено пользователем!'
2. ‛Вы купили ${} дроидов, на счету осталось ${} кредитов‛
3. const ACCESS_DENIED = 'Недостаточно средств на счету!'

-Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
-Используйте вспомогательную переменную balanceСredit, которая принимает разницу между credits и totalPrice.
-А также используйте if else для выбора значений переменной message. 
*/
const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid; // Write code in this line
let balanceСredit = credits - totalPrice; // Write code in this line

console.log(totalPrice);
console.log(balanceСredit);
let message;

// // Write code under this line
if (orderPieces === null) {
  message = `${CANCELED_BY_USER}`;
} else if (credits >= totalPrice) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceСredit} кредитов`;
} else if (credits <= totalPrice) {
  message = `${ACCESS_DENIED}`;
}

console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
