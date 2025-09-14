// Функція, що повертає проміс із рядком
function getMessage (): Promise<string> {
    // Створюємо новий проміс
    return new Promise((resolve) => {
        // Виконуємо затримку на 1 секунду
        setTimeout(() => {
            // Повертаємо результат у вигляді рядка
            resolve("Hello from TS");
        }, 1000);
    });
}

// Виклик функції та вивід результату після виконання промісу
getMessage().then(result => console.log(result));
