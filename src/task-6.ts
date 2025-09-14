// Узагальнена функція, що повертає перший елемент масиву
function getFirstElement<T>(arr: T[]): T {
    // Повертаємо перший елемент масиву
    return arr[0];
}

// Виклик функції з масивом чисел
console.log(getFirstElement<number>([1, 2, 3]));

// Виклик функції з масивом рядків
console.log(getFirstElement<string>(["a", "b", "c"]));

// Виклик функції з масивом булевих значень
console.log(getFirstElement<boolean>([true, false, true]));
