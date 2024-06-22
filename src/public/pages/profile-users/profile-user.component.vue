<script setup>
import { onMounted, ref } from 'vue';
import { UsersApiService } from '../../../users/services/profile-api.service.js'
import Card from "primevue/card";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const usersApiService = new UsersApiService();
const users = ref([]);
const dialogVisible = ref(false);
const editingUser = ref(null);

onMounted(async () => {
  users.value = await usersApiService.getUsers();
});

function openEditDialog(user) {
  editingUser.value = { ...user };
  dialogVisible.value = true;
}

function closeEditDialog() {
  dialogVisible.value = false;
}

async function saveChanges() {
  try {
    const index = users.value.findIndex(u => u.id === editingUser.value.id);
    if (index !== -1) {
      users.value[index] = { ...editingUser.value };
    }
    dialogVisible.value = false;
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div v-for="user in users" :key="user.id" class="content-all">
    <div class="content-first">
      <div >
        <img class="user-image" :src="user.urlToImage" alt="User image">
      </div>
      <div>
        <h2>Nombres: {{user.name}}</h2>
        <h2>Correo: {{user.email}}</h2>
        <h2>DNI: {{user.DNI}}</h2>
      </div>
    </div>
    <div class="content-all2">
      <div>
        <h2> Consultas realizadas: {{user.queriesMade}}</h2>
        <h2>Servicios Pagados: {{user.paidServices}}</h2>
      </div>
      <div>
        <h2>Suscripciones pagadas: {{user.paidSubscriptions}}</h2>
        <h2>Estado: {{user.state}}</h2>
      </div>
      <div>
      </div>
    </div>
    <div class="content-all3">
      <button class="button-profile" @click="openEditDialog(user)">Editar perfil</button>
      <button class="button-profile">Cerrar sesión</button>
      <button class="button-profile">Borrar cuenta</button>
    </div>

    <Dialog :visible.sync="dialogVisible" :modal="true" :closable="false">
      <template #header>
        <h2>Editar perfil</h2>
      </template>

      <div v-if="editingUser">
        <div>
          <label for="name">Nombres:</label>
          <InputText id="name" v-model="editingUser.name" />
        </div>
        <div>
          <label for="email">Correo:</label>
          <InputText id="email" v-model="editingUser.email" />
        </div>
        <div>
          <label for="DNI">DNI:</label>
          <InputText id="DNI" v-model="editingUser.DNI" />
        </div>
      </div>

      <template #footer>
        <Button label="Guardar" @click="saveChanges" />
        <Button label="Cancelar" @click="closeEditDialog" />
      </template>
    </Dialog>
  </div>
</template>

<style scoped>
.content-all {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  margin: 180px;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #F2C6AC;
  font-family: 'Open Sans', sans-serif
}
.content-first {
  background-color: #F2C6AC;
  display: flex;
  justify-content: center;
  gap: 80px;

}
.user-image {
  width: 140px;
  height: 95px;
}
.content-all2 {
  display: flex;
  justify-content: center;
  gap: 80px;
  background-color: #F2C6AC;
  margin-top: 20px
}
.content-all3 {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
}
.button-profile {
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #F29979;
  border-style: none;
}

@media only screen and (max-width: 600px){
  .cards-content {
    grid-template-columns: unset;
  }
}

</style>