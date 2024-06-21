<script>
import { useRouter } from 'vue-router'

export default {
  name: 'sign-in',
  setup() {
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
<div class="sign-in-structure">
  <pv-card class="img-card" style="width: 500px !important; height: 800px">
    <template #content>
      <div class="img-container">
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/0df7864b-98fb-49c3-a232-dce0c30d90ab-profile_image-300x300.png" alt="Logo" class="logo" />
      </div>
    </template>
  </pv-card>
  <pv-card class="form-card" style="width: 600px !important; height: 800px">
    <template #content>
      <div class="card-info">
        <div style="text-align:left; font-size: 30px"><h2>Enter your account</h2></div>
        <br><br>
        <div style="text-align: left; font-size: 15px"><h2>Not registered?</h2></div>
        <div>
        <router-link to="/sign-up" target="_blank" rel="noopener">
          <pv-button label="Create Account" />
        </router-link>
        </div>
        <br>
        <pv-float-label>
          <pv-input-text id="email" v-model="email" />
          <label for="email">Enter your Email</label>
        </pv-float-label>
        <pv-float-label>
          <pv-input-text id="password" v-model="password" />
          <label for="email">Enter your Password</label>
        </pv-float-label>
        <router-link to="/abogados" target="_blank" rel="noopener">
          <pv-button label="Login" />
        </router-link>
      </div>
    </template>
  </pv-card>
</div>


</template>

<style scoped>
.sign-in-structure {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://pbs.twimg.com/profile_images/1512157485301473285/nLBZi0B3_400x400.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.img-card {
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7W3JUM_eQPONo39NLu4O9RTmEoEx8h-6RA&s");
}

img-card-logo {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card-info {
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-content: center;
  max-width: 500px;
}

.form-card {
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}

</style>