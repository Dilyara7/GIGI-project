<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $fullName = htmlspecialchars($_POST['full_name']);
    $age = htmlspecialchars($_POST['age']);
    $skinType = htmlspecialchars($_POST['skin_type']);
    $skinProblem = htmlspecialchars($_POST['skin_problem']);
    $problemDuration = htmlspecialchars($_POST['problem_duration']);
    
    // Email, на который будут отправлены данные
    $to = "talapkalievadana@gmail.com";
    
    // Тема письма
    $subject = "Консультация по уходу за кожей от $fullName";
    
    // Сообщение письма
    $message = "ФИО: $fullName\n";
    $message .= "Возраст: $age\n";
    $message .= "Тип кожи: $skinType\n";
    $message .= "Проблема с кожей: $skinProblem\n";
    $message .= "Длительность проблемы: $problemDuration\n";
    
    // Заголовки для отправки письма
    $headers = "From: no-talapkalievadana@gmail.com\r\n";
    $headers .= "Reply-To: no-talapkalievadana@gmail.com\r\n";
    
    // Отправляем письмо
    if (mail($to, $subject, $message, $headers)) {
        echo "Ваши данные успешно отправлены!";
    } else {
        echo "Ошибка при отправке данных.";
    }
}
?>
