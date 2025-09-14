// Оголошення інтерфейсу Product
interface Product {
    // Унікальний ідентифікатор (тільки для читання)
    readonly id: number; 
    
    // Необов’язковий опис
    description?: string;
    
    // Заголовок (назва товару)
    title: string;
}

// Створення об’єкта product, що відповідає інтерфейсу Product
const product: Product = {
    id: 1,
    title: "Tablet",
    description: "Compact and Fast",
}

// Вивід об’єкта product у консоль у форматі JSON
console.log(`Product: ${JSON.stringify(product)}`);
