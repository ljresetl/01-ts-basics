// ДАНО
// обьєкт продукт
// const product = {
//     id: 1,
//     title: "Tablet",
//     description: "Compact and Fast",
// };
// console.log(`Product: ${JSON.stringify(product)}`);

// ЗАВДАННЯ
// Створи інтерфейс Product, який описує структуру цього об’єкта.
// Зроби поле id тільки для читання – воно не повинно змінюватись після створення об’єкта.
// Зроби поле description необов’язковим – не всі товари можуть його мати.
// Типізуй змінну product за допомогою створеного інтерфейсу.
// Залиш властивості обʼєкта product і їх значення без змін.

// Типізуємо
interface Product {
    id: number;
    description?: string;
    title: string;
}
//  Створюємо об’єкт product типу Product
//   і заповнюємо його полями
const product: Product = {
    id: 1,
    title: "Tablet",
    description: "Compact and Fast",
}

// Виводимо в консоль об’єкт product у вигляді рядка JSON
// JSON.stringify(product) перетворює об’єкт на рядок, 
// щоб його можна було вставити в шаблонний рядок
console.log(`Product: ${JSON.stringify(product)}`);

