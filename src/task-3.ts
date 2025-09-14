// Масив рядків із іменами користувачів
const usernames: string[] = ["alice", "bob", "charlie"];

// Масив чисел з оцінками
const ratings: number[] = [4.5, 3.8, 5];

// Оголошення інтерфейсу для продуктів
interface Products {
    // Ідентифікатор продукту
    id: number;
    // Назва продукту
    title: string;
}

// Масив об’єктів, що відповідають інтерфейсу Products
const products: Products[] = [
    { id: 1, title:"Phone" },
    { id: 2, title:"Laptop"},
];

// Вивід масиву usernames у консоль у форматі JSON
console.log(`Usernames: ${JSON.stringify(usernames)}`);

// Вивід масиву ratings у консоль у форматі JSON
console.log(`Rating: ${JSON.stringify(ratings)}`);

// Вивід масиву products у консоль у форматі JSON
console.log(`Products: ${JSON.stringify(products)}`);
