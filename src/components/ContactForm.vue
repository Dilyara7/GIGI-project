<template>
    <div class="contact-form">
      <h2>Форма консультации по уходу за кожей</h2>
      <form @submit.prevent="submitForm">
        
        <div class="form-group">
          <label for="full_name">ФИО:</label>
          <input
            type="text"
            id="full_name"
            v-model="form.full_name"
            placeholder="Введите ваше полное имя"
            required
          />
        </div>
  
        <div class="form-group"></div>
          <label for="age">Возраст:</label>
          <input
            type="number"
            id="age"
            v-model="form.age"
            placeholder="Введите ваш возраст"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="skin_type">Тип кожи:</label>
          <select v-model="form.skin_type" id="skin_type" required>
            <option value="">Выберите ваш тип кожи</option>
            <option value="normal">Нормальная</option>
            <option value="dry">Сухая</option>
            <option value="oily">Жирная</option>
            <option value="combination">Комбинированная</option>
            <option value="sensitive">Чувствительная</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="skin_problem">Проблема с кожей:</label>
          <input
            type="text"
            id="skin_problem"
            v-model="form.skin_problem"
            placeholder="Опишите проблему с кожей (если есть)"
          />
        </div>
  
        <div class="form-group">
          <label for="problem_duration">Длительность проблемы:</label>
          <input
            type="text"
            id="problem_duration"
            v-model="form.problem_duration"
            placeholder="Как долго у вас эта проблема?"
          />
        </div>
  
        <button type="submit">Отправить</button>
      </form>
  
      <div v-if="submissionStatus" class="status">
        <p>{{ submissionStatus }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          full_name: '',
          age: '',
          skin_type: '',
          skin_problem: '',
          problem_duration: ''
        },
        submissionStatus: null
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.form)
          });
  
          if (!response.ok) {
            throw new Error('Ошибка при отправке данных на сервер.');
          }
  
          this.submissionStatus = 'Данные успешно отправлены! Спасибо.';
          this.form = {
            full_name: '',
            age: '',
            skin_type: '',
            skin_problem: '',
            problem_duration: ''
          };
        } catch (error) {
          this.submissionStatus = 'Произошла ошибка! Пожалуйста, попробуйте еще раз.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .status {
    margin-top: 20px;
    font-weight: bold;
    color: green;
  }
  </style>
  