// 1.	Запросить 2 числа и найти только наибольший общий делитель.
let num1 = parseInt(prompt('Enter your first number: '));
let num2  = parseInt(prompt('Enter your secomd number: '));

function findNOD(num1, num2) //функция принимает данные 2 числа в качестве аргументов
 {
    while (num2 !==0) //цикл while будет выполняться пока второе число не станет равно 0
        {
        let temp = num1 % num2;
        //цикл while используется чтобы повторять деление 
        num1 = num2; //значения номера1 и номера2 меняются местами
        num2 = temp; //остаток деление сохраняется в переменной temp
    }
    return num1; //в конце функция возвращает значение num1, которое теперь является НОД
}

let nod = findNOD(num1, num2);
alert ('The largest common divisor is : ' + nod);

// 3.	Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
let input; // Переменная для хранения введенного числа
let positiveCount = 0; // Счетчик положительных чисел
let negativeCount = 0; // Счетчик отрицательных чисел
let zeroCount = 0; // Счетчик нулей
let evenCount = 0; // Счетчик четных чисел
let oddCount = 0; // Счетчик нечетных чисел

// Запрос 10 чисел у пользователя
for (let i = 1; i < 10; i++) {
  do {
    input = parseInt(prompt('Enter a number out of 10: '));
  } while (isNaN(input)); // Проверка на число

  // Подсчет по категориям
  if (input > 0) {
    positiveCount++;
  } else if (input < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (input % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

// Отображение статистики
alert(`Of the entered digits - positive: ${positiveCount}, negative: ${negativeCount}, zeros: ${zeroCount}, odd: ${oddCount}`);

//4.	Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
function calculate() //содержит всю логику калькулятора
{
    let number1 = parseFloat(prompt('Enter first number: '));
    let number2 = parseFloat(prompt('Enter second number: '));
    let operator = prompt('Enter the operation sign (+, -, *, /): ');

//проверка на корректность ввода
if(isNaN(number1) || isNaN(number2)) {
    alert('Incorrect input. Please enter two numbers and the operation sign.');
    return;
}

//вычисление результата
let result;
switch (operator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        result = number1 / number2;
        break;
    default:
        alert('The operation sign is incorrect. +, -, *, / are available.');
        return;
}
//вывод результата
alert(`${number1},${operator},${number2} = ${result}`);

//спросить пользователя, хочет ли он решить еще один пример
let answer = prompt('Do you want to solve another example? (yes/no): ');
if (answer.toLowerCase() === 'yes') {
    calculate();
    //функция calculate сама себя вызывает, если пользователь отвечает "да" на вопрос о решении еще одного примера.
} else {
    alert('Thanks for using the calculator!');
}
}

//запуск калькулятора
calculate();

//6.Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK. 
// Массив с названиями дней недели
//days массив который содержит все дни недели
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Текущий день (начинаем с 0)
let currentDay = 0;

// Цикл `do...while`
do {
  // Вывод названия дня недели
  console.log(`${days[currentDay]}. Do you want to see the next day?`);

  // Запрос ответа пользователя
  let answer = prompt("Type OK to see the next day. (Enter 'stop' to exit)");

  // Проверка ответа
  if (answer.toLowerCase() === "ok") {
    // Переход к следующему дню
    currentDay = (currentDay + 1) % days.length;
  } else if (answer.toLowerCase() === "stop") {
    // Прерывание цикла
    break;
  } else {
    // Неверный ответ
    console.log("Wrong answer. Please enter OK or 'stop'.");
  }
} while (true);
