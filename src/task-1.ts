// Типізуємо
interface User {
    name: string;
    age: number;
    isOnline: boolean;
}

//  Створюємо об’єкт user типу User
//   і заповнюємо його полями
const user: User = {
    name: "Alice",
    age: 30,
    isOnline: true,
}


// Виводимо
console.log(user)

// Результат:
// {name: 'Alice', age: 30, isOnline: true}