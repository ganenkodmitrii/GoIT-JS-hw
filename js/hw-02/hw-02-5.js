/**
 * Задача 2-5
 Функция предикат
Функция предикат возвращает true или false

Напиши функцию checkForSpam(message), 
принимающую 1 параметр message - строку. 
Функция проверяет ее на содержание слов spam и sale. 
Если нашли запрещенное слово то функция возвращает true, 
если запрещенных слов нет функция возвращает false. 
Слова в строке могут быть в произвольном регистре.
 */

function checkForSpam(str) {
  // Write code under this line
  const SPAM = 'spam';
  const SALE = 'sale';
  let message = str.toLowerCase();

  //   const word1 = message.includes(SPAM);
  //   const word2 = message.includes(SALE);
  //   if (word1 || word2) {
  if (message.includes(SPAM) || message.includes(SALE)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
