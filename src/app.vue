<script>
  export default {
      name: 'app',
      title: 'MedicDefense',
      data() {
        return {
          items: [
            { label: 'Lawyers', to: '/abogados' },
            { label: 'Subscription', to: '/subscription' }
          ],
        }
      },
      methods: {
        toggleDrawer() {
          this.drawer = !this.drawer;
        }
      }
}
</script>

<template>
  <pv-toast/>
  <header>
    <pv-toolbar class="bg-primary">
      <template #start>
        <img src="/src/assets/img/Logo.png" alt="Logo" class="toolbar-logo" />
        <div class="flex-column">
          <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text text-white" @click="navigate">{{ item.label }}</pv-button>
          </router-link>
          <router-link to="/perfil">
            <pv-button class="p-button-text text-white">Perfil</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <router-view class="router-view-class"/>
</template>

<style scoped>
.bg-primary {
  background-color: #3d3737;
}
.p-button-text {
  color: white;
}
.bg-primary {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.router-view-class {
  margin-top: 100px;
}
.toolbar-logo {
  height: 10%;
  width: 10%;
  object-fit: contain;
}
</style>
