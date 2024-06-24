<script>
import { ref } from 'vue';
import SubscriptionPayComponent from "./subscription-pay.component.vue";
import SubscriptionDoneComponent from "./subscription-done.component.vue";

export default {
  name: "subscription",
  components: {
    'subscription-pay': SubscriptionPayComponent,
    'subscription-done': SubscriptionDoneComponent
  },
  setup() {
    const payDialogVisible = ref(false);
    const doneDialogVisible = ref(false);

    const openPayDialog = () => {
      payDialogVisible.value = true;
    };

    const closePayDialog = () => {
      payDialogVisible.value = false;
    };

    const openDoneDialog = () => {
      doneDialogVisible.value = true;
    };

    const closeDoneDialog = () => {
      doneDialogVisible.value = false;
    };

    const handlePaymentDone = () => {
      closePayDialog();
      openDoneDialog();
    };

    return {
      payDialogVisible,
      doneDialogVisible,
      openPayDialog,
      closePayDialog,
      openDoneDialog,
      closeDoneDialog,
      handlePaymentDone
    };
  }
}
</script>

<template>
  <div class="subscription-container">
    <div class="flex card-1">
      <pv-card class="card-info">
        <template #title>Legal help:</template>
        <template #content>
          <p class="m-0">
            For doctors seeking specialized legal assistance from our
            expert legal medicine lawyers. This group includes medical
            professionals from various specialties, from general practitioners
            to surgeons and specialists in specific areas such as obstetrics,
            oncology or neurology.
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <pv-button class="card-button" @click="goToLawyers">Go</pv-button>
          </div>
        </template>
      </pv-card>
    </div>
    <div class="flex card-2">
      <pv-card class="card-info">
        <template #title>Monthly Subscription:</template>
        <template #content>
          <p>For all people looking to purchase our subscriptions to obtain
            access to consultations and legal advice from lawyers specialized in medicine.
            The subscription lasts 30 days from the date and time it was purchased.</p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <pv-button class="card-button" @click="openPayDialog">Purchase</pv-button>
          </div>
        </template>
      </pv-card>
    </div>
    <subscription-pay v-if="payDialogVisible" @close="closePayDialog" @paymentDone="openDoneDialog"></subscription-pay>
    <subscription-done v-if="doneDialogVisible" @close="closeDoneDialog"></subscription-done>
  </div>
</template>

<style scoped>
.subscription-container{
  display: flex;
  height: 500px;
  align-items: center;
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
