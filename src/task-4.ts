// Функція для виводу інформації про користувача (email необов’язковий)
function printUserInfo(name: string, age: number, email?: string): void {
    // Вивід імені у консоль
    console.log("Name:", name);
    // Вивід віку у консоль
    console.log("Age:", age);
    // Якщо email передано – вивести його
    if (email) {
        console.log("Email:", email);
    }
}

// Виклик функції без email
printUserInfo("Alice", 30);

// Виклик функції з email
printUserInfo("Bob", 25, "bob@MediaList.com");
