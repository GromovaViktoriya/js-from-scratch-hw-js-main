// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
    let evenNumber = num % 2 === 0;
    return evenNumber;
}

console.log(isEven(7))
