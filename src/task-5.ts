// Тип, що може приймати лише три рядкові значення
type Status = "loading" | "success" | "error";

// Функція для виводу повідомлення залежно від статусу
function logStatus(status: Status): void {
  // Якщо статус "loading"
  if (status === "loading") {
    console.log("Loading...");
  // Якщо статус "success"
  } else if (status === "success") {
    console.log("Success!");
  // Якщо статус "error"
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

// Виклик функції зі статусом "loading"
logStatus("loading");

// Виклик функції зі статусом "success"
logStatus("success");

// Виклик функції зі статусом "error"
logStatus("error");
