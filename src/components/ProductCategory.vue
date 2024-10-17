<template>
  <div>
    <!-- Кнопка для отображения формы -->
    <button @click="showForm = !showForm" v-if="!showForm">Заполнить форму</button>

    <!-- Форма, которая появляется при нажатии на кнопку -->
    <div v-if="showForm" class="contact-form">
      <h2>Байланыс формасы</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Атыңыз:</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Атыңызды енгізіңіз"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Электрондық пошта:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Поштаны енгізіңіз"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Хабарлама:</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Хабарламаңызды енгізіңіз"
            required
          ></textarea>
        </div>
        <button type="submit">Жіберу</button>
      </form>

      <div v-if="submissionStatus" class="status">
        <p>{{ submissionStatus }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showForm: false, // Переменная для управления отображением формы
      form: {
        name: '',
        email: '',
        message: ''
      },
      submissionStatus: null,
    };
  },
  methods: {
    async submitForm() {
      try {
        // Отправка POST-запроса на сервер
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        });

        if (!response.ok) {
          throw new Error('Қате! Серверге деректерді жіберу мүмкін болмады.');
        }

        const data = await response.json();
        // Показ успешного сообщения
        this.submissionStatus = 'Деректер сәтті жіберілді! Рахмет.';
        console.log('Жіберілген деректер:', data);

        // Очистка формы
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      } catch (error) {
        this.submissionStatus = 'Қате болды! Қайта жіберуге тырысыңыз.';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.contact-form {
  max-width: 400px;
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
textarea {
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
<p>Show form state: {{ showForm }}</p>

