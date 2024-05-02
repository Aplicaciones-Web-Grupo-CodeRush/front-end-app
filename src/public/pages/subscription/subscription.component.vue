<script>

export default {
  name: "subscription",
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    }
  },
}
</script>

<template>
  <div class="subscription-container">
    <div class="flex card-1">
      <pv-card class="card-info">
        <template #title>Ayuda Legal:</template>
        <template #content>
          <p class="m-0">
            Para médicos que buscan asistencia legal
            especializada de parte de nuestros abogados expertos en medicina legal.
            Este grupo ingluye a profesionales médicos de diversas especialidades,
            desde médicos generales hasta cirujanos y especialistas en áreas específicas
            como la obstetricia, oncología o la neurología.
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <pv-button class="card-button">Adquirir</pv-button>
          </div>
        </template>
      </pv-card>
    </div>
    <div class="flex card-2">
      <pv-card class="card-info">
        <template #title>Suscripción Mensual:</template>
        <template #content>
          <p>Para todas las personas que buscan adquirir nuestras suscripciones para obtener
            acceso a consultas y consejos legales de mano de abogados especializados en medicina.
            La suscripción dura 30 días a partir de la fecha y hora en que se compró.</p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <pv-button class="card-button" @click="openDialog">Adquirir</pv-button>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.subscription-container{
  display: flex;
  flex: wrap;
}
.card-1 {
  display: flex;
  background-color: red;
  margin: 10px;

}

.card-2 {
  display: flex;
  background-color: red;
  margin: 10px;

}

.card-info {
  background-color: #F2C6AC;
  font-size: 22px;
}

.card-button {
  background-color: #F29979;
  color: #000000;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 30px;
  font-size: 18px;
}

</style>
