// Оголошення інтерфейсу для постів
interface Post {
    id: number;     // Ідентифікатор посту
    title: string;  // Заголовок посту
    body: string;   // Тіло посту
}

// Імпорт бібліотеки axios для HTTP-запитів
import axios from "axios";

// Асинхронна функція для отримання постів
async function fetchPosts(): Promise<Post[]> {
  // Виконання GET-запиту та очікування результату
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  // Повертаємо масив постів з відповіді
  return response.data;
}

// Виклик функції та вивід заголовку першого посту
fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
