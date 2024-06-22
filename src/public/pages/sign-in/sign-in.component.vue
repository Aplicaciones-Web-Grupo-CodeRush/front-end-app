<script>
import { useRouter } from 'vue-router'
import { inject, onMounted, onUnmounted } from 'vue';

export default {
  name: 'sign-in',
  setup() {
    const showToolbar = inject('showToolbar');

    onMounted(() => {
      showToolbar.value = false;
    });

    onUnmounted(() => {
      showToolbar.value = true;
    });
    const router = useRouter()

    const email = ''
    const password = ''

    const goToRegister = () => {
      router.push('/sign-up')
    }

    const login = () => {
      router.push('/abogados')
    }

    return {
      email,
      password,
      goToRegister,
      login
    }
  }
}
</script>

<template>
  <div class="background">
    <div class="card-container">
      <pv-card class="card left-card">
        <template #content>
          <div class="img-left-card">
            <img src="https://github.com/Aplicaciones-Web-Grupo-CodeRush/Informe-Final/raw/Chapter-04/assets/imgs/Logo%20-%20MedicDefense.png" alt="Imagen">
          </div>
        </template>
      </pv-card>
      <pv-card class="card right-card">
        <template #content>
          <div class="form-card">
            <h2>Enter your account</h2>
            <p>¿Not registered yet? <pv-button @click="goToRegister">Create account</pv-button></p>
            <pv-input-text v-model="email" placeholder="Email" class="input"></pv-input-text>
            <pv-input-text v-model="password" placeholder="Password" class="input" type="password"></pv-input-text>
            <pv-button @click="login" style="color: black; background-color: #F29979" class="submit-button">Login</pv-button>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("https://aplicaciones-web-grupo-coderush.github.io/Landing-page-MedicDefense/assets/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
}

.left-card {
  width: 100%;
  height: 58vh;
  max-height: 100%;
  background-image: url("https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.img-left-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.img-left-card img {
  max-width: 100%;
  max-height: 100%;
}

.form-card {
  width: 100%;
  height: 58vh;
  max-height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input {
  margin-bottom: 10px;
  width: 100%;
}

.submit-button {
  margin-top: 20px;
  width: 100%;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    padding: 0 20px;
  }

  .card {
    width: 100%;
    margin: 10px 0;
  }

  .form-card {
    padding: 10px;
    height: auto;
  }
}
</style>