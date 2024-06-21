<script>
export default {
  name: 'sign-up',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/signin');
    },
    signUp() {
      // Aquí puedes agregar la lógica de autenticación
      // Si la autenticación es exitosa, redirige a la página de abogados
      this.$router.push('/abogados');
    }
  }
}
</script>

<template>

</template>

<style scoped>

</style>