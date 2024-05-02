<script>
export default {
  name: "subscription-pay",
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
      this.$emit('close');
    }
  },
  created() {
    this.openDialog();
  }
}
</script>

<template>
<div class="dialog-container">
  <pv-dialog v-model:visible="dialogVisible" :modal="true" :closable="false" @hide="closeDialog">
    <template #header>
      <pv-button label="Return" @click="closeDialog" class="close-button"></pv-button>
    </template>
    <pv-card class="card-info">
      <template #title>Consideraciones</template>
      <template #content>
        <div class="pay-title">
          <p>Solo proceda con el pago si es que ya lo ha acordado previamente con el abogado
            en cuestión, pues el costo del servicio puede variar del precio habitual. Si está completamente
            seguro, rellene la información abajo para poder efectuar el pago correspondiente.</p>
          <h2>Pago con Tarjeta</h2>
        </div>

        <div class="pay-container">
          <div class="pay-1 ">
            <div>
              <b>Numero de Tarjeta: </b>
              <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX">
            </div>
            <div>
              <b>Monto a pagar: </b>
              <input type="text" placeholder="S/ 0.00">
            </div>
          </div>
          <div class="pay-1">
            <div>
              <b>Fecha de Caducidad: </b>
              <input type="text" placeholder="MM/AA">
            </div>
            <div>
              <b>Código de Seguridad: </b>
              <input type="text" placeholder="XXX">
            </div>
          </div>
        </div>
        <pv-button class="close-button m-0">Continuar</pv-button>
      </template>
    </pv-card>
  </pv-dialog>
</div>
</template>

<style scoped>
.dialog-container{
  max-width: 500px;
}
.close-button{
  background-color: #F29979;
  color: #000000;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 30px;
  font-size: 18px;
}

.pay-title{
  max-width: 600px;
  font-size: 20px;
}

.pay-container {
  display: flex;
  flex-direction: column;
}

.pay-1{
  display: flex;
  gap: 10px;
  margin: 10px 0;
  justify-content: space-around;
}

.card-info {
  background-color: #F2C6AC;
  font-size: 22px;
}


</style>